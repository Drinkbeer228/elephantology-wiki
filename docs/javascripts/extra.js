/**
 * Elephantology Wiki — Interactive Features (Reworx v2)
 * GTA San Andreas inspired: hover sounds + Konami Code + reader progress
 */

(function() {
  'use strict';

  // ============================================================
  // Audio — один контекст на всё приложение
  // ============================================================
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SOUNDS = {
    click: function() {
      try {
        const ctx = getAudioContext();
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
    },
    konami: function() {
      try {
        const ctx = getAudioContext();
        const notes = [523, 659, 784, 1047, 784, 659, 523, 659, 784, 1047];
        const time = ctx.currentTime;
        notes.forEach(function(freq, i) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
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
    }
  };

  // ============================================================
  // Debounce hover-звука (200ms между звуками)
  // ============================================================
  let lastSoundTime = 0;
  const SOUND_COOLDOWN = 200;

  function playHoverSound() {
    const now = Date.now();
    if (now - lastSoundTime < SOUND_COOLDOWN) return;
    lastSoundTime = now;
    SOUNDS.click();
  }

  // ============================================================
  // Делегирование событий — один обработчик на document
  // ============================================================
  function initHoverSounds() {
    // Используем делегирование вместо навешивания на каждый элемент
    document.addEventListener('mouseenter', function(e) {
      const target = e.target.closest('.md-nav__link, .md-tabs__link, .md-typeset .grid.cards > ul > li, .sa-legend-item');
      if (target) playHoverSound();
    }, true); // capture phase для mouseenter
  }

  // ============================================================
  // Highlight active legend item based on current page
  // ============================================================
  function initLegendActive() {
    var path = window.location.pathname;
    var items = document.querySelectorAll('.sa-legend-item');

    items.forEach(function(item) {
      item.classList.remove('active');
      var href = item.getAttribute('href');
      if (href) {
        // Точное сравнение: путь должен начинаться с href + '/'
        var cleanHref = href.replace(/\/$/, '');
        var isActive = path === '/' + cleanHref || path.startsWith('/' + cleanHref + '/');
        if (isActive) {
          item.classList.add('active');
        }
      }
    });
  }

  // ============================================================
  // Konami Code easter egg (↑↑↓↓←→←→BA)
  // ============================================================
  function initKonamiCode() {
    var buffer = [];
    var konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', function(e) {
      // Используем e.key вместо deprecated e.keyCode
      buffer.push(e.key);
      buffer = buffer.slice(-10);

      if (buffer.length === 10 && buffer.every(function(v, i) { return v === konami[i]; })) {
        // Play victory melody
        SOUNDS.konami();

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

  function initAll() {
    initHoverSounds();
    initKonamiCode();
    initLegendActive();

    // Re-init after dynamic navigation (MkDocs instant loading)
    document.addEventListener('DOMContentLoaded', function() {
      initLegendActive();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();