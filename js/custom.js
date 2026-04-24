// Rotate accent color on each page load from a curated warm palette
(function() {
  var palettes = [
    { accent: '#C4532A', name: 'terracotta' },
    { accent: '#D95F3B', name: 'coral'      },
    { accent: '#C47A1E', name: 'amber'      },
    { accent: '#B5485A', name: 'rose'       },
    { accent: '#6B7A2A', name: 'olive'      }
  ];
  var pick = palettes[Math.floor(Math.random() * palettes.length)];
  var root = document.documentElement;
  root.style.setProperty('--accent', pick.accent);
  root.setAttribute('data-palette', pick.name);
})();

jQuery(document).ready(function() {
  "use strict";

  // Animated stat counters — trigger when scrolled into view
  var counters = document.querySelectorAll('.stat-number');

  if (counters.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-to'), 10);
          var duration = 1800;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = target;
            }
          }

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(counter) {
      observer.observe(counter);
    });
  }

});
