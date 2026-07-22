/* ============================================================
   BURGER MENU — hamburger navigation for mobile
   ============================================================ */
(function () {
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');

  if (!burger || !nav) return;

  // Toggle menu open/close
  burger.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    burger.classList.toggle('is-active');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Close menu when any nav link is clicked (smooth scroll on mobile)
  nav.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menú');
    });
  });

  // Close menu when clicking outside of header
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('is-open');
      burger.classList.remove('is-active');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
})();
