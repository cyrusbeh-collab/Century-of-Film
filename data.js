// Film Stock Timeline Dataset 1916–2026
// Sources: Kodak Chronology, Wikipedia List of Motion Picture Film Stocks,
// filmrescue.com/film-database, filmcolors.org, Japan Camera Hunter

const FILM_STOCKS = [
  // ── KODAK B&W ─────────────────────────────────────────────────────────────
  {
    id: 1, name: "Cine Negative Type E", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Orthochromatic",
    iso: null, format: "35mm", introduced: 1916, discontinued: 1930,
    note: "Orthochromatic cine negative; the first standardized Kodak cine negative stock.",
    era: "Silent Era"
  },
  {
    id: 2, name: "Cine Negative Type F", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Orthochromatic",
    iso: null, format: "35mm", introduced: 1917, discontinued: 1930,
    note: "Orthochromatic cine negative, improved Type E.",
    era: "Silent Era"
  },
  {
    id: 3, name: "Super Speed Cine Negative", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Orthochromatic",
    iso: null, format: "35mm", introduced: 1922, discontinued: 1930,
    note: "High-speed orthochromatic negative for action cinematography.",
    era: "Silent Era"
  },
  {
    id: 4, name: "Panchromatic Cine Film Type I", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1922, discontinued: 1941,
    note: "First commercially available Kodak panchromatic cine stock (#1203). Sensitive to full visible spectrum.",
    era: "Silent Era"
  },
  {
    id: 5, name: "Motion Picture Duplicating Film", brand: "Kodak", type: "bw",
    subtype: "Duplicating", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1926, discontinued: 1960,
    note: "For producing duplicate negatives from original camera negatives.",
    era: "Early Sound"
  },
  {
    id: 6, name: "Type II Cine Negative Panchromatic", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1928, discontinued: 1945,
    note: "Second-generation panchromatic cine negative (#1218).",
    era: "Early Sound"
  },
  {
    id: 7, name: "Type III Cine Negative Panchromatic", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1928, discontinued: 1935,
    note: "High-speed variant of the Type II panchromatic stock.",
    era: "Early Sound"
  },
  {
    id: 8, name: "Panchromatic K (Infrared)", brand: "Kodak", type: "bw",
    subtype: "Specialty", sensitivity: "Infrared",
    iso: null, format: "35mm", introduced: 1928, discontinued: 1950,
    note: "Infrared-sensitive panchromatic film (#1210), used for special effects and scientific work.",
    era: "Early Sound"
  },
  {
    id: 9, name: "Super-Sensitive Cine Negative Panchromatic", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1931, discontinued: 1940,
    note: "Oscar-winning (4th Academy Year) high-speed panchromatic stock (#1217).",
    era: "Golden Age"
  },
  {
    id: 10, name: "Plus-X Cine Panchromatic (5231)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 80, format: "35mm / 16mm", introduced: 1938, discontinued: 2010,
    note: "Workhorse fine-grain panchromatic negative. Used for decades in Hollywood. Daylight EI 80, Tungsten EI 64.",
    era: "Golden Age"
  },
  {
    id: 11, name: "Eastman Fine Grain Release Positive (5302)", brand: "Kodak", type: "bw",
    subtype: "Print", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 16mm", introduced: 1941, discontinued: 2015,
    note: "Standard B&W release print stock used for theatrical distribution.",
    era: "Golden Age"
  },
  {
    id: 12, name: "TRI-X Panchromatic Negative (5233)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 320, format: "35mm", introduced: 1954, discontinued: 1995,
    note: "Iconic high-speed stock used for film noir and French New Wave. Daylight EI 320.",
    era: "New Wave"
  },
  {
    id: 13, name: "Plus-X Reversal (7276)", brand: "Kodak", type: "bw",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 50, format: "16mm", introduced: 1955, discontinued: 2010,
    note: "B&W reversal for 16mm projection. Daylight EI 50.",
    era: "New Wave"
  },
  {
    id: 14, name: "TRI-X Reversal (7278)", brand: "Kodak", type: "bw",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 200, format: "16mm", introduced: 1955, discontinued: 2003,
    note: "High-speed 16mm reversal. Daylight EI 200, Tungsten EI 160.",
    era: "New Wave"
  },
  {
    id: 15, name: "Double-X Negative (5222/7222)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 250, format: "35mm / 16mm", introduced: 1959, discontinued: null,
    note: "Legendary high-contrast stock. Used in Schindler's List (1993), Ed Wood (1994), Manhattan (1979). Still in production.",
    era: "New Wave"
  },
  {
    id: 16, name: "4-X Negative Pan (5224/7224)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 1964, discontinued: 1990,
    note: "Ultra-high-speed B&W negative. Daylight EI 500, Tungsten EI 400.",
    era: "New Wave"
  },
  {
    id: 17, name: "4-X Reversal (7277)", brand: "Kodak", type: "bw",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 400, format: "16mm", introduced: 1967, discontinued: 1990,
    note: "Very high-speed B&W reversal stock. Daylight EI 400.",
    era: "New Hollywood"
  },
  {
    id: 18, name: "RP Negative (7229)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 250, format: "16mm", introduced: 1963, discontinued: 1970,
    note: "16mm B&W negative. EI 250 daylight.",
    era: "New Wave"
  },
  {
    id: 19, name: "Panchromatic Separation (5235)", brand: "Kodak", type: "bw",
    subtype: "Specialty", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1956, discontinued: 1998,
    note: "Used to make B&W separation masters from color negatives for archival purposes.",
    era: "New Wave"
  },
  {
    id: 20, name: "Panchromatic Separation (2238)", brand: "Kodak", type: "bw",
    subtype: "Specialty", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1999, discontinued: 2023,
    note: "Replacement for 5235 for archival separation work. Discontinued 2023.",
    era: "Digital Age"
  },
  {
    id: 21, name: "Plus-X Reversal (7265)", brand: "Kodak", type: "bw",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 50, format: "Super 8 / 16mm", introduced: 1960, discontinued: 2010,
    note: "Discontinued October 2010 after 50 years.",
    era: "Modern"
  },

  // ── KODAK COLOR ───────────────────────────────────────────────────────────
  {
    id: 50, name: "Kodacolor (Lenticular)", brand: "Kodak", type: "color",
    subtype: "Reversal (Lenticular)", sensitivity: "Panchromatic",
    iso: null, format: "16mm", introduced: 1928, discontinued: 1935,
    note: "World's first commercial lenticular additive color film for amateur 16mm. Launched at George Eastman's mansion July 30, 1928 with Thomas Edison present.",
    era: "Early Sound"
  },
  {
    id: 51, name: "Kodachrome (2-color)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "16mm", introduced: 1930, discontinued: 1935,
    note: "Experimental two-color Kodachrome tested by Fox Film Co. Predecessor to the 3-color Kodachrome.",
    era: "Early Sound"
  },
  {
    id: 52, name: "Kodachrome (3-color)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "16mm / 35mm / 8mm", introduced: 1935, discontinued: 2010,
    note: "First commercially successful color reversal film. Defined the look of the 20th century. Beloved for archival stability and vivid saturation. Discontinued 2010.",
    era: "Golden Age"
  },
  {
    id: 53, name: "Eastman Color Negative (5247)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 16, format: "35mm", introduced: 1950, discontinued: 1952,
    note: "First single-strip Eastman Color Negative. EI 16 daylight. Replaced the complex 3-strip Technicolor process.",
    era: "Golden Age"
  },
  {
    id: 54, name: "Eastman Color Negative (5248)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 25, format: "35mm", introduced: 1952, discontinued: 1959,
    note: "Tungsten EI 25. Fine grain, warm tones. Defining look of mid-century color cinema.",
    era: "Golden Age"
  },
  {
    id: 55, name: "EKTACHROME Commercial (7255)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 25, format: "16mm", introduced: 1958, discontinued: 1985,
    note: "Long-running professional reversal stock. EI 25 tungsten.",
    era: "New Wave"
  },
  {
    id: 56, name: "EKTACHROME ER (7257)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 160, format: "16mm", introduced: 1959, discontinued: 1984,
    note: "EI 160 daylight reversal for news and documentary.",
    era: "New Wave"
  },
  {
    id: 57, name: "EKTACHROME MS (5256/7256)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 64, format: "35mm / 16mm", introduced: 1963, discontinued: 1984,
    note: "Medium-speed reversal. EI 64 daylight.",
    era: "New Wave"
  },
  {
    id: 58, name: "Eastman Color Negative II (5247)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 16mm", introduced: 1974, discontinued: 1983,
    note: "Tungsten EI 100 / Daylight EI 64. Important for New Hollywood era filmmaking.",
    era: "New Hollywood"
  },
  {
    id: 59, name: "EKTACHROME EF (7241)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 160, format: "16mm", introduced: 1966, discontinued: 1984,
    note: "Daylight EI 160. For news and television work.",
    era: "New Hollywood"
  },
  {
    id: 60, name: "EKTACHROME High Speed Video News (7250)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 400, format: "16mm", introduced: 1977, discontinued: 2004,
    note: "Tungsten EI 400. Fast news-gathering reversal stock.",
    era: "New Hollywood"
  },
  {
    id: 61, name: "Eastman Color Negative (5254/7254)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 16mm", introduced: 1968, discontinued: 1977,
    note: "Tungsten EI 100.",
    era: "New Hollywood"
  },
  {
    id: 62, name: "Eastmancolor Negative (7291)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "16mm", introduced: 1983, discontinued: 1989,
    note: "Tungsten EI 100 in 16mm. Part of the Eastmancolor Negative series for bold Hollywood looks.",
    era: "Blockbuster Era"
  },
  {
    id: 63, name: "Eastmancolor Negative (5293/7293)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 250, format: "35mm / 16mm", introduced: 1982, discontinued: 1983,
    note: "Tungsten EI 250 high-speed stock.",
    era: "Blockbuster Era"
  },
  {
    id: 64, name: "EXR 50D (5245/7245)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 16mm", introduced: 1989, discontinued: 2006,
    note: "Daylight EI 50. First EXR line stock — finer grain, better low-light and contrast control.",
    era: "EXR Era"
  },
  {
    id: 65, name: "EXR 100T (5248/7248)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 16mm", introduced: 1989, discontinued: 2005,
    note: "Tungsten EI 100. Popular professional stock for film production.",
    era: "EXR Era"
  },
  {
    id: 66, name: "EXR 200T (5293/7293)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 16mm", introduced: 1992, discontinued: 2004,
    note: "Tungsten EI 200.",
    era: "EXR Era"
  },
  {
    id: 67, name: "EXR 500T (5296/7296)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 1989, discontinued: 1995,
    note: "Tungsten EI 500 high-speed EXR negative.",
    era: "EXR Era"
  },
  {
    id: 68, name: "VISION 250D (5246/7246)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 250, format: "35mm / 16mm", introduced: 1997, discontinued: 2005,
    note: "Daylight EI 250. First VISION line — designed for digital post-production workflows.",
    era: "Digital Bridge"
  },
  {
    id: 69, name: "VISION 200T (5274/7274)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 16mm", introduced: 1997, discontinued: 2005,
    note: "Tungsten EI 200.",
    era: "Digital Bridge"
  },
  {
    id: 70, name: "VISION 500T (5279/7279)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 1996, discontinued: 2005,
    note: "Tungsten EI 500.",
    era: "Digital Bridge"
  },
  {
    id: 71, name: "VISION 800T (5289/7289)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 800, format: "35mm / 16mm", introduced: 1998, discontinued: 2004,
    note: "Tungsten EI 800 high-speed negative.",
    era: "Digital Bridge"
  },
  {
    id: 72, name: "EKTACHROME 100D (5285/7285)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 16mm", introduced: 1999, discontinued: 2012,
    note: "Daylight EI 100 reversal. Vivid colors, fine grain.",
    era: "Digital Bridge"
  },
  {
    id: 73, name: "VISION2 500T (5218/7218)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 2002, discontinued: 2009,
    note: "Enhanced highlight retention and color balance over VISION.",
    era: "Modern"
  },
  {
    id: 74, name: "VISION2 200T (5217/7217)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 16mm", introduced: 2004, discontinued: 2010,
    note: "Tungsten EI 200.",
    era: "Modern"
  },
  {
    id: 75, name: "VISION2 50D (5201/7201)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 16mm", introduced: 2005, discontinued: 2012,
    note: "Daylight EI 50. Fine grain slow stock.",
    era: "Modern"
  },
  {
    id: 76, name: "VISION3 500T (5219/7219)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 2007, discontinued: null,
    note: "Current flagship Kodak cine stock. Unmatched dynamic range. Used on Dunkirk, 1917, Oppenheimer.",
    era: "Digital Age"
  },
  {
    id: 77, name: "VISION3 200T (5213/7213)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 16mm", introduced: 2010, discontinued: null,
    note: "Tungsten EI 200. Excellent for interior lighting.",
    era: "Digital Age"
  },
  {
    id: 78, name: "VISION3 50D (5203/7203)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 16mm / Super 8", introduced: 2011, discontinued: null,
    note: "Daylight EI 50. Finest grain in current Kodak lineup. Available in Super 8 since 2012.",
    era: "Digital Age"
  },
  {
    id: 79, name: "EKTACHROME 7294", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "Super 8 / 16mm", introduced: 2018, discontinued: null,
    note: "Revived EKTACHROME, returned to production after years off market. Vivid reversal stock.",
    era: "Revival"
  },

  // ── 3M / SCOTCH ───────────────────────────────────────────────────────────
  {
    id: 100, name: "3M Dynachrome", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1959, discontinued: 1975,
    note: "Early 3M color reversal. Thought to be Dynacolor stock. Launched 3M's entry into camera film.",
    era: "New Wave"
  },
  {
    id: 101, name: "3M Dynachrome Type A", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1961, discontinued: 1964,
    note: "Tungsten-balanced Dynachrome reversal.",
    era: "New Wave"
  },
  {
    id: 102, name: "3M Dynachrome 25", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 25, format: "35mm", introduced: 1965, discontinued: 1970,
    note: "Fine-grain Ferrania-produced reversal for 3M. ISO 25, yellow box.",
    era: "New Hollywood"
  },
  {
    id: 103, name: "3M Color Slide 100", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 1973, discontinued: 1985,
    note: "3M consumer color reversal. White box with blue and green lettering.",
    era: "New Hollywood"
  },
  {
    id: 104, name: "3M Color Print 100", brand: "3M", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 1973, discontinued: 1983,
    note: "3M consumer color negative. White box with blue and red design.",
    era: "New Hollywood"
  },
  {
    id: 105, name: "3M Color Positive Type 650", brand: "3M", type: "color",
    subtype: "Print (Cine)", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 16mm", introduced: 1970, discontinued: 1974,
    note: "Cine color print stock for theatrical release. Note: 1973 is last appearance in American Cinematographer Manual 4th ed.",
    era: "New Hollywood"
  },
  {
    id: 106, name: "3M Color Positive Type 651", brand: "3M", type: "color",
    subtype: "Print (Cine)", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 16mm", introduced: 1974, discontinued: 1978,
    note: "Replaced Type 650. Last 3M cine print stock.",
    era: "New Hollywood"
  },
  {
    id: 107, name: "3M CR 64 Camera Reversal", brand: "3M", type: "bw",
    subtype: "Reversal (Cine)", sensitivity: "Panchromatic",
    iso: 64, format: "16mm", introduced: 1970, discontinued: 1974,
    note: "B&W reversal cine film. CR = Camera Reversal series. ISO 64.",
    era: "New Hollywood"
  },
  {
    id: 108, name: "3M CR 160 Camera Reversal", brand: "3M", type: "bw",
    subtype: "Reversal (Cine)", sensitivity: "Panchromatic",
    iso: 160, format: "16mm", introduced: 1970, discontinued: 1973,
    note: "B&W reversal cine film. CR series ISO 160. Used for 16mm documentary work.",
    era: "New Hollywood"
  },
  {
    id: 109, name: "3M CR 250 Camera Reversal", brand: "3M", type: "bw",
    subtype: "Reversal (Cine)", sensitivity: "Panchromatic",
    iso: 250, format: "16mm", introduced: 1970, discontinued: 1973,
    note: "High-speed B&W reversal cine film. CR series ISO 250.",
    era: "New Hollywood"
  },
  {
    id: 110, name: "3M Fine Grain Release Positive Type 150", brand: "3M", type: "bw",
    subtype: "Print (Cine)", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 16mm", introduced: 1970, discontinued: 1973,
    note: "B&W theatrical print stock.",
    era: "New Hollywood"
  },
  {
    id: 111, name: "3M ColorSlide 100D", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 1982, discontinued: 1988,
    note: "Daylight-balanced reversal. Produced by Ferrania, Italy.",
    era: "Blockbuster Era"
  },
  {
    id: 112, name: "3M ColorSlide 640-T", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 640, format: "35mm", introduced: 1981, discontinued: 1996,
    note: "Tungsten-balanced high-speed reversal. Ferrania stock. Notable for candlelight photography.",
    era: "Blockbuster Era"
  },
  {
    id: 113, name: "3M ColorPrint HR200", brand: "3M", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120 / 126 / disc", introduced: 1984, discontinued: 1990,
    note: "High-resolution consumer negative. Produced by Ferrania.",
    era: "Blockbuster Era"
  },
  {
    id: 114, name: "Scotch Chrome 640-T", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 640, format: "35mm", introduced: 1981, discontinued: 1995,
    note: "3M Scotch brand tungsten reversal. Produced by Ferrania. Black box with white and blue lettering.",
    era: "Blockbuster Era"
  },
  {
    id: 115, name: "Scotch Chrome 800/3200P", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 800, format: "35mm", introduced: 1972, discontinued: 1988,
    note: "Ultra-high-speed pushable reversal. Ferrania-produced.",
    era: "New Hollywood"
  },
  {
    id: 116, name: "Scotch Chrome 1000", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 1000, format: "35mm", introduced: 1983, discontinued: 1995,
    note: "World's fastest daylight-balanced color transparency film at launch. A milestone never surpassed. Produced by Ferrania. Beloved by professional photographers shooting under extreme low-light.",
    era: "Blockbuster Era"
  },
  {
    id: 117, name: "ScotchChrome 400", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1988, discontinued: 1996,
    note: "Replaced Scotch Color Slide 400. Black box with rainbow circle logo.",
    era: "EXR Era"
  },
  {
    id: 118, name: "ScotchChrome 100", brand: "3M", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 1998, discontinued: 1996,
    note: "Last generation of Scotch Chrome reversal films. Produced by Ferrania.",
    era: "Digital Bridge"
  },
  {
    id: 119, name: "Scotch 200 ATG1", brand: "3M", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1992, discontinued: 1996,
    note: "3M/Ferrania consumer negative. Similar to Ferrania EXL 200.",
    era: "EXR Era"
  },
  {
    id: 120, name: "Scotch 400 ATG1", brand: "3M", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1992, discontinued: 1996,
    note: "High-speed 3M/Ferrania consumer negative.",
    era: "EXR Era"
  },
  {
    id: 121, name: "3M DynaPan 160", brand: "3M", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 160, format: "35mm", introduced: 1963, discontinued: 1975,
    note: "Dynacolor-based B&W panchromatic negative under the 3M brand. Yellow and blue box.",
    era: "New Wave"
  },
  {
    id: 122, name: "3M Black-and-White 80", brand: "3M", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 80, format: "35mm", introduced: 1960, discontinued: 1975,
    note: "3M B&W still film, ISO 80. 1960s–1970s production.",
    era: "New Wave"
  },
  {
    id: 123, name: "3M Black-and-White 200", brand: "3M", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1960, discontinued: 1975,
    note: "3M B&W still film, ISO 200. 1960s–1970s production.",
    era: "New Wave"
  },

  // ── AGFA ──────────────────────────────────────────────────────────────────
  {
    id: 150, name: "Agfacolor CU T", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "8mm / 16mm", introduced: 1952, discontinued: 1958,
    note: "Agfa's early color reversal for amateur 8mm and 16mm cinema.",
    era: "Golden Age"
  },
  {
    id: 151, name: "Agfacolor CT13", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "8mm / 16mm", introduced: 1958, discontinued: 1963,
    note: "Agfacolor reversal, the CT13 series.",
    era: "New Wave"
  },
  {
    id: 152, name: "Agfacolor CK16", brand: "Agfa", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: null, format: "8mm / 16mm", introduced: 1960, discontinued: 1967,
    note: "Agfa cine negative for 16mm production.",
    era: "New Wave"
  },
  {
    id: 153, name: "Agfachrome", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "Super 8", introduced: 1974, discontinued: 1980,
    note: "Agfachrome Super 8 reversal.",
    era: "New Hollywood"
  },
  {
    id: 154, name: "Agfa Moviechrome 40", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 40, format: "Super 8", introduced: 1980, discontinued: 1994,
    note: "Last generation of Agfa Super 8 reversal. ISO 40, fine grain.",
    era: "Blockbuster Era"
  },
  {
    id: 155, name: "Agfa Moviechrome 160", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 160, format: "Super 8", introduced: 1980, discontinued: 1985,
    note: "High-speed Super 8 reversal.",
    era: "Blockbuster Era"
  },
  {
    id: 156, name: "Agfa XT100", brand: "Agfa", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 16mm", introduced: 1990, discontinued: 2004,
    note: "Late Agfa professional cine negative in the XT series.",
    era: "EXR Era"
  },
  {
    id: 157, name: "Agfa XTR250", brand: "Agfa", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 250, format: "35mm / 16mm", introduced: 1990, discontinued: 1998,
    note: "Agfa professional cine negative, Tungsten EI 250.",
    era: "EXR Era"
  },

  // ── FUJIFILM ──────────────────────────────────────────────────────────────
  {
    id: 200, name: "Fuji Color Negative (F-125)", brand: "Fujifilm", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 125, format: "35mm / 16mm", introduced: 1980, discontinued: 2013,
    note: "Fuji's professional motion picture negative line, circa 1980. Cool tones, fine grain.",
    era: "Blockbuster Era"
  },
  {
    id: 201, name: "Fuji F-500 Negative", brand: "Fujifilm", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 1988, discontinued: 2013,
    note: "F-Series high-speed cine negative. Tungsten EI 500.",
    era: "EXR Era"
  },
  {
    id: 202, name: "Fuji Super F-Series", brand: "Fujifilm", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 250, format: "35mm / 16mm", introduced: 1999, discontinued: 2013,
    note: "Super F-Series refine the F-Series with improved grain and color. T-grain technology.",
    era: "Digital Bridge"
  },
  {
    id: 203, name: "Fuji Eterna 500T (8673)", brand: "Fujifilm", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / 16mm", introduced: 2004, discontinued: 2013,
    note: "Eterna series flagship. Tungsten EI 500. Notable for natural skin tones. Discontinued when Fuji exited motion picture film.",
    era: "Modern"
  },
  {
    id: 204, name: "Fuji Eterna 250D (8563)", brand: "Fujifilm", type: "color",
    subtype: "Negative (Cine)", sensitivity: "Panchromatic",
    iso: 250, format: "35mm", introduced: 2004, discontinued: 2013,
    note: "Daylight EI 250 from the Eterna line. Cool, natural rendering.",
    era: "Modern"
  },
  {
    id: 205, name: "Fuji Eterna RDI (8803)", brand: "Fujifilm", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 2004, discontinued: 2013,
    note: "Reversal/DI stock for digital intermediate. Last Fujifilm cine reversal.",
    era: "Modern"
  },

  // ── ILFORD (still photography) ────────────────────────────────────────────
  {
    id: 250, name: "Ilford HP5 Plus", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1976, discontinued: null,
    note: "Iconic high-speed B&W still film. Pushable to ISO 3200. Widely used for street, documentary, and portrait work.",
    era: "New Hollywood"
  },
  {
    id: 251, name: "Ilford FP4 Plus", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 125, format: "35mm / 120", introduced: 1968, discontinued: null,
    note: "Fine-grain medium-speed B&W still film. ISO 125. Classic tonal range.",
    era: "New Hollywood"
  },
  {
    id: 252, name: "Ilford Delta 400", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1990, discontinued: null,
    note: "T-grain B&W negative. Finer grain than HP5 at ISO 400. Pushable to 3200.",
    era: "EXR Era"
  },
  {
    id: 253, name: "Ilford Delta 3200", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 3200, format: "35mm / 120", introduced: 1998, discontinued: null,
    note: "Ultra-high-speed B&W still film. Effective ISO 3200 (1000 nominal). Grain becomes artistic texture.",
    era: "Digital Bridge"
  },
  {
    id: 254, name: "Ilford Pan F Plus", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 120", introduced: 1990, discontinued: null,
    note: "Ultra-fine-grain slow B&W film. ISO 50. Exceptional sharpness and tonal gradation.",
    era: "EXR Era"
  },
  {
    id: 255, name: "Ilford XP2 Super", brand: "Ilford", type: "bw",
    subtype: "Negative (C-41)", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1980, discontinued: null,
    note: "Chromogenic B&W film developed in C-41 color chemistry. ISO 400, wide exposure latitude.",
    era: "Blockbuster Era"
  },
  {
    id: 256, name: "Ilford SFX 200", brand: "Ilford", type: "bw",
    subtype: "Negative (Extended Red)", sensitivity: "Extended Red",
    iso: 200, format: "35mm", introduced: 1995, discontinued: null,
    note: "Extended red sensitivity for pseudo-infrared effects with a red filter. ISO 200.",
    era: "Digital Bridge"
  },

  // ── KODAK STILL PHOTOGRAPHY ────────────────────────────────────────────────
  {
    id: 300, name: "Kodak Tri-X 400 (TX)", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1954, discontinued: null,
    note: "Legendary still photography B&W. Used by photojournalists and artists worldwide. Grain is part of its character.",
    era: "New Wave"
  },
  {
    id: 301, name: "Kodak T-MAX 100", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1986, discontinued: null,
    note: "T-grain technology B&W still film. Ultra-fine grain. ISO 100.",
    era: "Blockbuster Era"
  },
  {
    id: 302, name: "Kodak T-MAX 400", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1987, discontinued: null,
    note: "T-grain B&W, ISO 400. Finer grain than Tri-X at the same speed.",
    era: "EXR Era"
  },
  {
    id: 303, name: "Kodak T-MAX P3200", brand: "Kodak", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 3200, format: "35mm", introduced: 1988, discontinued: null,
    note: "Ultra-high-speed B&W still film. ISO 800 native, rated 3200. Revived in 2018.",
    era: "EXR Era"
  },
  {
    id: 304, name: "Kodacolor (Still — C-22)", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 120", introduced: 1942, discontinued: 1975,
    note: "Kodacolor for still photography; first consumer color negative film. Developed with C-22 process.",
    era: "Golden Age"
  },
  {
    id: 305, name: "Kodacolor II / VR", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 110 / 126 / 120", introduced: 1975, discontinued: 1995,
    note: "C-41 Kodacolor consumer negative. Dominant consumer film of the 1970s–80s. ISO 100–400 variants.",
    era: "New Hollywood"
  },
  {
    id: 306, name: "Kodak Gold 200", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 1988, discontinued: null,
    note: "Warm-toned consumer color negative. ISO 200. Still widely available.",
    era: "EXR Era"
  },
  {
    id: 307, name: "Kodak Portra 160", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 160, format: "35mm / 120", introduced: 1998, discontinued: null,
    note: "Professional portrait film. Natural skin tones, fine grain. ISO 160.",
    era: "Digital Bridge"
  },
  {
    id: 308, name: "Kodak Portra 400", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1998, discontinued: null,
    note: "Most popular professional still film. ISO 400 with wide latitude. Current production.",
    era: "Digital Bridge"
  },
  {
    id: 309, name: "Kodak Portra 800", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 800, format: "35mm / 120", introduced: 1998, discontinued: null,
    note: "High-speed professional portrait film. ISO 800.",
    era: "Digital Bridge"
  },
  {
    id: 310, name: "Kodak Ektar 100", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2008, discontinued: null,
    note: "World's finest grain color negative. ISO 100, hyper-saturated. Used by landscape and nature photographers.",
    era: "Digital Age"
  },
  {
    id: 311, name: "Kodak UltraMax 400", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 2000, discontinued: null,
    note: "Consumer color negative. ISO 400. Widely used and readily available.",
    era: "Modern"
  },
  {
    id: 312, name: "Kodak ColorPlus 200", brand: "Kodak", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1985, discontinued: null,
    note: "Budget consumer color negative. ISO 200. One of the cheapest available films globally.",
    era: "Blockbuster Era"
  },
  {
    id: 313, name: "Kodak Ektachrome 64 (E100 predecessor)", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 64, format: "35mm / 120", introduced: 1977, discontinued: 2012,
    note: "Professional E-6 reversal slide film. Cool tones, fine grain.",
    era: "New Hollywood"
  },
  {
    id: 314, name: "Kodak Ektachrome E100", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2018, discontinued: null,
    note: "Revived Ektachrome. E-6 process reversal. Clean, neutral tones. Current production.",
    era: "Revival"
  },
  {
    id: 315, name: "Kodak Aerochrome (Infrared)", brand: "Kodak", type: "color",
    subtype: "Specialty (Infrared)", sensitivity: "Infrared",
    iso: 200, format: "35mm", introduced: 1942, discontinued: 2011,
    note: "False-color infrared film. Vegetation renders vivid red/pink. Originally aerial survey film. ISO 200.",
    era: "Golden Age"
  },

  // ── FUJIFILM STILL ────────────────────────────────────────────────────────
  {
    id: 350, name: "Fujifilm Velvia 50", brand: "Fujifilm", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 120", introduced: 1990, discontinued: null,
    note: "Hyper-saturated reversal slide film. Beloved by landscape photographers. ISO 50. Current production.",
    era: "EXR Era"
  },
  {
    id: 351, name: "Fujifilm Velvia 100", brand: "Fujifilm", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2003, discontinued: 2021,
    note: "Velvia at ISO 100. Vivid, slightly less contrast than Velvia 50.",
    era: "Modern"
  },
  {
    id: 352, name: "Fujifilm Provia 100F", brand: "Fujifilm", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1999, discontinued: null,
    note: "Professional E-6 reversal. More neutral than Velvia. ISO 100. Current production.",
    era: "Digital Bridge"
  },
  {
    id: 353, name: "Fujifilm Superia 400", brand: "Fujifilm", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1998, discontinued: null,
    note: "Consumer C-41 negative. ISO 400. Characteristic cool-green Fuji tone.",
    era: "Digital Bridge"
  },
  {
    id: 354, name: "Fujifilm Pro 400H", brand: "Fujifilm", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 2000, discontinued: 2022,
    note: "Professional overexposure-friendly negative. ISO 400. Beloved by wedding photographers. Discontinued 2022.",
    era: "Modern"
  },
  {
    id: 355, name: "Fujifilm Neopan 100 Acros", brand: "Fujifilm", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2000, discontinued: null,
    note: "Finest grain Fujifilm B&W. ISO 100. Exceptional shadow detail. Revived in 2019 as Acros II.",
    era: "Modern"
  },
  {
    id: 356, name: "Fujifilm Neopan 400", brand: "Fujifilm", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1990, discontinued: 2013,
    note: "High-speed Fuji B&W negative. ISO 400. Discontinued 2013.",
    era: "EXR Era"
  },
  {
    id: 357, name: "Fujifilm Instax (Wide/Mini)", brand: "Fujifilm", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 800, format: "Instax Mini/Wide", introduced: 1998, discontinued: null,
    note: "Instant integral film. ISO 800. Biggest selling film product of the 21st century.",
    era: "Digital Bridge"
  },

  // ── REVIVED / MODERN (2010s–2026) ─────────────────────────────────────────
  {
    id: 400, name: "Cinestill 800T", brand: "CineStill", type: "color",
    subtype: "Negative (from Cine Stock)", sensitivity: "Panchromatic",
    iso: 800, format: "35mm / 120", introduced: 2012, discontinued: null,
    note: "Kodak VISION3 500T with remjet removed for still camera use. Tungsten EI 800. Famous for halation glow.",
    era: "Revival"
  },
  {
    id: 401, name: "Cinestill 50D", brand: "CineStill", type: "color",
    subtype: "Negative (from Cine Stock)", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 120", introduced: 2015, discontinued: null,
    note: "Kodak VISION3 50D adapted for still cameras. Daylight EI 50. Fine grain.",
    era: "Revival"
  },
  {
    id: 402, name: "Ferrania P30 Alpha", brand: "Ferrania", type: "bw",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 80, format: "35mm", introduced: 2017, discontinued: null,
    note: "Revived orthopanchromatic reversal from the restored Ferrania factory in Italy. ISO 80.",
    era: "Revival"
  },
  {
    id: 403, name: "Lomo 800", brand: "Lomography", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 800, format: "35mm / 120", introduced: 2014, discontinued: null,
    note: "High-speed color negative with distinctive colors. Produced by Ferrania.",
    era: "Revival"
  },
  {
    id: 404, name: "Kodak VISION3 65mm Ektachrome 100D", brand: "Kodak", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "65mm", introduced: 2025, discontinued: null,
    note: "Specially manufactured for Ryan Coogler's Sinners (2025). First 65mm Ektachrome 100D in history. IMAX 15-perf format. Historic first.",
    era: "Revival"
  }
];

