/* ═══════════════════════════════════════════════════════════
   FILM BOX ART — Procedural SVG generator
   Draws a realistic film box for each stock entry.
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Brand design configs ────────────────────────────────────
  // Each brand has a box identity: background, accent, label color, logo style
  const BRAND_BOX = {
    'Kodak': {
      bg: '#f4b830', stripe: '#c88a00', text: '#1a1200',
      accent: '#fff', logoStyle: 'bold', logoSize: 22,
      pattern: 'K'  // diagonal stripe pattern
    },
    'Fujifilm': {
      bg: '#005534', stripe: '#00371f', text: '#ffffff',
      accent: '#38c090', logoStyle: 'bold', logoSize: 20,
      pattern: 'F'
    },
    'Ilford': {
      bg: '#1a1a1a', stripe: '#333', text: '#ffffff',
      accent: '#aaaaaa', logoStyle: 'bold', logoSize: 22,
      pattern: 'I'
    },
    'Agfa': {
      bg: '#4a1e7a', stripe: '#2d0a50', text: '#ffffff',
      accent: '#c090f0', logoStyle: 'bold', logoSize: 22,
      pattern: 'A'
    },
    '3M': {
      bg: '#c42121', stripe: '#8a0000', text: '#ffffff',
      accent: '#ffaaaa', logoStyle: 'bold', logoSize: 26,
      pattern: 'M'
    },
    'Ansco': {
      bg: '#8b4500', stripe: '#5a2800', text: '#ffffff',
      accent: '#f4a460', logoStyle: 'bold', logoSize: 20,
      pattern: 'A'
    },
    'Konica': {
      bg: '#8b0040', stripe: '#5a0028', text: '#ffffff',
      accent: '#ff6699', logoStyle: 'bold', logoSize: 20,
      pattern: 'K'
    },
    'Film Ferrania': {
      bg: '#1a5a6a', stripe: '#0a3040', text: '#ffffff',
      accent: '#3ab0d0', logoStyle: 'bold', logoSize: 16,
      pattern: 'F'
    },
    'Ferrania': {
      bg: '#1a5a6a', stripe: '#0a3040', text: '#ffffff',
      accent: '#3ab0d0', logoStyle: 'bold', logoSize: 16,
      pattern: 'F'
    },
    'Harman': {
      bg: '#3a6810', stripe: '#1e3c08', text: '#ffffff',
      accent: '#90c840', logoStyle: 'bold', logoSize: 20,
      pattern: 'H'
    },
    'Lomography': {
      bg: '#1a1a1a', stripe: '#000', text: '#ffffff',
      accent: '#ff9030', logoStyle: 'bold', logoSize: 16,
      pattern: 'L'
    },
    'Shanghai': {
      bg: '#6a5500', stripe: '#3a2e00', text: '#ffffff',
      accent: '#d0b850', logoStyle: 'bold', logoSize: 20,
      pattern: 'S'
    },
    'CineStill': {
      bg: '#1e5070', stripe: '#0a2a40', text: '#ffffff',
      accent: '#70b0e0', logoStyle: 'bold', logoSize: 18,
      pattern: 'C'
    },
    'Polaroid': {
      bg: '#111111', stripe: '#2a2a2a', text: '#ffffff',
      accent: '#cccccc', logoStyle: 'bold', logoSize: 20,
      pattern: 'P'
    },
    'Impossible Project': {
      bg: '#0a0a0a', stripe: '#7a0010', text: '#ffffff',
      accent: '#e8002d', logoStyle: 'bold', logoSize: 14,
      pattern: 'X'
    },
  };

  const DEFAULT_BOX = {
    bg: '#2a2a2a', stripe: '#111', text: '#ffffff',
    accent: '#aaaaaa', logoStyle: 'bold', logoSize: 20,
    pattern: '?'
  };

  // ── Subtype icon glyphs (single path-like character used in box) ─
  const SUBTYPE_GLYPH = {
    'Negative':          '—',
    'Negative (Cine)':   '▶',
    'Reversal':          '◆',
    'Reversal (Cine)':   '◆▶',
    'Instant':           '⬜',
    'Print (Cine)':      '▣',
    'Print':             '▣',
    'Specialty':         '✦',
    'Duplicating':       '⊕',
  };

  function subtypeGlyph(subtype) {
    if (!subtype) return '';
    for (const key of Object.keys(SUBTYPE_GLYPH)) {
      if (subtype.startsWith(key)) return SUBTYPE_GLYPH[key];
    }
    return '·';
  }

  // ── Abbreviate long names for box label ────────────────────
  function boxName(name, brand) {
    let n = name;
    // Remove leading brand name to get the product name
    if (n.startsWith(brand)) n = n.slice(brand.length).trim();
    // Strip parenthetical format suffixes
    n = n.replace(/\s*\([^)]+\)\s*$/, '').trim();
    // Truncate
    if (n.length > 26) n = n.slice(0, 24) + '…';
    return n || name;
  }

  // ── Split long name into two lines ─────────────────────────
  function splitName(name) {
    if (name.length <= 14) return [name, ''];
    // Try to split at a space near the middle
    const mid = Math.floor(name.length / 2);
    let splitAt = name.indexOf(' ', mid);
    if (splitAt === -1) splitAt = name.lastIndexOf(' ', mid);
    if (splitAt === -1) return [name.slice(0, 14), name.slice(14)];
    return [name.slice(0, splitAt), name.slice(splitAt + 1)];
  }

  // ── Render diagonal stripe pattern ─────────────────────────
  function stripePattern(id, color, angle) {
    return `
      <defs>
        <pattern id="${id}" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(${angle})">
          <rect width="12" height="12" fill="none"/>
          <line x1="0" y1="0" x2="0" y2="12" stroke="${color}" stroke-width="4" stroke-opacity="0.18"/>
        </pattern>
      </defs>`;
  }

  // ── Sprocket holes row ──────────────────────────────────────
  function sprocketRow(y, count, fill) {
    let holes = '';
    for (let i = 0; i < count; i++) {
      const x = 8 + i * 24;
      holes += `<rect x="${x}" y="${y}" width="10" height="7" rx="2" fill="${fill}" fill-opacity="0.55"/>`;
    }
    return holes;
  }

  // ── ISO badge strip ─────────────────────────────────────────
  function isoBadge(iso, x, y, w, h, bg, fg) {
    const label = iso ? `ISO ${iso}` : 'ISO —';
    return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${bg}"/>
      <text x="${x + w/2}" y="${y + h*0.72}" text-anchor="middle"
            font-family="'DM Mono',monospace" font-size="10" font-weight="700"
            letter-spacing="0.04em" fill="${fg}">${label}</text>`;
  }

  // ── Main generator ──────────────────────────────────────────
  function generateBoxSVG(stock) {
    const cfg = BRAND_BOX[stock.brand] || DEFAULT_BOX;
    const W = 220, H = 320;
    const isBW = stock.type === 'bw';
    const isInstant = (stock.subtype || '').startsWith('Instant');

    // Color scheme
    const boxBg    = cfg.bg;
    const stripCol = cfg.stripe;
    const textCol  = cfg.text;
    const accentCol = isBW ? '#aaa' : cfg.accent;

    // Product name
    const shortName = boxName(stock.name, stock.brand);
    const [line1, line2] = splitName(shortName);

    // Subtype tag
    const subtypeLabel = (stock.subtype || '').replace(' (Cine)', '').replace('Negative', 'Neg').replace('Reversal', 'Rev').replace('Instant', 'Inst').replace('Specialty', 'Spec');

    // Type color strip
    const typeColor = isBW ? '#888' : accentCol;

    // Film format indicator
    const formatShort = (stock.format || '35mm').split('/')[0].trim();

    // Sensitivity label
    const sensLabel = stock.sensitivity || '';

    // Unique pattern ID per stock
    const pid = `p${stock.id}`;

    // Sprocket count
    const sprocketCount = isInstant ? 0 : 8;

    // ── SVG body ──────────────────────────────────────────────
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"
      width="${W}" height="${H}" role="img" aria-label="Film box art for ${stock.name}">
      ${stripePattern(pid, textCol, 45)}

      <!-- Box body -->
      <rect width="${W}" height="${H}" rx="6" fill="${boxBg}"/>
      <rect width="${W}" height="${H}" rx="6" fill="url(#${pid})"/>

      <!-- Top color band -->
      <rect x="0" y="0" width="${W}" height="48" rx="6" fill="${typeColor}" fill-opacity="0.92"/>
      <rect x="0" y="42" width="${W}" height="6" fill="${typeColor}" fill-opacity="0.92"/>

      <!-- Bottom color band -->
      <rect x="0" y="${H-44}" width="${W}" height="44" rx="0" fill="${stripCol}"/>
      <rect x="0" y="${H-44}" width="${W}" height="4" fill="${accentCol}" fill-opacity="0.5"/>

      <!-- Bottom rounding fix -->
      <rect x="0" y="${H-10}" width="${W}" height="10" rx="0" fill="${stripCol}"/>
      <rect x="0" y="${H-6}" width="${W}" height="6" rx="6" fill="${stripCol}"/>

      <!-- Sprocket holes strip at top -->
      ${sprocketCount > 0 ? sprocketRow(10, sprocketCount, isBW ? '#000' : boxBg) : ''}

      <!-- Brand name — top band -->
      <text x="14" y="32" font-family="'DM Sans',sans-serif" font-size="18"
            font-weight="700" letter-spacing="0.01em"
            fill="${isBW ? '#fff' : boxBg}" fill-opacity="0.95">${stock.brand}</text>

      <!-- Vertical accent bar -->
      <rect x="${W-28}" y="48" width="6" height="${H-92}" fill="${accentCol}" fill-opacity="0.25"/>

      <!-- Type / subtype pill -->
      <rect x="14" y="58" width="${Math.min(subtypeLabel.length * 8 + 14, 130)}" height="20" rx="10"
            fill="${accentCol}" fill-opacity="0.18"/>
      <text x="21" y="72" font-family="'DM Mono',monospace" font-size="10"
            font-weight="600" letter-spacing="0.08em" text-transform="uppercase"
            fill="${accentCol}">${isBW ? 'B&amp;W' : 'COLOR'} · ${subtypeLabel.toUpperCase()}</text>

      <!-- Main product name -->
      <text x="14" y="118" font-family="'EB Garamond',Georgia,serif" font-size="24"
            font-weight="500" fill="${textCol}">${line1}</text>
      ${line2 ? `<text x="14" y="146" font-family="'EB Garamond',Georgia,serif" font-size="24"
            font-weight="500" fill="${textCol}">${line2}</text>` : ''}

      <!-- Sensitivity label -->
      ${sensLabel ? `<text x="14" y="${line2 ? 168 : 148}" font-family="'DM Mono',monospace"
            font-size="10" letter-spacing="0.06em" fill="${textCol}" fill-opacity="0.55"
            >${sensLabel.toUpperCase()}</text>` : ''}

      <!-- Large decorative ISO number (background) -->
      <text x="${W/2}" y="260" text-anchor="middle"
            font-family="'DM Sans',sans-serif" font-size="110" font-weight="800"
            fill="${accentCol}" fill-opacity="0.07" letter-spacing="-4"
            >${stock.iso || '?'}</text>

      <!-- ISO badge -->
      ${isoBadge(stock.iso, 14, H-38, 68, 24, accentCol, boxBg)}

      <!-- Format badge -->
      <rect x="88" y="${H-38}" width="58" height="24" rx="3" fill="${textCol}" fill-opacity="0.15"/>
      <text x="117" y="${H-38+17}" text-anchor="middle"
            font-family="'DM Mono',monospace" font-size="10" font-weight="600"
            letter-spacing="0.04em" fill="${textCol}" fill-opacity="0.8">${formatShort}</text>

      <!-- Year introduced badge -->
      <rect x="152" y="${H-38}" width="54" height="24" rx="3" fill="${accentCol}" fill-opacity="0.12"/>
      <text x="179" y="${H-38+17}" text-anchor="middle"
            font-family="'DM Mono',monospace" font-size="10" font-weight="600"
            letter-spacing="0.04em" fill="${accentCol}" fill-opacity="0.9">${stock.introduced}</text>

      <!-- Vertical "PROFESSIONAL" / "CONSUMER" text on right -->
      <text x="${W-10}" y="${H/2+40}" text-anchor="middle" font-family="'DM Mono',monospace"
            font-size="7.5" letter-spacing="0.14em" fill="${textCol}" fill-opacity="0.28"
            transform="rotate(-90, ${W-10}, ${H/2+40})">${formatShort.includes('35') ? '35MM FILM' : formatShort.toUpperCase() + ' FORMAT'}</text>

      <!-- Box edge shadow highlight -->
      <rect x="0" y="0" width="${W}" height="${H}" rx="6"
            fill="none" stroke="${accentCol}" stroke-width="1.5" stroke-opacity="0.18"/>
      <rect x="2" y="2" width="${W-4}" height="${H-4}" rx="5"
            fill="none" stroke="#fff" stroke-width="0.5" stroke-opacity="0.06"/>
    </svg>`;

    return svg;
  }

  // Expose globally
  window.generateBoxSVG = generateBoxSVG;

})();
