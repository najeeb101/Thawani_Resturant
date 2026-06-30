const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileNav() {
  const isOpen = document.body.classList.toggle('nav-open');
  mobileMenu.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileNav() {
  document.body.classList.remove('nav-open');
  mobileMenu.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', toggleMobileNav);
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });
}

// Reveal elements once they scroll into view, then stop observing them
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Language switching
const langSwitch = document.getElementById('langSwitch');
const i18nEls = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  i18nEls.forEach((el) => {
    const entry = TRANSLATIONS[el.dataset.i18n];
    if (entry) el.innerHTML = entry[lang];
  });

  localStorage.setItem('thawani-lang', lang);
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

if (langSwitch && typeof TRANSLATIONS !== 'undefined') {
  langSwitch.addEventListener('click', () => {
    const nextLang = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  });

  const savedLang = localStorage.getItem('thawani-lang');
  if (savedLang === 'ar' || savedLang === 'en') {
    setLanguage(savedLang);
  }
}
