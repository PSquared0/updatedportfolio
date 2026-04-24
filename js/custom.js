// Rotate accent color + hero copy on each page load
(function() {
  var palettes = [
    {
      accent:   '#C4532A',
      name:     'terracotta',
      headline: 'I turn complex products into clear experiences.',
      subtitle: 'Product communicator, problem-solver, and the person who makes sure teams and customers actually understand each other.'
    },
    {
      accent:   '#D95F3B',
      name:     'coral',
      headline: 'I build the systems that keep teams moving.',
      subtitle: 'Operations strategist and project lead with a designer’s eye and a PM’s mindset.'
    },
    {
      accent:   '#C47A1E',
      name:     'amber',
      headline: 'I close the gap between what products do and what people understand.',
      subtitle: 'Technical communicator and documentation builder — the person who makes sure nothing gets lost in translation.'
    },
    {
      accent:   '#B5485A',
      name:     'rose',
      headline: 'I make sure nothing falls through the cracks.',
      subtitle: 'Cross-functional collaborator who bridges design, product, and operations from kickoff to launch.'
    },
    {
      accent:   '#6B7A2A',
      name:     'olive',
      headline: 'I translate data into decisions and products into stories.',
      subtitle: 'Data-informed, design-trained, and relentlessly focused on outcomes over outputs.'
    }
  ];

  var pick = palettes[Math.floor(Math.random() * palettes.length)];

  // Apply CSS variable immediately (before paint)
  document.documentElement.style.setProperty('--accent', pick.accent);
  document.documentElement.setAttribute('data-palette', pick.name);

  // Swap hero copy once DOM is ready — only on pages that have the markers
  document.addEventListener('DOMContentLoaded', function() {
    var h1 = document.querySelector('[data-rotating-headline]');
    var h2 = document.querySelector('[data-rotating-subtitle]');
    if (h1) h1.textContent = pick.headline;
    if (h2) h2.textContent = pick.subtitle;
  });
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