// Era definitions for visual grouping
const ERAS = [
  { id: "Silent Era", start: 1916, end: 1927, label: "Silent Era", color: "#8B7355" },
  { id: "Early Sound", start: 1927, end: 1934, label: "Early Sound", color: "#A0522D" },
  { id: "Golden Age", start: 1935, end: 1954, label: "Golden Age", color: "#CD853F" },
  { id: "New Wave", start: 1955, end: 1968, label: "New Wave & B&W Renaissance", color: "#708090" },
  { id: "New Hollywood", start: 1969, end: 1979, label: "New Hollywood", color: "#6B8E23" },
  { id: "Blockbuster Era", start: 1980, end: 1988, label: "Blockbuster Era", color: "#4682B4" },
  { id: "EXR Era", start: 1989, end: 1995, label: "EXR / T-Grain Era", color: "#9370DB" },
  { id: "Digital Bridge", start: 1996, end: 2006, label: "Digital Bridge", color: "#20B2AA" },
  { id: "Modern", start: 2007, end: 2011, label: "Modern Film", color: "#3CB371" },
  { id: "Digital Age", start: 2007, end: 2017, label: "Digital Age", color: "#1E90FF" },
  { id: "Revival", start: 2012, end: 2026, label: "Film Revival", color: "#FF6347" }
];

