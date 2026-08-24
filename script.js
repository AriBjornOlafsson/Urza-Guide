
(function(){
  var CARD_IMG = {
    "academy-ruins": "assets/cards/academy-ruins.jpg",
    "adaptive-automaton": "assets/cards/adaptive-automaton.jpg",
    "agna-qela": "assets/cards/agna-qela.jpg",
    "archmages-charm": "assets/cards/archmages-charm.jpg",
    "basalt-monolith": "assets/cards/basalt-monolith.jpg",
    "clever-impersonator": "assets/cards/clever-impersonator.jpg",
    "command-beacon": "assets/cards/command-beacon.jpg",
    "counterspell": "assets/cards/counterspell.jpg",
    "cyclonic-rift": "assets/cards/cyclonic-rift.jpg",
    "darksteel-citadel": "assets/cards/darksteel-citadel.jpg",
    "darksteel-forge": "assets/cards/darksteel-forge.jpg",
    "disallow": "assets/cards/disallow.jpg",
    "displacer-kitten": "assets/cards/displacer-kitten.jpg",
    "drafna-founder-of-lat-nam": "assets/cards/drafna-founder-of-lat-nam.jpg",
    "dramatic-reversal": "assets/cards/dramatic-reversal.jpg",
    "etherium-sculptor": "assets/cards/etherium-sculptor.jpg",
    "etherium-spinner": "assets/cards/etherium-spinner.jpg",
    "fabricate": "assets/cards/fabricate.jpg",
    "filigree-attendant": "assets/cards/filigree-attendant.jpg",
    "forensic-gadgeteer": "assets/cards/forensic-gadgeteer.jpg",
    "foundry-inspector": "assets/cards/foundry-inspector.jpg",
    "imprisoned-in-the-moon": "assets/cards/imprisoned-in-the-moon.jpg",
    "inventors-fair": "assets/cards/inventors-fair.jpg",
    "isochron-scepter": "assets/cards/isochron-scepter.jpg",
    "karn-scion-of-urza": "assets/cards/karn-scion-of-urza.jpg",
    "kasminas-transmutation": "assets/cards/kasminas-transmutation.jpg",
    "liberator-urzas-battlethopter": "assets/cards/liberator-urzas-battlethopter.jpg",
    "mana-drain": "assets/cards/mana-drain.jpg",
    "manifold-key": "assets/cards/manifold-key.jpg",
    "master-transmuter": "assets/cards/master-transmuter.jpg",
    "master-of-etherium": "assets/cards/master-of-etherium.jpg",
    "mechanized-production": "assets/cards/mechanized-production.jpg",
    "metalworker": "assets/cards/metalworker.jpg",
    "minamo-school-at-waters-edge": "assets/cards/minamo-school-at-waters-edge.jpg",
    "mishras-workshop": "assets/cards/mishras-workshop.jpg",
    "mox-opal": "assets/cards/mox-opal.jpg",
    "mycosynth-golem": "assets/cards/mycosynth-golem.jpg",
    "mycosynth-lattice": "assets/cards/mycosynth-lattice.jpg",
    "mystic-sanctuary": "assets/cards/mystic-sanctuary.jpg",
    "mystical-tutor": "assets/cards/mystical-tutor.jpg",
    "opal-palace": "assets/cards/opal-palace.jpg",
    "padeem-consul-of-innovation": "assets/cards/padeem-consul-of-innovation.jpg",
    "phyrexian-metamorph": "assets/cards/phyrexian-metamorph.jpg",
    "planar-nexus": "assets/cards/planar-nexus.jpg",
    "power-depot": "assets/cards/power-depot.jpg",
    "propaganda": "assets/cards/propaganda.jpg",
    "refute": "assets/cards/refute.jpg",
    "relms-sketching": "assets/cards/relms-sketching.jpg",
    "rite-of-replication": "assets/cards/rite-of-replication.jpg",
    "sai-master-thopterist": "assets/cards/sai-master-thopterist.jpg",
    "sanctum-of-eternity": "assets/cards/sanctum-of-eternity.jpg",
    "sapphire-medallion": "assets/cards/sapphire-medallion.jpg",
    "scene-of-the-crime": "assets/cards/scene-of-the-crime.jpg",
    "scrawling-crawler": "assets/cards/scrawling-crawler.jpg",
    "seat-of-the-synod": "assets/cards/seat-of-the-synod.jpg",
    "simulacrum-synthesizer": "assets/cards/simulacrum-synthesizer.jpg",
    "snow-covered-island": "assets/cards/snow-covered-island.jpg",
    "sol-ring": "assets/cards/sol-ring.jpg",
    "solve-the-equation": "assets/cards/solve-the-equation.jpg",
    "spectral-searchlight": "assets/cards/spectral-searchlight.jpg",
    "spellseeker": "assets/cards/spellseeker.jpg",
    "spellskite": "assets/cards/spellskite.jpg",
    "steel-overseer": "assets/cards/steel-overseer.jpg",
    "study-hall": "assets/cards/study-hall.jpg",
    "tezzeret-cruel-captain": "assets/cards/tezzeret-cruel-captain.jpg",
    "the-one-ring": "assets/cards/the-one-ring.jpg",
    "the-reality-chip": "assets/cards/the-reality-chip.jpg",
    "thopter-spy-network": "assets/cards/thopter-spy-network.jpg",
    "treasure-vault": "assets/cards/treasure-vault.jpg",
    "unctus-grand-metatect": "assets/cards/unctus-grand-metatect.jpg",
    "unwinding-clock": "assets/cards/unwinding-clock.jpg",
    "urzas-mine": "assets/cards/urzas-mine.jpg",
    "urzas-power-plant": "assets/cards/urzas-power-plant.jpg",
    "urzas-tower": "assets/cards/urzas-tower.jpg",
    "urzas-workshop": "assets/cards/urzas-workshop.jpg",
    "urza-lord-high-artificer": "assets/cards/urza-lord-high-artificer.jpg",
    "windfall": "assets/cards/windfall.jpg",
    "witness-protection": "assets/cards/witness-protection.jpg",
    "worldwalker-helm": "assets/cards/worldwalker-helm.jpg",
    "ultron-artificial-malevolence": "assets/cards/ultron-artificial-malevolence.jpg",
    "kappa-cannoneer": "assets/cards/kappa-cannoneer.jpg",
    "mindslaver": "assets/cards/mindslaver.jpg",
    "metallurgic-summonings": "assets/cards/metallurgic-summonings.jpg",
    "karn-the-great-creator": "assets/cards/karn-the-great-creator.jpg",
    "walking-ballista": "assets/cards/walking-ballista.jpg",
    "karn-liberated": "assets/cards/karn-liberated.jpg",
    "token-thopter": "assets/cards/token-thopter.jpg",
    "token-construct": "assets/cards/token-construct.jpg",
    "token-clue": "assets/cards/token-clue.jpg",
    "token-copy": "assets/cards/token-copy.jpg",
    "token-tezzeret-cruel-captain-emblem": "assets/cards/token-tezzeret-cruel-captain-emblem.jpg",
    "token-map": "assets/cards/token-map.jpg",
    "token-treasure": "assets/cards/token-treasure.jpg",
    "urzas-saga": "assets/cards/urzas-saga.jpg",
    "rhystic-study": "assets/cards/rhystic-study.jpg",
    "senseis-divining-top": "assets/cards/senseis-divining-top.jpg",
    "whir-of-invention": "assets/cards/whir-of-invention.jpg",
    "rings-of-brighthearth": "assets/cards/rings-of-brighthearth.jpg",
    "mystic-remora": "assets/cards/mystic-remora.jpg",
    "mana-vault": "assets/cards/mana-vault.jpg",
    "pongify": "assets/cards/pongify.jpg",
    "rapid-hybridization": "assets/cards/rapid-hybridization.jpg",
    "myr-turbine": "assets/cards/myr-turbine.jpg",
    "karns-bastion": "assets/cards/karns-bastion.jpg",
    "winter-orb": "assets/cards/winter-orb.jpg",
    "smokestack": "assets/cards/smokestack.jpg",
    "static-orb": "assets/cards/static-orb.jpg",
    "stasis": "assets/cards/stasis.jpg",
    "ugin-the-spirit-dragon": "assets/cards/ugin-the-spirit-dragon.jpg"
  };

  var pop = document.getElementById('cardpop');
  var elImg = document.getElementById('cp-img');
  var activeLink = null;

  function showCard(link){
    var key = link.getAttribute('data-card');
    var src = CARD_IMG[key];
    if(!src) return;
    elImg.src = src;
    elImg.alt = link.textContent;
    resetTilt();

    var margin = 10;
    var popW = Math.min(320, window.innerWidth - margin * 2);
    var popH = popW * (680 / 480);
    pop.style.width = popW + 'px';

    var rect = link.getBoundingClientRect();
    var left = rect.left + rect.width/2 - popW/2;
    left = Math.max(margin, Math.min(left, window.innerWidth - popW - margin));
    var top = rect.top - popH - 14;
    if(top < margin){ top = rect.bottom + 10; }
    if(top + popH > window.innerHeight - margin){
      top = Math.max(margin, (window.innerHeight - popH) / 2);
    }
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    pop.classList.add('show');
    link.classList.add('open');
    activeLink = link;
  }
  function hideCard(){
    pop.classList.remove('show');
    if(activeLink) activeLink.classList.remove('open');
    activeLink = null;
  }

  var cardFace = pop.querySelector('.cardpop-face');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MAX_TILT = 14;
  function tiltFromEvent(e, container){
    if(reduceMotion) return;
    var rect = container.getBoundingClientRect();
    var px = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    var py = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    var rotY = (px - 0.5) * MAX_TILT;
    var rotX = (0.5 - py) * MAX_TILT;
    cardFace.style.transform = 'perspective(650px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg)';
    cardFace.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
    cardFace.style.setProperty('--my', (py * 100).toFixed(1) + '%');
    pop.style.setProperty('--shadow-x', (-rotY * 1.1).toFixed(1) + 'px');
    pop.style.setProperty('--shadow-y', (20 - rotX * 1.1).toFixed(1) + 'px');
  }
  function resetTilt(){
    cardFace.style.transform = 'perspective(650px) rotateX(0deg) rotateY(0deg)';
    pop.style.setProperty('--shadow-x', '0px');
    pop.style.setProperty('--shadow-y', '20px');
  }

  var supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('.cardlink').forEach(function(link){
    var widenTo = link.closest('.chip') || link.parentElement;
    // Only widen the hover/click target to a shared ancestor when that
    // ancestor holds exactly one card mention. Otherwise, several cardlinks
    // sharing a paragraph/li would each bind their own listeners onto the
    // SAME container, and every hover would fire all of them — leaving only
    // the last-registered link's card ever actually shown, no matter which
    // one you pointed at.
    var container = (widenTo.querySelectorAll('.cardlink').length === 1) ? widenTo : link;
    link.setAttribute('tabindex','0');
    if(supportsHover){
      // Focus/blur (keyboard nav) only wired up here too — on touch devices,
      // tapping a tabindex="0" element fires a focus event before the tap's
      // synthetic click, and showCard()'s DOM mutation there makes the browser
      // cancel that pending click outright, silently breaking tap-to-open.
      container.addEventListener('mouseenter', function(){ showCard(link); });
      container.addEventListener('mousemove', function(e){ tiltFromEvent(e, container); });
      container.addEventListener('mouseleave', function(){ resetTilt(); hideCard(); });
      link.addEventListener('focus', function(){ showCard(link); });
      link.addEventListener('blur', function(){ resetTilt(); hideCard(); });
    }
    container.addEventListener('click', function(e){
      e.preventDefault();
      if(activeLink === link){ hideCard(); } else { showCard(link); }
    });
  });

  if(!supportsHover){
    // Touch: click to open (above), click to close (here) — no drag/tilt
    // gesture at all. cardFace only becomes tappable while the popup is
    // actually shown (see the .cardpop.show rule in CSS) so dragging
    // anywhere, including across the popped-up card, always just scrolls
    // the page natively rather than being captured for a tilt effect.
    cardFace.addEventListener('click', function(){ hideCard(); });
  }

  // tap outside the open preview (touch devices have no mouseleave) closes it
  document.addEventListener('click', function(e){
    if(!activeLink) return;
    var activeWidenTo = activeLink.closest('.chip') || activeLink.parentElement;
    var activeContainer = (activeWidenTo.querySelectorAll('.cardlink').length === 1) ? activeWidenTo : activeLink;
    if(!activeContainer.contains(e.target)){ hideCard(); }
  });

  // ambient sparks rising from the banner (recolored ember effect)
  (function spawnSparks(){
    if(reduceMotion) return;
    var container = document.querySelector('.sparks');
    if(!container) return;
    var count = 18;
    for(var i = 0; i < count; i++){
      var e = document.createElement('span');
      e.className = 'spark';
      e.style.left = (Math.random() * 100) + '%';
      e.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
      e.style.animationDuration = (5 + Math.random() * 5) + 's';
      e.style.animationDelay = (Math.random() * 8) + 's';
      container.appendChild(e);
    }
  })();
  document.addEventListener('scroll', hideCard, true);

  // tabs
  var tabs = document.querySelectorAll('.tab');
  var sections = document.querySelectorAll('.section');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.classList.remove('active'); });
      sections.forEach(function(s){ s.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('sec-' + tab.getAttribute('data-tab')).classList.add('active');
      hideCard();
      window.scrollTo({top:0, behavior:'smooth'});
    });
    tab.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); tab.click(); }
    });
  });

  if('serviceWorker' in navigator){
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('sw.js');
    });
  }
})();
