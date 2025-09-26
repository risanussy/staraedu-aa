// src/assets/js/custom.js
export function initCustomScripts() {
  document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const header = document.getElementById('appHeader');

    /* ===== WA config ===== */
    const WA_PHONE = '628111333870';
    function openWhatsApp(message) {
      const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }

    /* ===== MENU ===== */
    const menu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMenu');
    const bottomToggle = document.getElementById('bottomToggle');

    function setBottomLabel(open) {
      if (!bottomToggle) return;
      bottomToggle.textContent = open ? '✕ Close' : '☰ Menu';
      bottomToggle.classList.toggle('close-state', open);
    }
    function openMenu() {
      if (!menu) return;
      menu.classList.remove('d-none');
      menu.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      setBottomLabel(true);
    }
    function closeMenu() {
      if (!menu) return;
      menu.classList.add('d-none');
      menu.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      setBottomLabel(false);
    }

    bottomToggle?.addEventListener('click', () =>
      menu.classList.contains('d-none') ? openMenu() : closeMenu()
    );
    closeBtn?.addEventListener('click', closeMenu);
    menu?.addEventListener('click', (e) => {
      if (e.target === menu) closeMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.classList.contains('d-none')) closeMenu();
    });

    /* ===== Hide-on-scroll header ===== */
    let lastY = window.scrollY,
      hidden = false,
      ticking = false;
    function onScroll() {
      const y = window.scrollY,
        down = y > lastY,
        delta = Math.abs(y - lastY);
      if (delta > 6) {
        if (down && y > 90 && !hidden) {
          header.classList.add('header-hidden');
          hidden = true;
        } else if (!down && hidden) {
          header.classList.remove('header-hidden');
          hidden = false;
        }
        lastY = y;
      }
    }
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            onScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    /* ===== Page Transition (optional, kalau masih dipakai) ===== */
    const pageTrans = document.getElementById('pageTrans');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function runPageTransition(color, onMidpoint) {
      if (!pageTrans) {
        onMidpoint?.();
        return;
      }

      if (color === 'white') pageTrans.classList.add('is-white');
      else pageTrans.classList.remove('is-white');

      if (prefersReduced) {
        onMidpoint?.();
        return;
      }

      pageTrans.classList.remove('uncover');
      void pageTrans.offsetHeight;
      pageTrans.classList.add('cover');

      const coverDuration =
        parseFloat(getComputedStyle(pageTrans).transitionDuration) * 1000 || 420;

      setTimeout(() => {
        onMidpoint?.();
        pageTrans.classList.remove('cover');
        void pageTrans.offsetHeight;
        pageTrans.classList.add('uncover');

        const cleanup = () => {
          pageTrans.classList.remove('uncover');
          pageTrans.removeEventListener('transitionend', cleanup);
        };
        pageTrans.addEventListener('transitionend', cleanup, { once: true });
      }, coverDuration);
    }

    /* ===== Popup video ===== */
    const popup = document.getElementById('popup');
    const popupVideo = document.getElementById('popupVideo');
    document
      .getElementById('heroThumb')
      ?.addEventListener('click', () => popup?.classList.remove('d-none'));
    popup?.addEventListener('click', () => {
      popupVideo?.pause();
      popup.classList.add('d-none');
    });

    /* ===== FAQ toggles ===== */
    document.querySelectorAll('.faq .item .q').forEach((q) => {
      q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
    });

    /* ===== All buttons with data-wa ===== */
    document.querySelectorAll('[data-wa]').forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        const label = btn.getAttribute('data-wa-label') || btn.textContent.trim();
        openWhatsApp(`Hello AD ASTRA! I’d like to ${label}.`);
      });
    });

    /* ===== Form submit -> WhatsApp message ===== */
    const form = document.getElementById('waEnrollForm');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const parentName = (data.get('parent_name') || '').toString().trim();
      const childName = (data.get('child_name') || '').toString().trim();
      const childAge = (data.get('child_age') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const inquiry = (data.get('inquiry') || '').toString().trim();

      const msg = [
        'AD ASTRA – Enroll / Trial',
        `Parent's Name: ${parentName}`,
        `Child's Name: ${childName}`,
        `Child's Age: ${childAge}`,
        `Phone Number: ${phone}`,
        inquiry ? `Inquiry: ${inquiry}` : null,
      ]
        .filter(Boolean)
        .join('\n');

      openWhatsApp(msg);
    });
  });
}
