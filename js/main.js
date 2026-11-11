/* TestOps Engineering — site behavior */
(function () {
  'use strict';

  var menu = document.getElementById('mobileMenu');
  var hamburger = document.querySelector('.nav-hamburger');

  /* Mobile menu */
  if (menu && hamburger) {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-controls', 'mobileMenu');

    var setOpen = function (open) {
      menu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    };

    hamburger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('open'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('click', function (e) {
      if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* Highlight the nav link for the section in view */
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = Array.prototype.map.call(navLinks, function (link) {
    return document.getElementById(link.getAttribute('href').slice(1));
  }).filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(function (section) { observer.observe(section); });

    /* The last section may be too short to reach the top of the viewport */
    window.addEventListener('scroll', function () {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        var last = navLinks[navLinks.length - 1];
        navLinks.forEach(function (link) { link.classList.toggle('active', link === last); });
      }
    }, { passive: true });
  }
})();
