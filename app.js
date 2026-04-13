/* ═══════════════════════════════════════════════════════════
   CENTURY OF FILM — App Logic
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Constants
  const YEAR_START = 1916;
  const YEAR_END   = 2026;
  const YEAR_RANGE = YEAR_END - YEAR_START;
  const PX_PER_YEAR = 12; // pixels per year
  const LANE_OFFSET = 88; // px reserved for brand name
  const TIMELINE_WIDTH = YEAR_RANGE * PX_PER_YEAR + LANE_OFFSET + 40;

  // Brand order for lane display
  const BRAND_ORDER = ['Kodak', 'Ilford', 'Agfa', 'Fujifilm', '3M', 'Ansco', 'Konica', 'Film Ferrania', 'Harman', 'Lomography', 'Shanghai', 'Polaroid', 'Impossible Project', 'CineStill', 'Ferrania'];
  const BRAND_COLORS = {
    Kodak:           'brand-kodak-bar',
    '3M':            'brand-3m-bar',
    Fujifilm:        'brand-fuji-bar',
    Ilford:          'brand-ilford-bar',
    Agfa:            'brand-agfa-bar',
    Ansco:           'brand-ansco-bar',
    Konica:          'brand-konica-bar',
    'Film Ferrania': 'brand-ferrania-bar',
    Harman:          'brand-harman-bar',
    Lomography:      'brand-lomo-bar',
    Shanghai:        'brand-shanghai-bar',
    'Polaroid':          'brand-polaroid-bar',
    'Impossible Project': 'brand-impossible-bar',
    CineStill:       'brand-other-bar',
    Ferrania:        'brand-ferrania-bar',
  };

  // ── State
  let state = {
    search:  '',
    type:    'all',
    brand:   'all',
    speed:   'all',
    subtype: 'all',
    view:    'timeline',
  };
  let tooltip = null;
  let activeId = null;

  // ── DOM refs
  const timelineView = document.getElementById('timelineView');
  const gridView     = document.getElementById('gridView');
  const gridContainer= document.getElementById('gridContainer');
  const timelineRuler= document.getElementById('timelineRuler');
  const timelineEras = document.getElementById('timelineEras');
  const timelineLanes= document.getElementById('timelineLanes');
  const resultCount  = document.getElementById('resultCount');
  const noResults    = document.getElementById('noResults');
  const searchInput  = document.getElementById('searchInput');
  const clearSearch  = document.getElementById('clearSearch');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose   = document.getElementById('modalClose');
  const statsPanel   = document.getElementById('statsPanel');
  const statsToggle  = document.getElementById('statsToggle');
  const statsGrid    = document.getElementById('statsGrid');

  // ── Theme toggle
  (function initTheme() {
    const toggle = document.querySelector('[data-theme-toggle]');
    const root   = document.documentElement;
    let theme    = root.getAttribute('data-theme') || 
                   (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);
    updateThemeIcon(toggle, theme);
    toggle && toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateThemeIcon(toggle, theme);
    });
  })();

  function updateThemeIcon(btn, theme) {
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // ── Helpers
  function yearToX(year) {
    return LANE_OFFSET + (year - YEAR_START) * PX_PER_YEAR;
  }

  function getBrandClass(brand) {
    return BRAND_COLORS[brand] || 'brand-other-bar';
  }

  function brandCSSColor(brand) {
    const map = {
      Kodak:           '#c88a00',
      '3M':            '#9e1818',
      Fujifilm:        '#005534',
      Ilford:          '#2a2a2a',
      Agfa:            '#4a1e7a',
      Ansco:           '#8b4500',
      Konica:          '#8b0040',
      'Film Ferrania': '#1a5a6a',
      Harman:          '#3a6810',
      Lomography:      '#8b4500',
      Shanghai:        '#6a5500',
      Polaroid:           '#444444',
      'Impossible Project': '#7a0010',
      CineStill:       '#1e5070',
      Ferrania:        '#1a5a6a',
    };
    return map[brand] || '#1e5070';
  }

  function brandLightColor(brand) {
    const map = {
      Kodak:           '#f4b830',
      '3M':            '#e84040',
      Fujifilm:        '#38c090',
      Ilford:          '#aaa',
      Agfa:            '#c090f0',
      Ansco:           '#f4a460',
      Konica:          '#ff6699',
      'Film Ferrania': '#3ab0d0',
      Harman:          '#90c840',
      Lomography:      '#ff9030',
      Shanghai:        '#d0b850',
      Polaroid:           '#cccccc',
      'Impossible Project': '#e8002d',
      CineStill:       '#70b0e0',
      Ferrania:        '#3ab0d0',
    };
    return map[brand] || '#70b0e0';
  }

  function speedCategory(iso) {
    if (!iso) return 'unknown';
    if (iso <= 50)  return 'slow';
    if (iso <= 200) return 'medium';
    if (iso <= 640) return 'fast';
    return 'ultrafast';
  }

  function matchesSubtype(stock, val) {
    if (val === 'all') return true;
    const s = (stock.subtype || '').toLowerCase();
    if (val === 'Negative')  return s.includes('negative') && !s.includes('reversal');
    if (val === 'Reversal')  return s.includes('reversal');
    if (val === 'Print')     return s.includes('print');
    if (val === 'Specialty') return s.includes('specialty') || s.includes('separation') || s.includes('infrared') || s.includes('instant');
    if (val === 'Instant')   return s.includes('instant');
    return true;
  }

  function isOtherBrand(brand) {
    return !['Kodak', '3M', 'Fujifilm', 'Ilford', 'Agfa', 'Ansco', 'Konica', 'Film Ferrania', 'Harman', 'Lomography', 'Shanghai', 'Polaroid', 'Impossible Project'].includes(brand);
  }

  // ── Filtering
  function filterStocks() {
    return FILM_STOCKS.filter(s => {
      // Search
      if (state.search) {
        const q = state.search.toLowerCase();
        const hay = `${s.name} ${s.brand} ${s.subtype} ${s.era} ${s.note} ${s.sensitivity}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      // Type
      if (state.type !== 'all' && s.type !== state.type) return false;
      // Brand
      if (state.brand !== 'all') {
        if (state.brand === 'other') {
          if (!isOtherBrand(s.brand)) return false;
        } else {
          if (s.brand !== state.brand) return false;
        }
      }
      // Speed
      if (state.speed !== 'all' && speedCategory(s.iso) !== state.speed) return false;
      // Subtype
      if (!matchesSubtype(s, state.subtype)) return false;
      return true;
    });
  }

  // ── Build Timeline Ruler
  function buildRuler() {
    timelineView.style.setProperty('--timeline-width', TIMELINE_WIDTH + 'px');
    timelineRuler.style.minWidth = TIMELINE_WIDTH + 'px';
    timelineEras.style.minWidth  = TIMELINE_WIDTH + 'px';

    // Decade/year ticks
    for (let y = YEAR_START; y <= YEAR_END; y++) {
      const x = yearToX(y);
      const isDec = y % 10 === 0;
      const isFive = y % 5 === 0;
      if (isDec || isFive) {
        const tick = document.createElement('div');
        tick.className = 'ruler-tick' + (isDec ? ' decade' : '');
        tick.style.left = x + 'px';
        timelineRuler.appendChild(tick);
      }
      if (isDec) {
        const label = document.createElement('div');
        label.className = 'ruler-year';
        label.style.left = x + 'px';
        label.textContent = y;
        timelineRuler.appendChild(label);
      }
    }

    // Era bands
    ERAS.forEach(era => {
      const x     = yearToX(era.start);
      const width = (era.end - era.start) * PX_PER_YEAR;
      const band  = document.createElement('div');
      band.className = 'era-band';
      band.style.left    = x + 'px';
      band.style.width   = width + 'px';
      band.style.background = era.color;
      band.title = era.label;
      const lbl = document.createElement('span');
      lbl.className = 'era-label';
      lbl.textContent = era.label;
      band.appendChild(lbl);
      timelineEras.appendChild(band);
    });
  }

  // ── Pack bars into rows (no overlap)
  function packIntoRows(stocks) {
    const rows = [];
    stocks.forEach(s => {
      const startX = yearToX(s.introduced);
      const endX   = yearToX(s.discontinued || (YEAR_END + 2));
      let placed = false;
      for (let r = 0; r < rows.length; r++) {
        const lastEnd = rows[r].lastEnd;
        if (startX >= lastEnd + 4) {
          rows[r].stocks.push(s);
          rows[r].lastEnd = endX;
          placed = true;
          break;
        }
      }
      if (!placed) {
        rows.push({ stocks: [s], lastEnd: endX });
      }
    });
    return rows;
  }

  // ── Render Timeline — only show matching stocks; collapse empty lanes/rows
  function renderTimeline(filtered) {
    timelineLanes.innerHTML = '';
    const filteredIds = new Set(filtered.map(s => s.id));
    const isFiltered  = filtered.length < FILM_STOCKS.length;

    // Group by brand
    const brands = BRAND_ORDER.slice();
    FILM_STOCKS.forEach(s => { if (!brands.includes(s.brand)) brands.push(s.brand); });

    let lanesRendered = 0;

    brands.forEach(brand => {
      // All stocks for this brand
      const brandStocks = FILM_STOCKS.filter(s => s.brand === brand);
      if (!brandStocks.length) return;

      // When filtering, only keep stocks that pass the filter
      const visibleStocks = isFiltered
        ? brandStocks.filter(s => filteredIds.has(s.id))
        : brandStocks;

      // Skip entire lane if no matches (when filtering is active)
      if (isFiltered && visibleStocks.length === 0) return;

      const lane = document.createElement('div');
      lane.className = 'brand-lane';
      lane.dataset.brand = brand;

      // Brand label
      const header = document.createElement('div');
      header.className = 'brand-lane-header';
      const nameEl = document.createElement('div');
      nameEl.className = 'brand-lane-name';
      nameEl.style.color = brandLightColor(brand);
      nameEl.textContent = brand;
      // Show match count badge when filtering
      if (isFiltered) {
        const badge = document.createElement('span');
        badge.className = 'lane-count-badge';
        badge.textContent = visibleStocks.length;
        nameEl.appendChild(badge);
      }
      header.appendChild(nameEl);
      lane.appendChild(header);

      const rowsContainer = document.createElement('div');
      rowsContainer.className = 'brand-lane-rows';

      // Pack only the visible stocks into rows (tighter layout when filtered)
      const stocksToLayout = visibleStocks.sort((a, b) => a.introduced - b.introduced);
      const packedRows = packIntoRows(stocksToLayout);

      packedRows.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'lane-row';

        row.stocks.forEach(s => {
          const startYear = s.introduced;
          const endYear   = s.discontinued || (YEAR_END + 1);
          const x         = yearToX(startYear);
          const width     = Math.max((endYear - startYear) * PX_PER_YEAR, 18);
          const isOngoing = !s.discontinued;

          const bar = document.createElement('button');
          bar.className = [
            'stock-bar',
            s.type === 'bw' ? 'bw-bar' : getBrandClass(s.brand),
            isOngoing ? 'ongoing' : '',
          ].filter(Boolean).join(' ');
          bar.style.left  = x + 'px';
          bar.style.width = width + 'px';
          bar.setAttribute('aria-label', `${s.name} by ${s.brand}, ${s.introduced}–${s.discontinued || 'present'}`);
          bar.dataset.id  = s.id;
          bar.tabIndex    = 0;

          const lbl = document.createElement('span');
          lbl.className   = 'stock-bar-label';
          lbl.textContent = s.name;
          bar.appendChild(lbl);

          bar.addEventListener('click',      ()  => openModal(s));
          bar.addEventListener('mouseenter', (e) => showTooltip(e, s));
          bar.addEventListener('mousemove',  (e) => moveTooltip(e));
          bar.addEventListener('mouseleave', ()  => hideTooltip());
          bar.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(s); }
          });

          rowEl.appendChild(bar);
        });
        rowsContainer.appendChild(rowEl);
      });

      lane.appendChild(rowsContainer);
      timelineLanes.appendChild(lane);
      lanesRendered++;
    });

    // Show empty-state if nothing passed the filter
    noResults.hidden = lanesRendered > 0;
  }

  // ── Render Grid — only show matching cards
  function renderGrid(filtered) {
    gridContainer.innerHTML = '';
    const filteredIds = new Set(filtered.map(s => s.id));

    // Only iterate over visible stocks
    const stocksToShow = filtered.length < FILM_STOCKS.length ? filtered : FILM_STOCKS;

    stocksToShow.forEach(s => {
      const card = document.createElement('div');
      card.className = 'grid-card';
      card.dataset.id = s.id;
      card.setAttribute('role', 'button');
      card.tabIndex = 0;
      card.setAttribute('aria-label', s.name);

      // Top stripe
      card.style.setProperty('--stripe', brandLightColor(s.brand));
      card.style.borderTopColor = brandLightColor(s.brand);
      card.style.borderTopWidth = '2px';

      // Header
      const header = document.createElement('div');
      header.className = 'card-header';
      const nameEl = document.createElement('div');
      nameEl.className = 'card-name';
      nameEl.textContent = s.name;

      const brandTag = document.createElement('span');
      brandTag.className = 'card-brand-tag';
      brandTag.textContent = s.brand;
      brandTag.style.background = brandLightColor(s.brand) + '22';
      brandTag.style.color = brandLightColor(s.brand);
      brandTag.style.border = `1px solid ${brandLightColor(s.brand)}44`;

      header.appendChild(nameEl);
      header.appendChild(brandTag);
      card.appendChild(header);

      // Meta badges
      const meta = document.createElement('div');
      meta.className = 'card-meta';
      [
        s.type === 'color' ? '🎨 Color' : '⬛ B&W',
        s.iso ? `ISO ${s.iso}` : 'ISO —',
        s.subtype,
        s.format,
      ].forEach(txt => {
        const badge = document.createElement('span');
        badge.className = 'card-badge';
        badge.textContent = txt;
        meta.appendChild(badge);
      });
      card.appendChild(meta);

      // Note preview
      if (s.note) {
        const note = document.createElement('p');
        note.className = 'card-note';
        note.textContent = s.note;
        card.appendChild(note);
      }

      // Years
      const years = document.createElement('div');
      years.className = 'card-years';
      years.textContent = `${s.introduced} – ${s.discontinued || 'present'}`;
      card.appendChild(years);

      card.addEventListener('click', () => openModal(s));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(s); }
      });
      gridContainer.appendChild(card);
    });
  }

  // ── Update stats
  function updateStats(filtered) {
    statsGrid.innerHTML = '';
    const bwCount    = filtered.filter(s => s.type === 'bw').length;
    const colorCount = filtered.filter(s => s.type === 'color').length;
    const kodakCount = filtered.filter(s => s.brand === 'Kodak').length;
    const tm3Count   = filtered.filter(s => s.brand === '3M').length;
    const fujiCount  = filtered.filter(s => s.brand === 'Fujifilm').length;
    const activeCount = filtered.filter(s => !s.discontinued).length;
    const avgISO = Math.round(
      filtered.filter(s => s.iso).reduce((sum, s) => sum + s.iso, 0) /
      Math.max(filtered.filter(s => s.iso).length, 1)
    );

    [
      { v: filtered.length, l: 'Matching' },
      { v: colorCount,      l: 'Color' },
      { v: bwCount,         l: 'B&W' },
      { v: kodakCount,      l: 'Kodak' },
      { v: tm3Count,        l: '3M / Scotch' },
      { v: fujiCount,       l: 'Fujifilm' },
      { v: activeCount,     l: 'Still Made' },
      { v: avgISO || '—',   l: 'Avg ISO' },
    ].forEach(({ v, l }) => {
      const item = document.createElement('div');
      item.className = 'stat-item';
      item.innerHTML = `<div class="stat-value">${v}</div><div class="stat-label">${l}</div>`;
      statsGrid.appendChild(item);
    });
  }

  // ── Main render
  function render() {
    const filtered = filterStocks();
    updateStats(filtered);
    resultCount.textContent = `${filtered.length} of ${FILM_STOCKS.length} stocks`;
    // noResults is shown only when truly zero results; timeline handles its own empty state
    noResults.hidden = true;

    if (state.view === 'timeline') {
      renderTimeline(filtered);
    } else {
      renderGrid(filtered);
      // For grid, show noResults if nothing to display
      noResults.hidden = filtered.length > 0;
    }
  }

  // ── Modal
  function openModal(s) {
    activeId = s.id;
    const endYear   = s.discontinued || YEAR_END;
    const lifespan  = endYear - s.introduced;
    const isOngoing = !s.discontinued;
    const minYear   = YEAR_START;
    const totalSpan = YEAR_END - minYear;
    const barStart  = ((s.introduced - minYear) / totalSpan) * 100;
    const barWidth  = (lifespan / totalSpan) * 100;

    const photoUrl = (typeof FILM_PHOTOS !== 'undefined') ? (FILM_PHOTOS[s.id] || null) : null;
    const boxSVG   = (!photoUrl && typeof generateBoxSVG === 'function') ? generateBoxSVG(s) : '';

    modalContent.innerHTML = `
      ${photoUrl
        ? `<div class="modal-ref-photo" aria-hidden="true">
             <img src="${photoUrl}" alt="${s.name} packaging" loading="lazy"
                  onerror="this.closest('.modal-ref-photo').style.display='none'">
           </div>`
        : (boxSVG ? `<div class="modal-box-art" aria-hidden="true">${boxSVG}</div>` : '')
      }
      <div class="modal-era-badge">${s.era || ''}</div>
      <h2 class="modal-title">${s.name}</h2>
      <div class="modal-brand">${s.brand}${s.sensitivity ? ' · ' + s.sensitivity : ''}</div>

      <div class="modal-specs">
        <div class="spec-item">
          <div class="spec-label">Type</div>
          <div class="spec-value">${s.type === 'color' ? 'Color' : 'Black & White'}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Subtype</div>
          <div class="spec-value">${s.subtype}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">ISO / Speed</div>
          <div class="spec-value highlighted">${s.iso ? s.iso : '—'}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Format</div>
          <div class="spec-value">${s.format || '—'}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Introduced</div>
          <div class="spec-value">${s.introduced}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Discontinued</div>
          <div class="spec-value">${isOngoing ? '— (current)' : s.discontinued}</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Lifespan</div>
          <div class="spec-value">${lifespan}${isOngoing ? '+' : ''} yrs</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Status</div>
          <div class="spec-value">${isOngoing ? '✓ In production' : 'Discontinued'}</div>
        </div>
      </div>

      <p class="modal-note">${s.note || ''}</p>

      <div class="modal-timeline-mini">
        <div class="spec-label" style="margin-bottom:0">Timeline position</div>
        <div class="mini-bar-track">
          <div class="mini-bar-fill" style="
            left: ${barStart}%;
            width: ${Math.min(barWidth, 100 - barStart)}%;
            background: ${s.type === 'bw' ? 'linear-gradient(90deg,#555,#aaa)' : 'linear-gradient(90deg,' + brandCSSColor(s.brand) + ',' + brandLightColor(s.brand) + ')'};
          "></div>
        </div>
        <div class="mini-bar-labels">
          <span>${YEAR_START}</span>
          <span>${YEAR_END}</span>
        </div>
      </div>
    `;

    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = '';
    activeId = null;
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modalOverlay.hidden) closeModal(); });

  // ── Tooltip
  function showTooltip(e, s) {
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      document.body.appendChild(tooltip);
    }
    tooltip.innerHTML = `
      <div class="tooltip-title">${s.name}</div>
      <div class="tooltip-sub">${s.brand} · ${s.introduced}–${s.discontinued || 'present'} · ${s.iso ? 'ISO ' + s.iso : 'ISO n/a'} · ${s.subtype}</div>
    `;
    tooltip.style.opacity = '1';
    moveTooltip(e);
  }
  function moveTooltip(e) {
    if (!tooltip) return;
    const x = e.clientX + 14;
    const y = e.clientY + 14;
    tooltip.style.left = Math.min(x, window.innerWidth - tooltip.offsetWidth - 8) + 'px';
    tooltip.style.top  = Math.min(y, window.innerHeight - tooltip.offsetHeight - 8) + 'px';
  }
  function hideTooltip() {
    if (tooltip) tooltip.style.opacity = '0';
  }

  // ── Filter buttons
  document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      const value  = btn.dataset.value;
      state[filter] = value;
      // Update active state
      document.querySelectorAll(`.filter-btn[data-filter="${filter}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
  });

  // ── Search
  searchInput.addEventListener('input', () => {
    state.search = searchInput.value.trim();
    clearSearch.hidden = !state.search;
    render();
  });
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    state.search = '';
    clearSearch.hidden = true;
    searchInput.focus();
    render();
  });

  // ── Reset
  function resetAll() {
    state = { search: '', type: 'all', brand: 'all', speed: 'all', subtype: 'all', view: state.view };
    searchInput.value = '';
    clearSearch.hidden = true;
    document.querySelectorAll('.filter-btn[data-filter]').forEach(b => {
      b.classList.toggle('active', b.dataset.value === 'all');
    });
    render();
  }
  document.getElementById('resetAll').addEventListener('click', resetAll);
  document.getElementById('resetAll2').addEventListener('click', resetAll);

  // ── View toggle
  document.getElementById('viewTimeline').addEventListener('click', () => {
    state.view = 'timeline';
    document.getElementById('viewTimeline').classList.add('active');
    document.getElementById('viewGrid').classList.remove('active');
    timelineView.classList.remove('hidden');
    gridView.classList.add('hidden');
    render();
  });
  document.getElementById('viewGrid').addEventListener('click', () => {
    state.view = 'grid';
    document.getElementById('viewGrid').classList.add('active');
    document.getElementById('viewTimeline').classList.remove('active');
    gridView.classList.remove('hidden');
    timelineView.classList.add('hidden');
    render();
  });

  // ── Stats toggle
  statsToggle.addEventListener('click', () => {
    const open = statsPanel.classList.toggle('open');
    statsToggle.classList.toggle('active', open);
    statsPanel.setAttribute('aria-hidden', !open);
  });

  // ── Init
  buildRuler();
  updateStats(FILM_STOCKS);
  render();

  // ── Keyboard shortcut: / to focus search
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

})();