// ── ANSCO ─────────────────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 500, name: "Anscochrome (Color Reversal)", brand: "Ansco", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 120", introduced: 1955, discontinued: 1973,
    note: "Integral tripack color reversal film based on Agfacolor technology. Used on Lust for Life (1956) dir. Vincente Minnelli. Discontinued 1973.",
    era: "New Wave"
  },
  {
    id: 501, name: "Ansco Color Negative", brand: "Ansco", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1950, discontinued: 1955,
    note: "Single-strip color negative process developed for MGM. Replaced by Eastmancolor in Hollywood after 1955.",
    era: "Golden Age"
  },
  {
    id: 502, name: "Ansco Plenacolor", brand: "Ansco", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "120 / 35mm", introduced: 1949, discontinued: 1960,
    note: "Color negative roll film with positive yellow mask. Launched 1946, marketed from 1949. Complex Ansco-proprietary processing.",
    era: "Golden Age"
  },
  {
    id: 503, name: "Ansco Color Print (Printon)", brand: "Ansco", type: "color",
    subtype: "Reversal (Print Material)", sensitivity: "Panchromatic",
    iso: null, format: "Sheet", introduced: 1943, discontinued: 1965,
    note: "First integral tripack color print material in the world. Originally for US military (1943), sold to photographers from 1945.",
    era: "Golden Age"
  },
  {
    id: 504, name: "Ansco Panchromatic 100", brand: "Ansco", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1940, discontinued: 1967,
    note: "Ansco medium-speed panchromatic B&W negative. Widely distributed consumer film. Part of Ansco's pre-GAF era.",
    era: "Golden Age"
  },
  {
    id: 505, name: "GAF Color 64", brand: "Ansco", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 64, format: "35mm", introduced: 1967, discontinued: 1977,
    note: "GAF (General Aniline and Film, the renamed Ansco) color reversal slide film. ISO 64. Sold in GAF yellow boxes.",
    era: "New Hollywood"
  },
  {
    id: 506, name: "GAF 500 Color Film", brand: "Ansco", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 500, format: "35mm / Super 8", introduced: 1970, discontinued: 1978,
    note: "World's fastest consumer color reversal at its launch. ISO 500 daylight. Produced under the GAF brand (successor to Ansco).",
    era: "New Hollywood"
  }
);

