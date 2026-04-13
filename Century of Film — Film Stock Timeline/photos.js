/* ═══════════════════════════════════════════════════════════
   FILM_PHOTOS — Reference packaging photo URLs per stock ID
   Sources: manufacturer sites, B&H, Adorama, Wikimedia Commons,
            Lomography Shop, Film Photography Store, etc.
   Stocks with no known photo are omitted (modal shows nothing).
   ═══════════════════════════════════════════════════════════ */
const FILM_PHOTOS = {

  // ── Kodak Motion Picture ────────────────────────────────────
  15:  'https://s.turbifycdn.com/aah/yhst-2405092478071/kodak-5222-double-x-black-white-film-35mm-x-100-ft-roll-iso-250-46.png',
  52:  'https://collections.museumsvictoria.com.au/content/media/34/774334-large.jpg',
  76:  'https://www.kodak.com/content/products-images/Film/_800x418_crop_center-center_82_none/VISION3_5219_7219_filmcans_022018_white-2.jpg',
  77:  'https://theduckroom.com/cdn/shop/products/PB270011_530x@2x.jpg',
  78:  'https://www.bhphotovideo.com/images/fb/kodak_7510936_vision3_50d_color_negative_1906007.jpg',

  // ── Kodak Still Film ────────────────────────────────────────
  300: 'https://kodak.photosys.com/cdn/shop/files/Kodak_TriX400_35_817835e7-8c68-4465-ab6b-0d85eaf17a3e_large.jpg',
  301: 'https://www.bhphotovideo.com/images/fb/Kodak_1371517_TMX_4052_4x5_50_244641.jpg',
  302: 'https://www.bhphotovideo.com/images/fb/Kodak_1587716_TMY_35mm_100_Roll_29132.jpg',
  303: 'https://mpex.com/pub/media/catalog/product/cache/2264c9e38777ed202d5c3170a063a3cf/k/o/kod1083_1.jpeg',
  304: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Kodacolor-X.jpg/640px-Kodacolor-X.jpg',
  306: 'https://www.bhphotovideo.com/images/fb/kodak_6034003_gold_200_color_negative_826726.jpg',
  307: 'https://www.bhphotovideo.com/images/fb/Kodak_6031484_35mm_Professional_Portra_160_744556.jpg',
  308: 'https://www.bhphotovideo.com/images/fb/Kodak_6031678_35mm_Professional_Portra_400_742308.jpg',
  309: 'https://richardphotolab.com/cdn/shop/files/Kodak-Portra-800-35mm-Color-Film.webp',
  310: 'https://www.kodak.com/content/images/_1200x630_fit_center-center_82_none/kodak-ektar-film-100-135-36exp-box.jpg',
  311: 'https://cdn.shoplightspeed.com/shops/650021/files/73120131/1652x1652x1/kodak-kodak-eastman-ultramax-400-color-negative-fi.jpg',
  312: 'https://www.bhphotovideo.com/images/fb/kodak_603147_color_print_film_200_36_1476366.jpg',
  313: 'https://www.bhphotovideo.com/images/fb/Kodak_1208263_EPY_6118_4x5_50_27479.jpg',
  314: 'https://www.bhphotovideo.com/images/fb/kodak_7518426_eastman_professional_ektachrome_e100_1951818.jpg',
  315: 'https://cardinalcameraused.com/cdn/shop/files/A8400D55-1389-4A93-B528-01256B0642C5.jpg',

  // ── Ilford ──────────────────────────────────────────────────
  250: 'https://www.ilfordphoto.com/wp/wp-content/uploads/2024/09/HP5_135_BOX_LowRes.jpg',
  251: 'https://www.ilfordphoto.com/wp/wp-content/uploads/2024/09/FP4_120BOX_LowRes.jpg',
  252: 'https://www.bhphotovideo.com/images/fb/Ilford_1780668_Delta_400_Professional_120_Black_88665.jpg',
  253: 'https://www.ilfordphoto.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/d/p/dp3200_135_36_c_b.jpg',
  254: 'https://www.bhphotovideo.com/images/fb/Ilford_1706594_Pan_F_Plus_120_25309.jpg',
  255: 'https://www.bhphotovideo.com/images/fb/ilford_1839621_xp2_super_35mm_iso_400_744609.jpg',
  256: 'https://www.ilfordphoto.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/8/1829189_sfx200_main.jpg',
  851: 'https://www.ilfordphoto.com/wp/wp-content/uploads/2024/09/HP5_135_BOX_LowRes.jpg',
  852: 'https://www.ilfordphoto.com/media/catalog/product/cache/2765542505660baab28ecd555e27366e/k/e/kentmere100_24s.jpg',
  853: 'https://www.bhphotovideo.com/images/images500x500/Kentmere_6010476_Kentmere_35mm_Black_and_1657731926_601021.jpg',
  858: 'https://i5.walmartimages.com/asr/52422f3e-052b-474f-b7d8-9f8622c00112.f13b7c5bf44819021c126eba003a760e.jpeg',

  // ── Fujifilm ────────────────────────────────────────────────
  350: 'https://robertscamera.com/media/catalog/product/cache/c7ca3a2f3d47b24c1115dfc5475f94df/f/u/fujifilm_15757543_rvp_120_fujich_1.jpg',
  351: 'https://www.bhphotovideo.com/images/fb/fujifilm_fujichrome_velvia_100_professional_1454163.jpg',
  352: 'https://www.bhphotovideo.com/images/fb/fujifilm_fujichrome_provia_100f_professional_1448304.jpg',
  353: 'https://www.adorama.com/images/Large/FJCHSP36.jpg',
  354: 'https://www.bhphotovideo.com/images/fb/Fujifilm_15942186_Pro_400H_135_36_Professional_647054.jpg',
  355: 'https://www.bhphotovideo.com/images/fb/Fujifilm_16010291_Neopan_Acros_100_120_Professional_706877.jpg',
  356: 'https://www.adorama.com/images/Large/FJNP40036.jpg',
  357: 'https://www.bhphotovideo.com/images/fb/fujifilm_16437396_instax_mini_film_twin_1171821.jpg',

  // ── CineStill ───────────────────────────────────────────────
  400: 'https://www.bhphotovideo.com/images/fb/cinestill_800120_800t_tungsten_high_speed_1380524.jpg',
  401: 'https://www.bhphotovideo.com/images/fb/cinestill_800220_50d_daylight_fine_grain_1380525.jpg',

  // ── Ferrania / Film Ferrania ────────────────────────────────
  402: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Ferrania_P30_Alpha%2C_1805271725%2C_ako.jpg',
  650: 'https://www.freestylephoto.com/static/images/product/1630135/lg/1630135_%282025%29_003.jpeg',
  655: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Ferrania_P30_Alpha%2C_1805271725%2C_ako.jpg',

  // ── Agfa ────────────────────────────────────────────────────
  151: 'https://www.filmkorn.org/super8data/database/film_list/film_image/agfacolor_ct13.jpg',
  805: 'https://www.bhphotovideo.com/images/images500x500/agfa_1175228_vista_plus_200_35mm_1394800531_1038099.jpg',
  806: 'https://www.bhphotovideo.com/images/images500x500/agfa_1175240_agfaphoto_vista_plus_400_1394800531_1038097.jpg',
  807: 'https://www.bhphotovideo.com/images/fb/Agfa_B9FHS_APX_100_135_36_Agfapan_Professional_1097.jpg',
  808: 'https://www.bhphotovideo.com/images/fb/agfa_ap6a4360_apx_400_professional_135_36_1000304.jpg',
  810: 'https://www.bhphotovideo.com/images/fb/Agfa_B9FHS_APX_100_135_36_Agfapan_Professional_1097.jpg',
  811: 'https://www.bhphotovideo.com/images/fb/agfa_ap6a4360_apx_400_professional_135_36_1000304.jpg',

  // ── Ansco ───────────────────────────────────────────────────
  500: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/AnscoChrome1963.jpg',

  // ── Konica ──────────────────────────────────────────────────
  550: 'https://i.etsystatic.com/24697211/r/il/3c34f9/7468952984/il_fullxfull.7468952984_7mn9.jpg',
  556: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/%D0%A4%D0%BE%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%BA%D0%B0_Konica_Centuria_100.jpg/1280px-%D0%A4%D0%BE%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%BA%D0%B0_Konica_Centuria_100.jpg',
  557: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/A_box_of_Konica_Minolta_Centuria_Super_200%2C_135_film.jpg',
  558: 'https://live.staticflickr.com/2739/4364333798_356f10c7d1_b.jpg',

  // ── Harman ──────────────────────────────────────────────────
  600: 'https://filmphotographystore.com/cdn/shop/products/IlfordDirectPos_4x5_2000x2000_grande.jpg',
  601: 'https://www.bhphotovideo.com/images/fb/harman_photo_1182094_harmon_phoenix_color_negative_1790521.jpg',

  // ── Lomography ──────────────────────────────────────────────
  700: 'https://static.super-shop.com/478931-lomography-film-xpro-chrome-100-36-3-pack.jpg',
  702: 'https://cdn.shop.lomography.com/media/catalog/product/cache/d48ee8365af56e523deee8f9725f2022/c/n/cn-400-135-film_box_front_23022022_1.jpg',
  704: 'https://cdn.shop.lomography.com/media/catalog/product/cache/d48ee8365af56e523deee8f9725f2022/l/a/ladygrey-bw-120-film_box_and_film_front__1.jpg',
  706: 'https://mpex.com/pub/media/catalog/product/cache/2264c9e38777ed202d5c3170a063a3cf/l/o/lom1007.jpg',
  707: 'https://www.bhphotovideo.com/images/fb/lomography_f136tq1_lomochrome_turquoise_film_35mm_1857069.jpg',
  709: 'https://cdn.shop.lomography.com/media/catalog/product/cache/d48ee8365af56e523deee8f9725f2022/b/e/berlin-kino_front-with-canister_1.jpg',

  // ── Shanghai ────────────────────────────────────────────────
  750: 'https://www.bhphotovideo.com/images/images500x500/shanghai_film_gp3_100_120_gp3_100_iso_120_1537524509_1434722.jpg',

  // ── Polaroid ────────────────────────────────────────────────
  906: 'https://www.bhphotovideo.com/images/fb/polaroid_6004_sx_70_color_film_1555710.jpg',
  908: 'https://retrospekt.com/cdn/shop/files/MB-1088_1.jpg',
  928: 'https://www.bhphotovideo.com/images/fb/polaroid_originals_004926_color_i_type_instant_film_1475310.jpg',

  // ── Impossible Project ──────────────────────────────────────
  920: 'https://www.digitalcamerawarehouse.com.au/assets/full/33223.jpg',
  922: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Impossible_Project_PX_680_film_pack_for_Polaroid_600-type_cameras.jpg',
};
