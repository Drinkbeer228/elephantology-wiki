/**
 * Elephantology Wiki — Interactive Features
 * GTA San Andreas inspired: hover sounds + Konami Code easter egg
 */

(function() {
  'use strict';

  // Retro sounds via Web Audio API (no external files)
  const SOUNDS = {
    click: function() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 1200;
        osc.type = 'square';
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
      } catch(e) {}
    }
  };

  // Hover sound on nav links and cards
  function initHoverSounds() {
    const selectors = '.md-nav__link, .md-tabs__link, .md-typeset .grid.cards > ul > li';
    document.querySelectorAll(selectors).forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        SOUNDS.click();
      });
    });
  }

  // Konami Code easter egg (↑↑↓↓←→←→BA)
  function initKonamiCode() {
    var buffer = [];
    var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

    document.addEventListener('keydown', function(e) {
      buffer.push(e.keyCode);
      buffer = buffer.slice(-10);

      if (buffer.length === 10 && buffer.every(function(v, i) { return v === konami[i]; })) {
        // Play victory melody
        try {
          var ctx = new (window.AudioContext || window.webkitAudioContext)();
          var notes = [523, 659, 784, 1047, 784, 659, 523, 659, 784, 1047];
          var time = ctx.currentTime;
          notes.forEach(function(freq, i) {
            var osc = ctx.createOscillator();
            var gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = freq;
            osc.type = 'square';
            gain.gain.setValueAtTime(0.06, time + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, time + i * 0.08 + 0.1);
            osc.start(time + i * 0.08);
            osc.stop(time + i * 0.08 + 0.1);
          });
        } catch(ex) {}

        // Flash screen effect
        var flash = document.createElement('div');
        flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.15);z-index:99999;pointer-events:none;transition:opacity 0.5s';
        document.body.appendChild(flash);
        setTimeout(function() { flash.style.opacity = '0'; }, 100);
        setTimeout(function() { flash.remove(); }, 600);

        buffer = [];
      }
    });
  }

  // Init
  function init() {
    initHoverSounds();
    initKonamiCode();

    // Re-init after dynamic navigation (MkDocs instant loading)
    document.addEventListener('DOMContentLoaded', function() {
      initHoverSounds();
    });

    var observer = new MutationObserver(function() {
      setTimeout(initHoverSounds, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();