// ── KONICA ────────────────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 550, name: "Konica Chrome", brand: "Konica", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1960, discontinued: 1975,
    note: "Konica's early color reversal slide film line. Japan's domestic alternative to Kodachrome and Ektachrome.",
    era: "New Wave"
  },
  {
    id: 551, name: "Konica Color SR100", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 1975, discontinued: 1990,
    note: "Super Resolution series color negative. ISO 100. Known for sharpness and fine grain, popular in Japan and Southeast Asia.",
    era: "New Hollywood"
  },
  {
    id: 552, name: "Konica Color SR200", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1978, discontinued: 1995,
    note: "Super Resolution ISO 200. Medium-speed consumer color negative.",
    era: "New Hollywood"
  },
  {
    id: 553, name: "Konica Color SR400", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1980, discontinued: 2000,
    note: "Super Resolution high-speed color negative. ISO 400.",
    era: "Blockbuster Era"
  },
  {
    id: 554, name: "Konica VX100", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1990, discontinued: 2004,
    note: "Vivid Extra series. ISO 100. Warm-toned, vivid color rendition. Available in 35mm and 120.",
    era: "EXR Era"
  },
  {
    id: 555, name: "Konica VX200", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 1992, discontinued: 2004,
    note: "Konica Vivid Extra ISO 200 in 35mm and 120.",
    era: "EXR Era"
  },
  {
    id: 556, name: "Konica Centuria 100", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1999, discontinued: 2007,
    note: "Centuria consumer and professional series. ISO 100 fine grain. Available in both 35mm and 120 formats.",
    era: "Digital Bridge"
  },
  {
    id: 557, name: "Konica Centuria 200", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1999, discontinued: 2007,
    note: "Centuria medium-speed consumer film. ISO 200.",
    era: "Digital Bridge"
  },
  {
    id: 558, name: "Konica Centuria 400", brand: "Konica", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1999, discontinued: 2007,
    note: "Centuria high-speed film. ISO 400. Still sold under the Konica brand in some markets until ~2007.",
    era: "Digital Bridge"
  },
  {
    id: 559, name: "Konica Black-and-White 400", brand: "Konica", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1985, discontinued: 2004,
    note: "Konica panchromatic B&W negative. ISO 400. Competed with Ilford HP5 and Kodak Tri-X in Asian markets.",
    era: "Blockbuster Era"
  },
  {
    id: 560, name: "Konica Infrared 750", brand: "Konica", type: "bw",
    subtype: "Specialty (Infrared)", sensitivity: "Infrared",
    iso: 32, format: "35mm", introduced: 1987, discontinued: 2007,
    note: "B&W infrared-sensitive film sensitive to 750nm+. Requires deep red or infrared filter. ISO 32 (unfiltered). Highly sought by landscape photographers.",
    era: "EXR Era"
  }
);

