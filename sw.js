var CACHE_VERSION = 'v1';
var CACHE_NAME = 'urza-guide-' + CACHE_VERSION;

// Regenerate this list any time cards/fonts/icons change — see
// .scratch/glossary/card-art-workflow.md for the maintenance note.
var PRECACHE_URLS = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "assets/og-image.jpg",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512-maskable.png",
  "assets/icons/icon-512.png",
  "assets/fonts/fonts.css",
  "assets/fonts/8vIJ7ww63mVu7gt7-GT7LEc.woff2",
  "assets/fonts/8vIJ7ww63mVu7gt79mT7.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9-U6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL95U6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL99U6g.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9wU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9xU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9yU6ingQ.woff2",
  "assets/fonts/SlGFmQSNjdsmc35JDF1K5GRwUjcdlttVFm-rI7e8QL9zU6ingQ.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR1SDk.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR2SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR4SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR5SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR6SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GR7SDktYw.woff2",
  "assets/fonts/SlGUmQSNjdsmc35JDF1K5GRxSDktYw.woff2",
  "assets/fonts/daaHSScvJGqLYhG8nNt8KPPswUAPniZoadlESTE.woff2",
  "assets/fonts/daaHSScvJGqLYhG8nNt8KPPswUAPniZoadlKSTG7lQ.woff2",
  "assets/cards/academy-ruins.jpg",
  "assets/cards/adaptive-automaton.jpg",
  "assets/cards/agna-qela.jpg",
  "assets/cards/archmages-charm.jpg",
  "assets/cards/basalt-monolith.jpg",
  "assets/cards/clever-impersonator.jpg",
  "assets/cards/command-beacon.jpg",
  "assets/cards/counterspell.jpg",
  "assets/cards/cyclonic-rift.jpg",
  "assets/cards/darksteel-citadel.jpg",
  "assets/cards/darksteel-forge.jpg",
  "assets/cards/disallow.jpg",
  "assets/cards/displacer-kitten.jpg",
  "assets/cards/drafna-founder-of-lat-nam.jpg",
  "assets/cards/dramatic-reversal.jpg",
  "assets/cards/etherium-sculptor.jpg",
  "assets/cards/etherium-spinner.jpg",
  "assets/cards/fabricate.jpg",
  "assets/cards/filigree-attendant.jpg",
  "assets/cards/forensic-gadgeteer.jpg",
  "assets/cards/foundry-inspector.jpg",
  "assets/cards/imprisoned-in-the-moon.jpg",
  "assets/cards/inventors-fair.jpg",
  "assets/cards/isochron-scepter.jpg",
  "assets/cards/karn-scion-of-urza.jpg",
  "assets/cards/kasminas-transmutation.jpg",
  "assets/cards/liberator-urzas-battlethopter.jpg",
  "assets/cards/mana-drain.jpg",
  "assets/cards/manifold-key.jpg",
  "assets/cards/master-transmuter.jpg",
  "assets/cards/master-of-etherium.jpg",
  "assets/cards/mechanized-production.jpg",
  "assets/cards/metalworker.jpg",
  "assets/cards/minamo-school-at-waters-edge.jpg",
  "assets/cards/mishras-workshop.jpg",
  "assets/cards/mox-opal.jpg",
  "assets/cards/mycosynth-golem.jpg",
  "assets/cards/mycosynth-lattice.jpg",
  "assets/cards/mystic-sanctuary.jpg",
  "assets/cards/mystical-tutor.jpg",
  "assets/cards/opal-palace.jpg",
  "assets/cards/padeem-consul-of-innovation.jpg",
  "assets/cards/phyrexian-metamorph.jpg",
  "assets/cards/planar-nexus.jpg",
  "assets/cards/power-depot.jpg",
  "assets/cards/propaganda.jpg",
  "assets/cards/refute.jpg",
  "assets/cards/relms-sketching.jpg",
  "assets/cards/rite-of-replication.jpg",
  "assets/cards/sai-master-thopterist.jpg",
  "assets/cards/sanctum-of-eternity.jpg",
  "assets/cards/sapphire-medallion.jpg",
  "assets/cards/scene-of-the-crime.jpg",
  "assets/cards/scrawling-crawler.jpg",
  "assets/cards/seat-of-the-synod.jpg",
  "assets/cards/simulacrum-synthesizer.jpg",
  "assets/cards/snow-covered-island.jpg",
  "assets/cards/sol-ring.jpg",
  "assets/cards/solve-the-equation.jpg",
  "assets/cards/spectral-searchlight.jpg",
  "assets/cards/spellseeker.jpg",
  "assets/cards/spellskite.jpg",
  "assets/cards/steel-overseer.jpg",
  "assets/cards/study-hall.jpg",
  "assets/cards/tezzeret-cruel-captain.jpg",
  "assets/cards/the-one-ring.jpg",
  "assets/cards/the-reality-chip.jpg",
  "assets/cards/thopter-spy-network.jpg",
  "assets/cards/treasure-vault.jpg",
  "assets/cards/unctus-grand-metatect.jpg",
  "assets/cards/unwinding-clock.jpg",
  "assets/cards/urzas-mine.jpg",
  "assets/cards/urzas-power-plant.jpg",
  "assets/cards/urzas-tower.jpg",
  "assets/cards/urzas-workshop.jpg",
  "assets/cards/urza-lord-high-artificer.jpg",
  "assets/cards/windfall.jpg",
  "assets/cards/witness-protection.jpg",
  "assets/cards/worldwalker-helm.jpg",
  "assets/cards/ultron-artificial-malevolence.jpg",
  "assets/cards/kappa-cannoneer.jpg",
  "assets/cards/mindslaver.jpg",
  "assets/cards/metallurgic-summonings.jpg",
  "assets/cards/karn-the-great-creator.jpg",
  "assets/cards/walking-ballista.jpg",
  "assets/cards/karn-liberated.jpg",
  "assets/cards/token-thopter.jpg",
  "assets/cards/token-construct.jpg",
  "assets/cards/token-clue.jpg",
  "assets/cards/token-copy.jpg",
  "assets/cards/token-tezzeret-cruel-captain-emblem.jpg",
  "assets/cards/token-map.jpg",
  "assets/cards/token-treasure.jpg",
  "assets/cards/urzas-saga.jpg",
  "assets/cards/rhystic-study.jpg",
  "assets/cards/senseis-divining-top.jpg",
  "assets/cards/whir-of-invention.jpg",
  "assets/cards/rings-of-brighthearth.jpg",
  "assets/cards/mystic-remora.jpg",
  "assets/cards/mana-vault.jpg",
  "assets/cards/pongify.jpg",
  "assets/cards/rapid-hybridization.jpg",
  "assets/cards/myr-turbine.jpg",
  "assets/cards/karns-bastion.jpg",
  "assets/cards/winter-orb.jpg",
  "assets/cards/smokestack.jpg",
  "assets/cards/static-orb.jpg",
  "assets/cards/stasis.jpg",
  "assets/cards/ugin-the-spirit-dragon.jpg"];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(names.filter(function(n){ return n !== CACHE_NAME; }).map(function(n){ return caches.delete(n); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// App shell (HTML/CSS/JS) — network-first, so a fresh deploy shows up right
// away when online, but still works offline from whatever was last cached.
// Everything else (card art, fonts, icons) — cache-first, since those files
// never change once downloaded, so there's no reason to re-fetch them.
var SHELL_PATHS = ['/', '/index.html', '/style.css', '/script.js'];

function isShellRequest(url){
  return SHELL_PATHS.some(function(p){ return url.pathname === p || url.pathname.endsWith(p); });
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  if(isShellRequest(url)){
    event.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
        return res;
      }).catch(function(){ return caches.match(req); })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function(cached){
      if(cached) return cached;
      return fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
        return res;
      });
    })
  );
});
