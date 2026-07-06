/* ──────────────────────────────────────────────────
   Adobe Creative Cloud Landing — main.js
────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

/* ──────────────────────────────
     BEFORE / AFTER — 드래그 슬라이더
  ────────────────────────────── */
  document.querySelectorAll('.ba-slider-wrap').forEach(function (wrap) {
    const beforeLayer = wrap.querySelector('.ba-layer-before');
    const handle      = wrap.querySelector('.ba-handle');
    let dragging = false;

    function setPosition(pct) {
      pct = Math.max(5, Math.min(95, pct));
      beforeLayer.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + '%';
    }

    function getPercent(e) {
      const rect = wrap.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      return ((clientX - rect.left) / rect.width) * 100;
    }

    setPosition(50); // 초기값

    wrap.addEventListener('mousedown',  function (e) { dragging = true; setPosition(getPercent(e)); });
    wrap.addEventListener('touchstart', function (e) { dragging = true; setPosition(getPercent(e)); }, { passive: true });

    window.addEventListener('mousemove',  function (e) { if (dragging) setPosition(getPercent(e)); });
    window.addEventListener('touchmove',  function (e) { if (dragging) setPosition(getPercent(e)); }, { passive: true });

    window.addEventListener('mouseup',   function () { dragging = false; });
    window.addEventListener('touchend',  function () { dragging = false; });
  });

  /* ──────────────────────────────
     SMOOTH SCROLL — hero CTA
  ────────────────────────────── */
  const heroCta = document.getElementById('heroCta');
  if (heroCta) {
    heroCta.addEventListener('click', function () {
      const target = document.querySelector('.plans-section');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ──────────────────────────────
     FAQ — accordion toggle
  ────────────────────────────── */
  function toggleFaq(btn) {
    const answer  = btn.nextElementSibling;
    const isOpen  = answer.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-a').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.faq-q').forEach(el => el.classList.remove('open'));

    // open clicked item if it was closed
    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('open');
    }
  }

  // Attach to every question button
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () { toggleFaq(this); });
  });

  /* ──────────────────────────────
     FAQ — category filter
  ────────────────────────────── */
  document.querySelectorAll('.faq-cat').forEach(function (catBtn) {
    catBtn.addEventListener('click', function () {
      const cat = this.dataset.cat;

      // Update active state
      document.querySelectorAll('.faq-cat').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Show / hide items
      document.querySelectorAll('.faq-item').forEach(function (item) {
        if (cat === 'all' || item.dataset.cat === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Close any open answers after switching category
      document.querySelectorAll('.faq-a').forEach(el => el.classList.remove('open'));
      document.querySelectorAll('.faq-q').forEach(el => el.classList.remove('open'));
    });
  });

  /* ──────────────────────────────
     NAV — hide/show on scroll
  ────────────────────────────── */
  let lastScroll = 0;
  const navEl = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    const current = window.pageYOffset;

    if (current > lastScroll && current > 80) {
      // Scrolling down
      navEl.style.transform = 'translateY(-100%)';
      navEl.style.transition = 'transform 0.3s ease';
    } else {
      // Scrolling up
      navEl.style.transform = 'translateY(0)';
    }

    lastScroll = current <= 0 ? 0 : current;
  });

});