// ── HARMAN ────────────────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 600, name: "Harman Direct Positive Paper (Large Format)", brand: "Harman", type: "bw",
    subtype: "Specialty (Positive)", sensitivity: "Panchromatic",
    iso: null, format: "Sheet / 120", introduced: 2007, discontinued: null,
    note: "Fibre-based paper producing direct positive prints without a negative. Ideal for pinhole and slit cameras. Made by Harman Technology (Ilford's parent). Ongoing production.",
    era: "Digital Age"
  },
  {
    id: 601, name: "Harman Phoenix 200", brand: "Harman", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 2023, discontinued: null,
    note: "Harman Technology's first color film in decades. Experimental color negative with strong contrast and deliberate no anti-halation layer creating a halo glow effect. Currently in active production.",
    era: "Revival"
  },
  {
    id: 602, name: "Harman Phoenix II 200", brand: "Harman", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 2025, discontinued: null,
    note: "Revised formula with improved contrast and color rendering over Phoenix 200. 2025 release.",
    era: "Revival"
  },
  {
    id: 603, name: "Harman RED 125", brand: "Harman", type: "color",
    subtype: "Specialty (Redscale)", sensitivity: "Panchromatic",
    iso: 125, format: "35mm / 120", introduced: 2025, discontinued: null,
    note: "Redscale film — reverse-rolled Phoenix 200. ISO 125. Produces intense red/orange tones characteristic of redscale photography. 120 format added June 2025.",
    era: "Revival"
  }
);

