/* ═══════════════════════════════════════════════════
   map.js — SVG district hover & init
   ═══════════════════════════════════════════════════ */

function initSvgHovers() {
  document.querySelectorAll('.dist-node').forEach(node => {
    const bg = node.querySelector('.dist-label-bg');

    node.addEventListener('mouseenter', () => {
      if (bg) bg.setAttribute('opacity', '1');
    }, { passive: true });

    node.addEventListener('mouseleave', () => {
      if (bg) bg.setAttribute('opacity', '0');
    }, { passive: true });

    /* Touch support */
    node.addEventListener('touchstart', () => {
      if (bg) bg.setAttribute('opacity', '1');
    }, { passive: true });
  });
}
