const CACHE_NAME = "tkd-cache-v1";
const urlsToCache = [
  "./",
  "index.html",
  "manifest.json",
  "styles.css",
  "script.js",
  // ajoute ici toutes tes images utilisées
  "images/position/ap_seugui.PNG",
  "images/position/ap_kubi.PNG",
  "images/position/dwitt_kubi.PNG",
  "images/position/owen_seugui.PNG",
  "images/position/orun_seugui.PNG",
  "images/position/dwitt_koa_seugui.PNG",
  "images/position/naranhi_seugui.PNG",
  "images/position/bom_seugui.PNG",
  "images/position/moa_seugui.PNG",
  "images/position/joutchoum_seugui.PNG",

  "images/blocage/arae_hechyo_makki.PNG",
  "images/blocage/arae_makki.PNG",
  "images/blocage/batangson_montong_an_makki.PNG",
  "images/blocage/batangson_montong_makki.PNG",
  "images/blocage/batangson_noulo_makki.PNG",
  "images/blocage/dou_bon_kawi_makki.PNG",
  "images/blocage/eulgoul_bakkat_makki.PNG",
  "images/blocage/eulgoul_makki.PNG",
  "images/blocage/eutkeuleu_arae_makki.PNG",
  "images/blocage/han_sonnal_eulgoul_pitreu_makki.PNG",
  "images/blocage/han_sonnal_montong_bakkat_makki.PNG",
  "images/blocage/han_sonnal_montong_yop_makki.PNG",
  "images/blocage/kawi_makki.PNG",
  "images/blocage/keudeuro_arae_makki.PNG",
  "images/blocage/keudeuro_batangson_montong_an_makki.PNG",
  "images/blocage/keudeuro_montong_makki.PNG",
  "images/blocage/montong_an_makki.PNG",
  "images/blocage/montong_bakkat_makki.PNG",
  "images/blocage/montong_bakkat_palmok_hechyo_makki.PNG",
  "images/blocage/montong_makki.PNG",
  "images/blocage/owen_santeul_makki.PNG",
  "images/blocage/orun_santeul_makki.PNG",
  "images/blocage/sonnal_arae_makki.PNG",
  "images/blocage/sonnal_montong_makki.PNG",

  "images/main/dang_kyeu_teuk_jileugui.PNG",
  "images/main/deung_joumok_eulgoul_ap_tchigui.PNG",
  "images/main/dou_joumok_jetcho_jileugui.PNG",
  "images/main/eulgoul_bandae_jileugui.PNG",
  "images/main/eulgoul_baro_jileugui.PNG",
  "images/main/han_sonnal_jebipoum_mok_tchigui.PNG",
  "images/main/jebipoum_mok_tchigui.PNG",
  "images/main/keudeuro_deung_joumok_eulgoul_ap_tchigui.PNG",
  "images/main/me_joumok_nelyo_tchigui.PNG",
  "images/main/montong_bandae_jileugui.PNG",
  "images/main/montong_baro_jileugui.PNG",
  "images/main/montong_dou_bon_jileugui.PNG",
  "images/main/oren_joumok_eulgoul_bakkat_tchigui.png",
  "images/main/oren_mourop_tchigui.png",
  "images/main/owen_mourop_tchigui.PNG",
  "images/main/palkoup_eulgoul_dolyo_tchigui.PNG",
  "images/main/palkoup_pyo_jeuk_tchigui.PNG",
  "images/main/pyon_sonn_keut_seo_jileugui.PNG",
  "images/main/wen_joumok_eulgoul_bakkat_tchigui.PNG",
  "images/main/yop_jireugi.PNG",

  "images/pied/an_nelyo_tchagui.PNG",
  "images/pied/ap_robalyoligui.PNG",
  "images/pied/ap_tchagui.PNG",
  "images/pied/bakkat_nelyo_tchagui.PNG",
  "images/pied/bandal_tchagui.PNG",
  "images/pied/dollyo_tchagui.PNG",
  "images/pied/oren_pyo_jeuk_tchagui.PNG",
  "images/pied/wen_pyo_jeuk_tchagui.png",
  "images/pied/yop_tchagui.PNG",

  "images/autres/bo_joumok.PNG",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