// ── FILM FERRANIA (historic + modern) ────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 650, name: "Ferrania P30 (Original Cinema)", brand: "Film Ferrania", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 80, format: "35mm / 120", introduced: 1959, discontinued: 1980,
    note: "Legendary Italian cinema B&W stock used by Fellini (8½, 1963) and Pasolini. High silver content, strong contrast. Used on Sophia Loren's Two Women (1960, Academy Award winner).",
    era: "New Wave"
  },
  {
    id: 651, name: "Ferraniacolor", brand: "Film Ferrania", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: null, format: "35mm / 120 / 16mm", introduced: 1952, discontinued: 1964,
    note: "Ferrania's first color emulsion. Initially criticised for low sensitivity but improved over time. Absorbed into the 3M era in 1964.",
    era: "Golden Age"
  },
  {
    id: 652, name: "Ferrania Solaris FG 100", brand: "Film Ferrania", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1999, discontinued: 2010,
    note: "Ferrania-branded color negative sold after 3M era. ISO 100. Also OEM-supplied to other brands. Fine grain, warm tones.",
    era: "Digital Bridge"
  },
  {
    id: 653, name: "Ferrania Solaris FG 200", brand: "Film Ferrania", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1999, discontinued: 2010,
    note: "Ferrania Solaris ISO 200. OEM supplied to grocery/drugstore brands.",
    era: "Digital Bridge"
  },
  {
    id: 654, name: "Ferrania Solaris FG 400", brand: "Film Ferrania", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1999, discontinued: 2010,
    note: "Ferrania Solaris ISO 400. High speed consumer negative. Supplied to Konica and Polaroid for OEM packaging.",
    era: "Digital Bridge"
  },
  {
    id: 655, name: "FILM Ferrania P30 Alpha", brand: "Film Ferrania", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 80, format: "35mm", introduced: 2017, discontinued: null,
    note: "Revival of the legendary P30 formula by the new FILM Ferrania company. ISO 80. High silver content, strong contrast. Made in the original Italian factory. Ongoing production.",
    era: "Revival"
  },
  {
    id: 656, name: "FILM Ferrania P30 MkII", brand: "Film Ferrania", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 80, format: "35mm", introduced: 2019, discontinued: null,
    note: "Refined P30 formula with smoother tonal transitions and richer shadow detail. True modern panchromatic. ISO 80. Current production.",
    era: "Revival"
  },
  {
    id: 657, name: "FILM Ferrania P33", brand: "Film Ferrania", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 2023, discontinued: null,
    note: "Slightly faster P30 sibling at ISO 100. Released to expand Ferrania's B&W lineup. Acquired by Orwell in 2025 but production continues.",
    era: "Revival"
  }
);

// ── LOMOGRAPHY (expanded) ─────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 700, name: "Lomo X-Pro Chrome 100", brand: "Lomography", type: "color",
    subtype: "Reversal (Cross-process)", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 2010, discontinued: 2012,
    note: "E-6 reversal film designed for cross-processing in C-41. Produces vivid color shifts and high contrast. ISO 100.",
    era: "Digital Age"
  },
  {
    id: 701, name: "Lomography Color Negative 100", brand: "Lomography", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2012, discontinued: null,
    note: "General purpose color negative for sunny conditions. ISO 100. Produced by Kodak.",
    era: "Revival"
  },
  {
    id: 702, name: "Lomography Color Negative 400", brand: "Lomography", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 2012, discontinued: null,
    note: "Workhorse Lomo color negative. ISO 400. Bold colors, good sharpness. Ferrania-produced.",
    era: "Revival"
  },
  {
    id: 703, name: "Lomography Color Negative 800", brand: "Lomography", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 800, format: "35mm / 120", introduced: 2012, discontinued: null,
    note: "High-speed Lomo color negative. ISO 800. Ferrania-produced. Pronounced grain.",
    era: "Revival"
  },
  {
    id: 704, name: "Lomography Lady Grey 400", brand: "Lomography", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 2012, discontinued: null,
    note: "B&W panchromatic negative. ISO 400. Was Kodak T-MAX 400 to 2017; currently Fomapan 400.",
    era: "Revival"
  },
  {
    id: 705, name: "Lomography Earl Grey 100", brand: "Lomography", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 2014, discontinued: null,
    note: "B&W panchromatic negative ISO 100. Currently Fomapan 100. Sold in signature Lomo tin.",
    era: "Revival"
  },
  {
    id: 706, name: "LomoChrome Purple XR 100-400", brand: "Lomography", type: "color",
    subtype: "Specialty (Color-shift)", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120 / 110", introduced: 2013, discontinued: null,
    note: "Color-shifting C-41 negative inspired by Kodak Aerochrome. Green foliage shifts to vivid purple. ISO 100–400. Multiple updated formulas through 2024.",
    era: "Revival"
  },
  {
    id: 707, name: "LomoChrome Turquoise XR 100-400", brand: "Lomography", type: "color",
    subtype: "Specialty (Color-shift)", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120 / 110", introduced: 2015, discontinued: null,
    note: "Color-shift film with orange-to-turquoise hue shifts. ISO 100–400.",
    era: "Revival"
  },
  {
    id: 708, name: "LomoChrome Metropolis XR 100-400", brand: "Lomography", type: "color",
    subtype: "Specialty (Color-shift)", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120 / 110", introduced: 2019, discontinued: null,
    note: "Desaturated, muted cinematic palette inspired by urban grit. ISO 100–400. Kickstarter-funded; met goal in 72 hours.",
    era: "Revival"
  },
  {
    id: 709, name: "Lomography Berlin 400", brand: "Lomography", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 2018, discontinued: null,
    note: "Cinematic B&W negative from Wolfen/ORWO. ISO 400. Wide exposure latitude to EI 3200. Also suitable for reversal processing.",
    era: "Revival"
  },
  {
    id: 710, name: "Lomography Fantome Kino B&W 8", brand: "Lomography", type: "bw",
    subtype: "Specialty (Low-speed)", sensitivity: "Panchromatic",
    iso: 8, format: "35mm", introduced: 2020, discontinued: null,
    note: "Extremely slow ISO 8 panchromatic. Ultra-high contrast with deep blacks. Based on Wolfen DP 31 duplicating positive film.",
    era: "Revival"
  },
  {
    id: 711, name: "LomoChrome Color '92 400", brand: "Lomography", type: "color",
    subtype: "Specialty (Color-shift)", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120 / 110", introduced: 2023, discontinued: null,
    note: "Retro 1990s-style color film. Grain and hues reminiscent of consumer film of the era. Wolfen/ORWO emulsion.",
    era: "Revival"
  },
  {
    id: 712, name: "LomoChrome Classicolor 200", brand: "Lomography", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 2025, discontinued: null,
    note: "2025 formula. Handcrafted with LomoChrome coupler technology. Strong reds, brilliant contrast. 120 format to follow.",
    era: "Revival"
  }
);

