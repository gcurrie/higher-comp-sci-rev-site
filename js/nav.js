/* Shared navigation injection */
(function () {
  const ROOT = (function () {
    const depth = document.documentElement.dataset.depth || '0';
    return '../'.repeat(parseInt(depth, 10));
  })();

  const LINKS = [
    { href: '', label: 'Home' },
    { href: 'sdd/', label: 'SDD' },
    { href: 'cs/', label: 'Computer Systems' },
    { href: 'ddd/', label: 'DDD' },
    { href: 'wdd/', label: 'WDD' },
    { href: 'resources/', label: 'Resources' },
  ];

  function currentActive(href) {
    const full = ROOT + href;
    const path = window.location.pathname;
    if (href === '') {
      return path.endsWith('/index.html') && document.documentElement.dataset.depth === '0';
    }
    return path.includes('/' + href.replace('/', ''));
  }

  const bannerHTML = `
<div class="construction-banner" role="status">
  🚧 This site is currently under construction — not all content is final.
</div>`;

  const navHTML = `
<header class="site-header">
  <div class="header-inner">
    <a href="${ROOT}index.html" class="site-logo">
      <div class="logo-icon">HC</div>
      <div class="logo-text">
        <span class="logo-title">Higher Computing Science</span>
        <span class="logo-sub">Revision &amp; Course Materials</span>
      </div>
    </a>
    <div id="search-wrap" class="search-wrap">
      <div class="search-input-wrap">
        <svg class="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" stroke-width="1.8"/>
          <path d="M13 13l3.5 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <input id="search-input" class="search-input" type="search" placeholder="Search topics &amp; terms…" autocomplete="off" spellcheck="false" aria-label="Search topics and terms" />
      </div>
      <div id="search-dropdown" class="search-dropdown" role="listbox"></div>
    </div>
    <nav class="site-nav" id="site-nav">
      ${LINKS.map(l => `<a href="${ROOT}${l.href}index.html"${currentActive(l.href) ? ' class="active"' : ''}>${l.label}</a>`).join('')}
    </nav>
    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
  </div>
</header>`;

  const footerHTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="brand-name">Higher Computing Science</div>
      <p>Revision &amp; Course Materials</p>
    </div>
    <div class="footer-links">
      <a href="${ROOT}index.html">Home</a>
      <a href="${ROOT}sdd/index.html">Software Design &amp; Development</a>
      <a href="${ROOT}cs/index.html">Computer Systems</a>
      <a href="${ROOT}ddd/index.html">Database Design &amp; Development</a>
      <a href="${ROOT}wdd/index.html">Web Design &amp; Development</a>
      <a href="${ROOT}resources/index.html">Additional Resources</a>
    </div>
  </div>
  <div class="footer-bottom">
    &copy; ${new Date().getFullYear()} Higher Computing Science Revision Site &mdash; For educational use
  </div>
</footer>`;

  function init() {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Mobile nav toggle
    document.getElementById('nav-toggle').addEventListener('click', function () {
      document.getElementById('site-nav').classList.toggle('open');
    });

    // Dynamically load search.js
    const s = document.createElement('script');
    s.src = ROOT + 'js/search.js';
    document.head.appendChild(s);
  }

  // Some embedded iframes (e.g. trinket.io) auto-focus their editor once they
  // finish loading, which makes the browser scroll the page down to reveal
  // them. Until the user has actively interacted with the page, snap back to
  // the top if an iframe steals focus. Deep links (#anchor) are respected.
  if (!location.hash) {
    let interacted = false;
    ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (evt) {
      window.addEventListener(evt, function () { interacted = true; }, { passive: true, once: true });
    });
    window.addEventListener('focusin', function (e) {
      if (!interacted && e.target && e.target.tagName === 'IFRAME') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
  }

  // Wait until the full body is parsed so the footer is appended at the very
  // end of the page (otherwise it lands directly after this script tag).
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
