const menuTabs = document.getElementById('menuTabs');
const menuGrid = document.getElementById('menuGrid');

let activeCategory = MENU_DATA[0].id;

function getLang() {
  return document.documentElement.lang === 'ar' ? 'ar' : 'en';
}

function formatPrice(price, lang) {
  return lang === 'ar' ? `${price} ر.ق` : `QR ${price}`;
}

function renderTabs(lang) {
  menuTabs.innerHTML = MENU_DATA.map((category) => `
    <button class="menu-tab${category.id === activeCategory ? ' active' : ''}" data-category="${category.id}">
      ${lang === 'ar' ? category.nameAr : category.nameEn}
    </button>
  `).join('');

  menuTabs.querySelectorAll('.menu-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.dataset.category === activeCategory) return;
      activeCategory = tab.dataset.category;
      render();
    });
  });
}

function renderGrid(lang) {
  const category = MENU_DATA.find((c) => c.id === activeCategory);
  menuGrid.innerHTML = category.items.map((item) => {
    const name = lang === 'ar' ? item.nameAr : item.nameEn;
    const desc = lang === 'ar' ? item.descAr : item.descEn;
    const descMarkup = desc ? `<p class="menu-item-desc">${desc}</p>` : '';

    return `
      <div class="menu-item">
        <div class="menu-item-main">
          <div class="menu-item-info">
            <span class="menu-item-name">${name}</span>
          </div>
          ${descMarkup}
        </div>
        <span class="menu-item-price" dir="ltr">${formatPrice(item.price, lang)}</span>
      </div>
    `;
  }).join('');
}

function render() {
  const lang = getLang();
  renderTabs(lang);

  menuGrid.classList.add('fade-out');
  setTimeout(() => {
    renderGrid(lang);
    menuGrid.classList.remove('fade-out');
  }, 250);
}

if (menuTabs && menuGrid && typeof MENU_DATA !== 'undefined') {
  renderTabs(getLang());
  renderGrid(getLang());

  document.addEventListener('languagechange', render);
}