// ── SHANGHAI ──────────────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 750, name: "Shanghai GP3 100 (Sheet Film)", brand: "Shanghai", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "Sheet (4x5 to 20x24)", introduced: 1958, discontinued: null,
    note: "Original Shanghai GP3 formula developed in 1958 by Shanggong Shenbei factory. Affordable panchromatic B&W with thin anti-halation layer. Had 40-50% domestic Chinese market share at peak. Currently available in large format sheets.",
    era: "New Wave"
  },
  {
    id: 751, name: "Shanghai GP3 100 (Roll Film)", brand: "Shanghai", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120 / 127 / 220", introduced: 2019, discontinued: null,
    note: "Modern re-introduction of GP3 in roll film formats. Punchy contrast, distinctive grain. Considered Wolfen UN 54 emulsion based on edge markings. 127, 220, and 620 formats added 2021.",
    era: "Revival"
  },
  {
    id: 752, name: "Shanghai GP3 400", brand: "Shanghai", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 2019, discontinued: null,
    note: "Higher-speed Shanghai B&W negative. ISO 400. Likely Wolfen N 74 cine emulsion. Introduced alongside GP3 100 roll format.",
    era: "Revival"
  },
  {
    id: 753, name: "Shanghai Shenguang 400", brand: "Shanghai", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 2024, discontinued: null,
    note: "Shanghai's first color film. ISO 400. Considered Original Wolfen NC 400 packaged in China. General purpose C-41 negative.",
    era: "Revival"
  }
);

// ── AGFA (expanded) ───────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 800, name: "Agfa Isochrome", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: null, format: "35mm", introduced: 1936, discontinued: 1945,
    note: "One of the earliest subtractive color reversal films. Agfacolor-based. Used in early Nazi-era German cinema.",
    era: "Golden Age"
  },
  {
    id: 801, name: "Agfacolor CT18", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 50, format: "35mm / 120", introduced: 1963, discontinued: 1984,
    note: "Hugely popular European color reversal. ISO 50. Famous for warm, slightly yellowish tones distinct from Kodachrome.",
    era: "New Wave"
  },
  {
    id: 802, name: "Agfachrome 64", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 64, format: "35mm / 120", introduced: 1980, discontinued: 2005,
    note: "Successor to CT18. ISO 64. E-6 compatible. Warm, fine-grain reversal.",
    era: "Blockbuster Era"
  },
  {
    id: 803, name: "Agfachrome 100 RS", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1985, discontinued: 2005,
    note: "Agfa professional reversal. ISO 100. RS = Rapid Switch to push/pull processing. Neutral color balance.",
    era: "Blockbuster Era"
  },
  {
    id: 804, name: "Agfachrome 200 RS", brand: "Agfa", type: "color",
    subtype: "Reversal", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 1988, discontinued: 2005,
    note: "Fast Agfa reversal ISO 200.",
    era: "EXR Era"
  },
  {
    id: 805, name: "Agfa Vista 200", brand: "Agfa", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm", introduced: 1995, discontinued: 2017,
    note: "Agfa consumer color negative. ISO 200. Widely sold in European supermarkets. Warm tones.",
    era: "Digital Bridge"
  },
  {
    id: 806, name: "Agfa Vista 400", brand: "Agfa", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 1995, discontinued: 2017,
    note: "High-speed Agfa consumer negative. ISO 400. Discontinued as AgfaPhoto brand.",
    era: "Digital Bridge"
  },
  {
    id: 807, name: "Agfa APX 100", brand: "Agfa", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1985, discontinued: 2005,
    note: "Agfa Panchromatic Xtra ISO 100. Classic fine-grain B&W. Discontinued in original form 2005; revived under AgfaPhoto brand (Ilford emulsion) from 2013.",
    era: "Blockbuster Era"
  },
  {
    id: 808, name: "Agfa APX 400", brand: "Agfa", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1988, discontinued: 2005,
    note: "High-speed B&W panchromatic. ISO 400. Revived under AgfaPhoto brand from 2013.",
    era: "EXR Era"
  },
  {
    id: 809, name: "Agfa Portrait XPS 160", brand: "Agfa", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 160, format: "35mm / 120", introduced: 1994, discontinued: 2002,
    note: "Professional portrait color negative. ISO 160. Warm-toned, extended latitude.",
    era: "EXR Era"
  },
  {
    id: 810, name: "AgfaPhoto APX 100 (revival)", brand: "Agfa", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 2013, discontinued: null,
    note: "Revived under AgfaPhoto brand. Similar to Kentmere 100 (Harman/Ilford emulsion). Current production.",
    era: "Revival"
  },
  {
    id: 811, name: "AgfaPhoto APX 400 (revival)", brand: "Agfa", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 2013, discontinued: null,
    note: "Revived under AgfaPhoto brand. Similar to Kentmere 400. Current production.",
    era: "Revival"
  },
  {
    id: 812, name: "ORWO UN54 (Agfa-lineage)", brand: "Agfa", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm / 120", introduced: 1990, discontinued: null,
    note: "ORWO (formerly East German Agfa/Wolfen) UN54 panchromatic cine film. Basis for many rebranded stocks (Shanghai GP3, Lomo Potsdam). Still manufactured in Bitterfeld, Germany.",
    era: "EXR Era"
  }
);

// ── ILFORD (expanded) ─────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 850, name: "Ilford Ortho Plus", brand: "Ilford", type: "bw",
    subtype: "Negative (Orthochromatic)", sensitivity: "Orthochromatic",
    iso: 80, format: "35mm / 120 / Sheet", introduced: 1993, discontinued: null,
    note: "Orthochromatic B&W negative (insensitive to red). ISO 80. Used for copy work, lithography, and creative landscape work. Ongoing.",
    era: "EXR Era"
  },
  {
    id: 851, name: "Ilford HP5 Plus (120/Sheet)", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "120 / 4x5 / Sheet", introduced: 1989, discontinued: null,
    note: "Medium format and large format HP5 Plus. Same emulsion as 35mm HP5 Plus. Pushable to ISO 3200. Current production.",
    era: "EXR Era"
  },
  {
    id: 852, name: "Ilford Kentmere 100", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 100, format: "35mm", introduced: 2010, discontinued: null,
    note: "Budget-tier panchromatic B&W from Harman/Ilford family. ISO 100. Fine grain. C-41 chemical compatible in some labs.",
    era: "Digital Age"
  },
  {
    id: 853, name: "Ilford Kentmere 400", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 2010, discontinued: null,
    note: "Affordable high-speed panchromatic from the Harman/Ilford family. ISO 400. Popular with beginners and documentary shooters.",
    era: "Digital Age"
  },
  {
    id: 854, name: "Ilford HP3", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 1941, discontinued: 1976,
    note: "Pre-HP5 Ilford workhorse panchromatic. ISO 200/400. The HP series began with HP1 in 1935. HP3 widely used in British photojournalism.",
    era: "Golden Age"
  },
  {
    id: 855, name: "Ilford HP4", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm / 120", introduced: 1967, discontinued: 1989,
    note: "High-speed panchromatic predecessor to HP5. ISO 400. Excellent for available-light photography.",
    era: "New Hollywood"
  },
  {
    id: 856, name: "Ilford FP3", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 125, format: "35mm / 120", introduced: 1946, discontinued: 1968,
    note: "Fine Pan predecessor to FP4. ISO 125. Preceded the FP4 Plus update.",
    era: "Golden Age"
  },
  {
    id: 857, name: "Ilford Selochrome", brand: "Ilford", type: "bw",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 200, format: "35mm / 120", introduced: 1935, discontinued: 1965,
    note: "Classic Ilford medium-speed panchromatic. ISO 200. Popular in Britain and the Commonwealth throughout the 1940s–60s.",
    era: "Golden Age"
  },
  {
    id: 858, name: "Ilfocolor 400 Vintage Tone", brand: "Ilford", type: "color",
    subtype: "Negative", sensitivity: "Panchromatic",
    iso: 400, format: "35mm", introduced: 2023, discontinued: null,
    note: "Harman's first color film under the Ilford brand. Retro 1990s tones. Likely Wolfen NC 400. Packaged in China. C-41 process.",
    era: "Revival"
  }
);

