/**
 * Elephantology Wiki — Interactive Features
 * GTA San Andreas inspired: hover sounds + Konami Code + reader progress
 */

(function() {
  'use strict';

  // ============================================================
  // Retro sounds via Web Audio API (no external files)
  // ============================================================
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

  // ============================================================
  // Hover sound on nav links and cards
  // ============================================================
  function initHoverSounds() {
    const selectors = '.md-nav__link, .md-tabs__link, .md-typeset .grid.cards > ul > li';
    document.querySelectorAll(selectors).forEach(function(el) {
      el.addEventListener('mouseenter', function() {
        SOUNDS.click();
      });
    });
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
      if (href && path.includes(href.replace(/\/$/, ''))) {
        item.classList.add('active');
      }
    });
  }

  // ============================================================
  // Konami Code easter egg (↑↑↓↓←→←→BA)
  // ============================================================
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
    var totalPages = 35;

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

  // Update UI
  function updateProgressUI() {
    var stats = getStats();

    var readBar = document.querySelector('.sa-stat-fill--reader-read');
    if (readBar) {
      readBar.style.width = stats.percent + '%';
      var readValue = document.querySelector('.sa-stat-value--reader-read');
      if (readValue) readValue.textContent = stats.read + '/' + stats.total;
    }

    var timeValue = document.querySelector('.sa-stat-value--reader-time');
    if (timeValue) timeValue.textContent = stats.time;

    var visitsValue = document.querySelector('.sa-stat-value--reader-visits');
    if (visitsValue) visitsValue.textContent = stats.visits;
  }

  // ============================================================
  // Init
  // ============================================================
  function initAll() {
    initHoverSounds();
    initKonamiCode();
    initLegendActive();
    markPageRead();

    // Re-init after dynamic navigation
    document.addEventListener('DOMContentLoaded', function() {
      initHoverSounds();
      initLegendActive();
      markPageRead();
    });

    var observer = new MutationObserver(function() {
      setTimeout(function() {
        initHoverSounds();
        initLegendActive();
      }, 100);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Update time tracking every 30 seconds
    setInterval(updateProgressUI, 30000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

})();