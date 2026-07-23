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

  // ============================================================
  // Reader Progress Tracking (Gamification)
  // ============================================================
  var STORAGE_KEY = 'elephantology_progress';

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch(e) {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // Динамический подсчёт статей из nav
  function getTotalPages() {
    var links = document.querySelectorAll('.md-nav__link[href]');
    if (links.length > 0) {
      return links.length;
    }
    // fallback на случай если nav ещё не загружен
    return 35;
  }

  // Mark current page as read
  function markPageRead() {
    var progress = getProgress();
    var path = window.location.pathname;
    var pageName = document.title.replace(' — Энциклопедия «Слонология»', '').replace(' - Энциклопедия «Слонология»', '');

    if (!progress.pages) progress.pages = {};

    progress.pages[path] = {
      title: pageName || path,
      timestamp: Date.now(),
      visits: (progress.pages[path] ? progress.pages[path].visits || 0 : 0) + 1
    };

    if (!progress.firstVisit) {
      progress.firstVisit = Date.now();
    }

    saveProgress(progress);
    updateProgressUI();
  }

  // Count stats
  function getStats() {
    var progress = getProgress();
    var pages = progress.pages || {};
    var readCount = Object.keys(pages).length;
    var totalPages = getTotalPages();

    var firstVisit = progress.firstVisit || Date.now();
    var timeSpent = Date.now() - firstVisit;
    var hours = Math.floor(timeSpent / 3600000);
    var minutes = Math.floor((timeSpent % 3600000) / 60000);

    return {
      read: readCount,
      total: totalPages,
      percent: Math.min(Math.round((readCount / totalPages) * 100), 100),
      time: (hours > 0 ? hours + 'ч ' : '') + minutes + 'мин',
      visits: Object.keys(pages).reduce(function(sum, key) {
        return sum + (pages[key].visits || 1);
      }, 0)
    };
  }

  // Update UI — включая wanted stars
  function updateProgressUI() {
    var stats = getStats();

    // Стандартная полоска прогресса
    var readBar = document.querySelector('.sa-stat-fill--reader-read');
    if (readBar) {
      readBar.style.width = stats.percent + '%';
      var readValue = document.querySelector('.sa-stat-value--reader-read');
      if (readValue) readValue.textContent = stats.read + '/' + stats.total;
    }

    // Wanted stars (5 звёзд, каждая = 20%)
    var starsContainer = document.querySelector('.sa-wanted-stars');
    if (starsContainer) {
      var stars = starsContainer.querySelectorAll('.star');
      var starsToActivate = Math.round((stats.percent / 100) * 5);
      stars.forEach(function(star, index) {
        star.classList.toggle('active', index < starsToActivate);
      });
    }

    var timeValue = document.querySelector('.sa-stat-value--reader-time');
    if (timeValue) timeValue.textContent = stats.time;

    var visitsValue = document.querySelector('.sa-stat-value--reader-visits');
    if (visitsValue) visitsValue.textContent = stats.visits;
  }

  // ============================================================
  // Init — с очисткой интервала при SPA-навигации
  // ============================================================
  var progressInterval = null;

  function initProgress() {
    if (progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(updateProgressUI, 30000);
  }

  function initAll() {
    initHoverSounds();
    initKonamiCode();
    initLegendActive();
    markPageRead();
    initProgress();

    // Re-init after dynamic navigation (MkDocs instant loading)
    document.addEventListener('DOMContentLoaded', function() {
      initLegendActive();
      markPageRead();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();