// ── Polaroid (1948–2008) ──────────────────────────────────────────────────────
FILM_STOCKS.push(
  {
    id: 900, name: "Polaroid Type 40 Roll Film", brand: "Polaroid", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 100, format: "Roll", introduced: 1948, discontinued: 1963,
    note: "The world's first instant film. Sepia-toned B&W peel-apart roll for Land cameras. 60-second development. Launched with the Model 95 Land Camera at $89.75.",
    era: "Golden Age"
  },
  {
    id: 901, name: "Polaroid Type 42 Pack Film", brand: "Polaroid", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 200, format: "Pack", introduced: 1958, discontinued: 1975,
    note: "Early 3.25×4.25\" peel-apart B&W pack film. ISO 200. One of the original 100-series pack films for folding Land cameras.",
    era: "Golden Age"
  },
  {
    id: 902, name: "Polaroid Type 105 P/N", brand: "Polaroid", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 75, format: "Pack", introduced: 1963, discontinued: 2007,
    note: "Cult-favourite peel-apart pack film yielding both a print and a reusable B&W negative. ISO 75. Beloved by Ansel Adams and studio photographers.",
    era: "New Hollywood"
  },
  {
    id: 903, name: "Polaroid Type 107 High-Speed", brand: "Polaroid", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 3000, format: "Pack", introduced: 1963, discontinued: 2008,
    note: "Ultra-high-speed peel-apart B&W pack film. ISO 3000. Used in ID cameras, surveillance, and scientific applications.",
    era: "New Hollywood"
  },
  {
    id: 904, name: "Polaroid Type 108 Polacolor", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 75, format: "Pack", introduced: 1963, discontinued: 2008,
    note: "The world's first colour instant peel-apart film. ISO 75. Vibrant saturated tones. Mainstay of professional portrait and product studios for four decades.",
    era: "New Hollywood"
  },
  {
    id: 905, name: "Polaroid Type 665 P/N", brand: "Polaroid", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 75, format: "Pack", introduced: 1975, discontinued: 2006,
    note: "Fine-grain peel-apart pack film with reusable B&W negative. ISO 75. Treasured by large-format workers for proofing and creative use.",
    era: "New Hollywood"
  },
  {
    id: 906, name: "Polaroid SX-70 Color", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 160, format: "Integral", introduced: 1972, discontinued: 2005,
    note: "Landmark integral square-format film for the folding SX-70 reflex camera. ISO 160. Develops in ambient light without a dark slide. Edwin Land's masterpiece.",
    era: "New Hollywood"
  },
  {
    id: 907, name: "Polaroid Time-Zero Supercolor", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 160, format: "Integral", introduced: 1980, discontinued: 2005,
    note: "SX-70-compatible integral film with accelerated development. ISO 160. Favoured by artists for image manipulation while still wet.",
    era: "New Hollywood"
  },
  {
    id: 908, name: "Polaroid 600 Color", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 1981, discontinued: 2008,
    note: "High-speed integral film for the 600-series cameras. ISO 640. The best-selling instant film in history. Flash built into every pack.",
    era: "Chromogenic Era"
  },
  {
    id: 909, name: "Polaroid Spectra / Image", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 1986, discontinued: 2008,
    note: "Wider rectangular-format integral film for Spectra/Image cameras. ISO 640. Higher resolution emulsion than 600-series. Used in professional ID systems.",
    era: "Chromogenic Era"
  },
  {
    id: 910, name: "Polaroid Type 809 (8x10)", brand: "Polaroid", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 80, format: "8x10", introduced: 1973, discontinued: 2009,
    note: "Large-format peel-apart colour instant film. ISO 80. Used by commercial photographers, scientists, and artists including Chuck Close. Discontinued after Polaroid's bankruptcy.",
    era: "New Hollywood"
  }
);

// ── The Impossible Project / Polaroid Originals (2010–present) ────────────────
FILM_STOCKS.push(
  {
    id: 920, name: "PX 70 Color Protection", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 160, format: "Integral", introduced: 2010, discontinued: 2014,
    note: "The Impossible Project's debut colour film for SX-70 cameras. Required a shield card to block light during development. A heroic feat — reformulated from scratch after Polaroid destroyed its chemistry.",
    era: "Digital Age"
  },
  {
    id: 921, name: "PX 100 Silver Shade", brand: "Impossible Project", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 125, format: "Integral", introduced: 2010, discontinued: 2014,
    note: "First B&W integral film from The Impossible Project. For SX-70 cameras. ISO 125. Notable for warm silver tones. Needed light shielding during development.",
    era: "Digital Age"
  },
  {
    id: 922, name: "PX 600 Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2010, discontinued: 2016,
    note: "Impossible Project integral colour film for 600-series cameras. ISO 640. Went through multiple reformulations to improve stability and colour accuracy.",
    era: "Digital Age"
  },
  {
    id: 923, name: "PX 600 Silver Shade", brand: "Impossible Project", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2010, discontinued: 2016,
    note: "B&W integral film for 600-series cameras from The Impossible Project. ISO 640. High contrast with a distinctive cool-silver look.",
    era: "Digital Age"
  },
  {
    id: 924, name: "Impossible Spectra Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2012, discontinued: 2019,
    note: "Rectangular-format integral colour film for Polaroid Spectra/Image cameras. One of the rarer Impossible formats. Continued into the Polaroid Originals era.",
    era: "Digital Age"
  },
  {
    id: 925, name: "Impossible 8x10 Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 80, format: "8x10", introduced: 2014, discontinued: null,
    note: "Large-format integral 8x10 instant colour film. Hand-assembled in small batches in Amsterdam. The only large-format instant integral film commercially available today.",
    era: "Digital Age"
  },
  {
    id: 926, name: "Polaroid Originals 600 Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2017, discontinued: null,
    note: "Reformulated 600 instant colour film released when Impossible Project acquired the Polaroid brand and became Polaroid Originals. ISO 640. Much improved stability over early Impossible films.",
    era: "Revival"
  },
  {
    id: 927, name: "Polaroid Originals SX-70 Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 160, format: "Integral", introduced: 2017, discontinued: null,
    note: "Current production SX-70 integral colour film from Polaroid Originals/Polaroid B.V. ISO 160. Dramatically more consistent than early Impossible Project SX-70 films.",
    era: "Revival"
  },
  {
    id: 928, name: "Polaroid i-Type Color", brand: "Impossible Project", type: "color",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2018, discontinued: null,
    note: "New film format introduced with the Polaroid OneStep 2. No battery in the pack — power from the camera. ISO 640. Ongoing production under Polaroid B.V.",
    era: "Revival"
  },
  {
    id: 929, name: "Polaroid i-Type B&W", brand: "Impossible Project", type: "bw",
    subtype: "Instant", sensitivity: "Panchromatic",
    iso: 640, format: "Integral", introduced: 2018, discontinued: null,
    note: "B&W version of the i-Type format. High contrast monochrome integral film for Polaroid Now and Now+ cameras. No battery pack required.",
    era: "Revival"
  }
);
