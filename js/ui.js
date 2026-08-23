(() => {
  "use strict";

  const VY = window.VY;
  const { $, $$, money, escapeHtml, icon } = VY;
  const t = (key, vars) => VY.i18n.t(key, vars);

  const SPRITE = `
  <svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5 21 21"/></symbol>
    <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></symbol>
    <symbol id="i-bag" viewBox="0 0 24 24"><path d="M6.2 8h11.6l1.1 12.1a1.8 1.8 0 0 1-1.8 1.9H6.9a1.8 1.8 0 0 1-1.8-1.9L6.2 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></symbol>
    <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 21c.6-3.8 3.7-6 7.5-6s6.9 2.2 7.5 6"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
    <symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="m13 5 7 7-7 7"/></symbol>
    <symbol id="i-arrow-left" viewBox="0 0 24 24"><path d="M20 12H4"/><path d="m11 5-7 7 7 7"/></symbol>
    <symbol id="i-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
    <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="i-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
    <symbol id="i-trash" viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></symbol>
    <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"/></symbol>
    <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M1 4v6h6"/><path d="M3.5 15a9 9 0 1 0 2-9.4L1 10"/></symbol>
    <symbol id="i-sparkle" viewBox="0 0 24 24"><path d="m12 3 2.1 5.7L20 11l-5.9 2.3L12 19l-2.1-5.7L4 11l5.9-2.3L12 3Z"/></symbol>
    <symbol id="i-eye" viewBox="0 0 24 24"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.8"/></symbol>
    <symbol id="i-filter" viewBox="0 0 24 24"><path d="M22 4H2l8 9v6l4 2v-8l8-9Z"/></symbol>
    <symbol id="i-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="0.6"/></symbol>
    <symbol id="i-telegram" viewBox="0 0 24 24"><path d="m21.5 3.4-18 7.2c-.8.3-.8 1.5.1 1.7l4.6 1.5 1.7 5.3c.3.8 1.3 1 1.9.3l2.4-2.9 4.7 3.5c.7.5 1.7.1 1.9-.7l3.2-14.4c.2-1-.7-1.9-1.6-1.5Z"/><path d="m8.2 13.8 9.6-7.6-7.4 8.4-.2 3.4"/></symbol>
    <symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M21 11.7A8.7 8.7 0 0 1 8.3 19L3 20.5l1.6-5.2A8.7 8.7 0 1 1 21 11.7Z"/><path d="M8.7 9c.3 2.6 2.7 5.2 5.4 5.6l1.4-1.3 2 1.2c-.4 1.3-1.5 2-2.9 1.7-3.2-.6-6-3.3-6.5-6.5-.3-1.4.5-2.4 1.7-2.8l1.1 2L8.7 9Z"/></symbol>
    <symbol id="i-youtube" viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10.2 9.3 5 2.7-5 2.7V9.3Z"/></symbol>
    <symbol id="i-tiktok" viewBox="0 0 24 24"><path d="M14.5 4v6.3A4.7 4.7 0 1 0 17 14.5V9.9c1 .8 2.2 1.2 3.5 1.3V8.3a4.9 4.9 0 0 1-3.3-1.6A4.9 4.9 0 0 1 16 4h-1.5Z"/></symbol>
  </svg>`;

  let lastFocused = null;

  const lockScroll = (lock) => {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.classList.toggle("is-locked", lock);
    document.body.style.paddingRight = lock && scrollbar > 0 ? `${scrollbar}px` : "";
  };

  const trapFocus = (container, event) => {
    const focusables = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', container).filter(
      (el) => el.offsetParent !== null
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const socialHref = (type) => {
    if (type === "youtube") return VY.socialLink("youtube");
    if (type === "tiktok") return VY.socialLink("tiktok");
    return VY.socialLink(type);
  };

  const socialBtnHtml = (type) => {
    const href = socialHref(type);
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    if (!href) {
      return `<span class="social-btn is-disabled" role="link" aria-disabled="true" tabindex="-1" title="${escapeHtml(t("cont.igNote"))}">${icon(type)}<span class="visually-hidden">${label}</span></span>`;
    }
    return `<a class="social-btn" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label} vyron">${icon(type)}</a>`;
  };

  const segHtml = (kind, items, activeValue) => `
    <div class="seg" role="group" aria-label="${escapeHtml(kind === "lang" ? t("a11y.lang") : t("a11y.currency"))}">
      ${items
        .map(
          (item) =>
            `<button type="button" class="seg-btn${item.value === activeValue ? " is-active" : ""}" data-action="${kind === "lang" ? "lang-set" : "cur-set"}" data-value="${item.value}">${item.label}</button>`
        )
        .join("")}
    </div>`;

  const headerHtml = () => `
    <div class="topbar">
      <span>${icon("sparkle")} ${escapeHtml(t("topbar.offer"))}</span>
    </div>
    <div class="container header-inner">
      <button type="button" class="icon-btn burger" data-action="open-menu" aria-label="${escapeHtml(t("a11y.menu"))}">${icon("menu")}</button>
      <a href="index.html" class="brand-logo" aria-label="${escapeHtml(t("a11y.homeLink"))}">
        <img src="${VY.BRAND.logo}" alt="${escapeHtml(VY.BRAND.name)}">
      </a>
      <nav class="main-nav" aria-label="Main">
        <a href="catalog.html" data-nav="catalog.html">${escapeHtml(t("nav.catalog"))}</a>
        <a href="index.html#collections" data-nav="index.html#collections">${escapeHtml(t("nav.collections"))}</a>
        <a href="about.html" data-nav="about.html">${escapeHtml(t("nav.about"))}</a>
        <a href="faq.html" data-nav="faq.html">${escapeHtml(t("nav.faq"))}</a>
      </nav>
      <div class="header-actions">
        <button type="button" class="icon-btn" data-action="open-search" aria-label="${escapeHtml(t("a11y.search"))}">${icon("search")}</button>
        <a href="favorites.html" class="icon-btn wish-link" aria-label="${escapeHtml(t("a11y.wishlist"))}">
          ${icon("heart")}
          <span class="count-bubble is-hidden" data-wish-count>0</span>
        </a>
        <button type="button" class="icon-btn" data-action="open-cart" aria-label="${escapeHtml(t("a11y.cart"))}">
          ${icon("bag")}
          <span class="count-bubble is-hidden" data-cart-count>0</span>
        </button>
        ${segHtml("lang", [{ value: "ru", label: "RU" }, { value: "en", label: "EN" }, { value: "az", label: "AZ" }], VY.i18n.lang)}
        ${segHtml("cur", VY.currency.list().map((code) => ({ value: code, label: code })), VY.currency.code)}
      </div>
    </div>`;

  const footerHtml = () => `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="${VY.BRAND.logo}" alt="${escapeHtml(VY.BRAND.name)}">
          <p>${escapeHtml(t("footer.tagline"))}</p>
          <div class="footer-socials">
            ${socialBtnHtml("instagram")}
            ${socialBtnHtml("telegram")}
            ${socialBtnHtml("whatsapp")}
            ${socialBtnHtml("youtube")}
            ${socialBtnHtml("tiktok")}
          </div>
        </div>
        <div class="footer-col">
          <h4>${escapeHtml(t("footer.shop"))}</h4>
          <ul>
            <li><a href="catalog.html">${escapeHtml(t("nav.shopAll"))}</a></li>
            <li><a href="catalog.html?category=tshirts">${escapeHtml(t("cat.tshirts"))}</a></li>
            <li><a href="catalog.html?category=sweatshirts">${escapeHtml(t("cat.sweatshirts"))}</a></li>
            <li><a href="index.html#collections">${escapeHtml(t("nav.collections"))}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>${escapeHtml(t("footer.info"))}</h4>
          <ul>
            <li><a href="about.html">${escapeHtml(t("nav.about"))}</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="shipping.html">${escapeHtml(t("footer.shipLink"))}</a></li>
            <li><a href="shipping.html#returns">${escapeHtml(t("footer.returnsLink"))}</a></li>
            <li><a href="contacts.html">${escapeHtml(t("footer.contactsLink"))}</a></li>
          </ul>
        </div>
        <div class="footer-col footer-follow">
          <h4>${escapeHtml(t("footer.follow"))}</h4>
          <div class="follow-list">
            <a href="${VY.CONTACTS.telegram}" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="${VY.CONTACTS.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="${VY.CONTACTS.youtube}" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="${VY.CONTACTS.tiktok}" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${interpolateText(t("footer.rights"), { y: new Date().getFullYear() })}</span>
        <nav aria-label="${escapeHtml(t("footer.docsNav"))}">
          <button type="button" class="footer-bottom-link" data-action="legal" data-doc="privacy">${escapeHtml(t("footer.privacy"))}</button>
          <button type="button" class="footer-bottom-link" data-action="legal" data-doc="terms">${escapeHtml(t("footer.terms"))}</button>
        </nav>
      </div>
    </div>`;

  const interpolateText = (str, vars) =>
    String(str).replace(/\{(\w+)\}/g, (_, key) => (vars[key] != null ? vars[key] : `{${key}}`));

  const overlayRootHtml = () => `
    <aside id="drawer-minicart" class="drawer" role="dialog" aria-modal="true" aria-label="${escapeHtml(t("cart.miniTitle"))}">
      <div class="drawer-header">
        <p class="drawer-title">${escapeHtml(t("cart.miniTitle"))}<small id="minicart-count">0</small></p>
        <button type="button" class="icon-btn" data-action="close-drawer" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
      </div>
      <div class="drawer-body" id="minicart-body"></div>
      <div class="drawer-footer" id="minicart-footer" hidden>
        <div class="drawer-subtotal"><span>${escapeHtml(t("cart.subtotal"))}</span><b id="minicart-subtotal">0</b></div>
        <a href="checkout.html" class="btn btn-primary btn-block">${escapeHtml(t("cart.checkout"))}</a>
        <a href="cart.html" class="btn btn-ghost btn-block ghost-gap">${escapeHtml(t("cart.viewCart"))}</a>
      </div>
    </aside>
    <div class="scrim" id="scrim"></div>
    <div class="modal-root" id="modal-root"></div>
    <section class="search-overlay" id="search-overlay" role="dialog" aria-modal="true" aria-label="${escapeHtml(t("a11y.search"))}">
      <div class="search-shell">
        <div class="search-bar">
          ${icon("search")}
          <input type="search" id="search-input" placeholder="${escapeHtml(t("search.ph"))}" autocomplete="off" aria-label="${escapeHtml(t("a11y.search"))}">
          <button type="button" class="icon-btn search-close" data-action="close-search" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
        </div>
        <div class="search-results" id="search-results" aria-live="polite"></div>
      </div>
    </section>
    <div class="toast-stack" id="toast-stack" aria-live="polite"></div>`;

  const mobileMenuHtml = () => `
    <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="${escapeHtml(t("a11y.menu"))}">
      <button type="button" class="icon-btn mm-close" data-action="close-menu" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
      <nav class="mm-nav" aria-label="Mobile">
        <a href="catalog.html">${escapeHtml(t("nav.catalog"))}<small>${VY.PRODUCTS.length}</small></a>
        <a href="index.html#collections">${escapeHtml(t("nav.collections"))}<small>3</small></a>
        <a href="about.html">${escapeHtml(t("nav.about"))}</a>
        <a href="faq.html">FAQ</a>
        <a href="favorites.html">${escapeHtml(t("a11y.wishlist"))}<small id="mm-wish">0</small></a>
      </nav>
      <div class="mm-settings">
        <span class="mm-settings-label">${escapeHtml(t("a11y.lang"))}</span>
        ${segHtml("lang", [{ value: "ru", label: "RU" }, { value: "en", label: "EN" }, { value: "az", label: "AZ" }], VY.i18n.lang)}
        <span class="mm-settings-label">${escapeHtml(t("a11y.currency"))}</span>
        ${segHtml("cur", VY.currency.list().map((code) => ({ value: code, label: code })), VY.currency.code)}
      </div>
      <div class="mm-footer">
        <div class="mm-socials">
          ${socialBtnHtml("instagram")}
          ${socialBtnHtml("telegram")}
          ${socialBtnHtml("whatsapp")}
          ${socialBtnHtml("youtube")}
          ${socialBtnHtml("tiktok")}
        </div>
        <p class="mm-note">${escapeHtml(t("cont.hours"))}</p>
      </div>
    </div>`;

  const minPriceOf = (product) => Math.min(...product.sizes.map((size) => size.price));

  const offerBadgeHtml = () =>
    `<div class="badge-offer"><b>-20%</b><span>${escapeHtml(t("sec.offerEyebrow"))}</span></div>`;

  const productCardHtml = (product) => {
    const name = VY.productsApi.productName(product);
    const catLabel = t(`prod.${product.type}`);
    const minPrice = minPriceOf(product);
    const original = VY.originalOf(minPrice);
    const chainMain = VY.imageChain(product, 0);
    const chainAlt = product.images.length > 1 ? VY.imageChain(product, 1) : chainMain;
    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-media">
          ${VY.mediaHtml({ chain: chainAlt, alt: `${name} - 2`, className: "img-alt", fallbackLabel: VY.BRAND.name })}
          ${VY.mediaHtml({ chain: chainMain, alt: name, className: "img-main", fallbackLabel: VY.BRAND.name })}
          ${offerBadgeHtml()}
          <button type="button" class="wish-btn" data-action="wish-toggle" data-wish-id="${product.id}" aria-label="${escapeHtml(t("card.wishAdd"))}" aria-pressed="false">${icon("heart")}</button>
          <button type="button" class="quick-view" data-action="quick-view" data-id="${product.id}">${icon("eye")}<span>${escapeHtml(t("card.qv"))}</span></button>
        </div>
        <div class="product-info">
          <span class="product-cat">${escapeHtml(catLabel)}</span>
          <h3 class="product-name"><a href="product.html?id=${product.id}">${escapeHtml(name)}</a></h3>
          <div class="product-price-row">
            <s class="price-old">${money(original)}</s>
            <span class="price">${escapeHtml(interpolateText(t("card.from"), { p: money(minPrice) }))}</span>
          </div>
          <button type="button" class="card-add" data-action="card-add" data-id="${product.id}">${icon("plus")}<span>${escapeHtml(t("card.add"))}</span></button>
        </div>
      </article>`;
  };

  const openLayer = (el, options) => {
    options = options || {};
    lastFocused = document.activeElement;
    el.classList.add("is-open");
    $("#scrim").classList.add("is-open");
    lockScroll(true);
    el._trapHandler = (event) => {
      if (event.key === "Escape") {
        closeLayers();
        return;
      }
      if (event.key === "Tab") trapFocus(el, event);
    };
    document.addEventListener("keydown", el._trapHandler);
    const target = $(options.focus || '[data-action="close-drawer"]', el) || el.querySelector("input, button");
    if (target) setTimeout(() => target.focus(), 80);
  };

  const closeLayer = (el) => {
    if (!el || !el.classList.contains("is-open")) return;
    el.classList.remove("is-open");
    if (el._trapHandler) document.removeEventListener("keydown", el._trapHandler);
  };

  const syncScrim = () => {
    const openLeft = $$(".drawer.is-open, .filters.is-open").length > 0;
    $("#scrim").classList.toggle("is-open", openLeft);
    const modalRoot = $("#modal-root");
    if (
      !openLeft &&
      modalRoot &&
      !modalRoot.classList.contains("is-open") &&
      !$("#search-overlay").classList.contains("is-open") &&
      !$("#mobile-menu").classList.contains("is-open")
    ) {
      lockScroll(false);
      if (lastFocused && lastFocused.isConnected) lastFocused.focus();
    }
  };

  const closeLayers = () => {
    $$(".drawer.is-open").forEach(closeLayer);
    $$(".filters.is-open").forEach(closeLayer);
    closeMobileMenu();
    closeSearch();
    closeModal();
    syncScrim();
  };

  const openCart = () => {
    VY.cart.renderMiniCart();
    openLayer($("#drawer-minicart"), { focus: '#drawer-minicart [data-action="close-drawer"]' });
  };

  const toast = (message, options) => {
    options = options || {};
    const stack = $("#toast-stack");
    if (!stack) return;
    const el = document.createElement("div");
    el.className = `toast${options.type === "error" ? " toast-error" : ""}`;
    el.innerHTML = `${icon(options.type === "error" ? "close" : "check")}<span>${message}</span>`;
    stack.appendChild(el);
    setTimeout(() => {
      el.classList.add("is-leaving");
      setTimeout(() => el.remove(), 400);
    }, 2400);
  };

  const mobileMenu = () => $("#mobile-menu");

  const openMobileMenu = () => {
    const mm = mobileMenu();
    $("#mm-wish").textContent = VY.wishlist.count();
    lastFocused = document.activeElement;
    mm.classList.add("is-open");
    lockScroll(true);
    mm._trapHandler = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        return;
      }
      if (event.key === "Tab") trapFocus(mm, event);
    };
    document.addEventListener("keydown", mm._trapHandler);
  };

  const closeMobileMenu = () => {
    const mm = mobileMenu();
    if (!mm || !mm.classList.contains("is-open")) return;
    mm.classList.remove("is-open");
    if (mm._trapHandler) document.removeEventListener("keydown", mm._trapHandler);
  };

  const LEGAL_DOCS = () => ({
    privacy: { title: t("legal.privacyTitle"), body: t("legal.privacyBody") },
    terms: { title: t("legal.termsTitle"), body: t("legal.termsBody") }
  });

  const modalApi = { current: null };

  const openModal = ({ title, body, wide }) => {
    const root = $("#modal-root");
    root.innerHTML = `
      <div class="modal${wide ? " modal-wide" : ""}" role="dialog" aria-modal="true">
        <div class="modal-head">
          <p class="drawer-title">${title}</p>
          <button type="button" class="icon-btn" data-action="close-modal" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
        </div>
        <div class="drawer-body">${body}</div>
      </div>`;
    modalApi.current = root.firstElementChild;
    root.classList.add("is-open");
    lockScroll(true);
    modalApi.current._trapHandler = (event) => {
      if (event.key === "Escape") {
        closeModal();
        syncScrim();
        return;
      }
      if (event.key === "Tab") trapFocus(modalApi.current, event);
    };
    document.addEventListener("keydown", modalApi.current._trapHandler);
    setTimeout(() => $('[data-action="close-modal"]', root).focus(), 60);
  };

  const closeModal = () => {
    const root = $("#modal-root");
    if (!root || !root.classList.contains("is-open")) return;
    if (modalApi.current) {
      if (modalApi.current._trapHandler) document.removeEventListener("keydown", modalApi.current._trapHandler);
      modalApi.current = null;
    }
    root.classList.remove("is-open");
    root.innerHTML = "";
  };

  const qvState = { id: null, size: null };

  const quickViewHtml = (product) => {
    const name = VY.productsApi.productName(product);
    const img = VY.imageChain(product, 0);
    return `
      <div class="qv-layout" id="qv-layout" data-id="${product.id}">
        <div class="qv-media">${VY.mediaHtml({ chain: img, alt: name, fallbackLabel: VY.BRAND.name })}${offerBadgeHtml()}</div>
        <div class="qv-info">
          <span class="product-cat">${escapeHtml(t(`prod.${product.type}`))}</span>
          <h3 class="qv-name"><a href="product.html?id=${product.id}">${escapeHtml(name)}</a></h3>
          <p class="qv-tagline">${escapeHtml(VY.productsApi.loc(product.id, product.tagline))}</p>
          <div class="qv-price">
            <s class="price-old" id="qv-old"></s>
            <b id="qv-price"></b>
          </div>
          <p class="qv-sizes-label">${escapeHtml(t("qv.selectSize"))}<small>${escapeHtml(t("qv.note"))}</small></p>
          <div class="qv-sizes">
            ${product.sizes
              .map(
                (size) =>
                  `<button type="button" class="size-box" data-qv-size="${escapeHtml(size.code)}" data-price="${size.price}"><b>${escapeHtml(size.code)}</b><i>${money(size.price)}</i></button>`
              )
              .join("")}
          </div>
          <button type="button" class="btn btn-primary btn-block" id="qv-add" data-action="qv-add" disabled>${escapeHtml(t("qv.add"))}</button>
          <a href="product.html?id=${product.id}" class="btn btn-ghost btn-block ghost-gap">${escapeHtml(t("prod.details"))}</a>
        </div>
      </div>`;
  };

  const quickView = (id) => {
    const product = VY.productsApi.getById(id);
    if (!product) return;
    qvState.id = id;
    qvState.size = null;
    openModal({ title: t("qv.title"), body: quickViewHtml(product), wide: true });
    updateQvPrice(product);
  };

  const updateQvPrice = (product) => {
    const priceEl = $("#qv-price");
    const oldEl = $("#qv-old");
    const addBtn = $("#qv-add");
    if (!priceEl) return;
    if (!qvState.size) {
      const min = minPriceOf(product);
      priceEl.textContent = interpolateText(t("card.from"), { p: money(min) });
      oldEl.textContent = "";
      addBtn.disabled = true;
      return;
    }
    const price = VY.cart.sizePrice(product, qvState.size);
    priceEl.textContent = money(price);
    oldEl.textContent = money(VY.originalOf(price));
    addBtn.disabled = false;
  };

  const searchOverlay = () => $("#search-overlay");

  const renderDefaultSearch = () => {
    const root = $("#search-results");
    if (!root) return;
    const list = t("search.popularList") || [];
    root.innerHTML = `
      <div class="search-default">
        <p class="search-label">${escapeHtml(t("search.popular"))}</p>
        <div class="search-tags">
          ${list.map((q) => `<button type="button" class="chip" data-search-q="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join("")}
        </div>
      </div>`;
  };

  const renderSearchResults = (query) => {
    const root = $("#search-results");
    if (!root) return;
    if (!query.trim()) {
      renderDefaultSearch();
      return;
    }
    const found = VY.productsApi.searchProducts(query).slice(0, 6);
    if (!found.length) {
      root.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">${icon("search")}</span>
          <h3>${escapeHtml(t("list.emptyTitle"))}</h3>
          <p>${escapeHtml(t("search.nothing"))}</p>
        </div>`;
      return;
    }
    root.innerHTML = found
      .map((product) => {
        const name = VY.productsApi.productName(product);
        const minPrice = minPriceOf(product);
        return `
          <a class="search-hit" href="product.html?id=${product.id}">
            <span class="search-hit-thumb">${VY.mediaHtml({ chain: VY.imageChain(product, 0), alt: name, fallbackLabel: VY.BRAND.name })}</span>
            <span class="search-hit-info">
              <b>${escapeHtml(name)}</b>
              <small>${escapeHtml(t(`prod.${product.type}`))}</small>
            </span>
            <span class="search-hit-price">${escapeHtml(interpolateText(t("card.from"), { p: money(minPrice) }))}</span>
          </a>`;
      })
      .join("");
  };

  const openSearch = () => {
    const overlay = searchOverlay();
    lastFocused = document.activeElement;
    overlay.classList.add("is-open");
    lockScroll(true);
    overlay._trapHandler = (event) => {
      if (event.key === "Escape") {
        closeSearch();
        return;
      }
      if (event.key === "Tab") trapFocus(overlay, event);
    };
    document.addEventListener("keydown", overlay._trapHandler);
    renderDefaultSearch();
    setTimeout(() => $("#search-input").focus(), 120);
  };

  const closeSearch = () => {
    const overlay = searchOverlay();
    if (!overlay || !overlay.classList.contains("is-open")) return;
    overlay.classList.remove("is-open");
    if (overlay._trapHandler) document.removeEventListener("keydown", overlay._trapHandler);
    $("#search-input").value = "";
  };

  const bindDelegation = () => {
    document.addEventListener("click", (event) => {
      const scrimHit = event.target.closest("#scrim");
      if (scrimHit) {
        $$(".drawer.is-open").forEach(closeLayer);
        $$(".filters.is-open").forEach(closeLayer);
        closeModal();
        syncScrim();
        return;
      }
      const mmLink = event.target.closest(".mm-nav a");
      if (mmLink) closeMobileMenu();

      const langBtn = event.target.closest("[data-action='lang-set']");
      if (langBtn) {
        VY.i18n.setLang(langBtn.dataset.value);
        return;
      }
      const curBtn = event.target.closest("[data-action='cur-set']");
      if (curBtn) {
        VY.currency.setCurrency(curBtn.dataset.value);
        return;
      }
      const searchTag = event.target.closest("[data-search-q]");
      if (searchTag) {
        $("#search-input").value = searchTag.dataset.searchQ;
        renderSearchResults(searchTag.dataset.searchQ);
        return;
      }

      const actionEl = event.target.closest("[data-action]");
      if (!actionEl) {
        const modalRoot = event.target.closest(".modal-root");
        if (modalRoot && !event.target.closest(".modal")) {
          closeModal();
          syncScrim();
        }
        return;
      }
      const action = actionEl.dataset.action;

      switch (action) {
        case "open-menu":
          openMobileMenu();
          break;
        case "close-menu":
          closeMobileMenu();
          break;
        case "open-search":
          openSearch();
          break;
        case "close-search":
          closeSearch();
          break;
        case "open-cart":
          openCart();
          break;
        case "close-drawer": {
          const drawer = actionEl.closest(".drawer, .filters");
          closeLayer(drawer);
          syncScrim();
          break;
        }
        case "close-modal":
          closeModal();
          syncScrim();
          break;
        case "legal": {
          const docs = LEGAL_DOCS();
          const doc = docs[actionEl.dataset.doc];
          if (doc) openModal({ title: doc.title, body: doc.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("") });
          break;
        }
        case "wish-toggle": {
          const id = actionEl.dataset.wishId;
          const added = VY.wishlist.toggle(id);
          actionEl.classList.toggle("is-active", added);
          actionEl.setAttribute("aria-pressed", String(added));
          actionEl.setAttribute("aria-label", escapeHtml(added ? t("card.wishRemove") : t("card.wishAdd")));
          toast(added ? t("toasts.toWish") : t("toasts.rmWish"));
          break;
        }
        case "card-add":
        case "quick-view":
          quickView(actionEl.dataset.id);
          break;
        case "qv-add": {
          if (!qvState.size) {
            toast(t("toasts.needSize"), { type: "error" });
            break;
          }
          VY.cart.add(qvState.id, qvState.size, 1);
          closeModal();
          toast(t("toasts.toCart"));
          setTimeout(openCart, 350);
          break;
        }
        case "cart-qty": {
          const key = actionEl.dataset.key;
          const delta = Number(actionEl.dataset.delta);
          const line = VY.cart.lines().find((item) => VY.cart.keyOf(item) === key);
          if (line) {
            if (line.qty + delta <= 0) {
              VY.cart.remove(key);
              toast(t("cart.removedToast"));
            } else {
              VY.cart.setQty(key, line.qty + delta);
            }
          }
          break;
        }
        case "cart-remove": {
          const row = actionEl.closest("[data-line-key]");
          const key = actionEl.dataset.key;
          if (row) {
            row.classList.add("is-removing");
            setTimeout(() => VY.cart.remove(key), 240);
          } else {
            VY.cart.remove(key);
          }
          toast(t("cart.removedToast"));
          break;
        }
        default:
          break;
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.id !== "search-input") return;
      renderSearchResults(event.target.value);
    });

    document.addEventListener("click", (event) => {
      const sizeBtn = event.target.closest("[data-qv-size]");
      if (!sizeBtn) return;
      const layout = $("#qv-layout");
      if (!layout) return;
      qvState.size = sizeBtn.dataset.qvSize;
      $$("[data-qv-size]", layout).forEach((btn) => btn.classList.toggle("is-active", btn === sizeBtn));
      const product = VY.productsApi.getById(qvState.id);
      updateQvPrice(product);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      $$(".filters.is-open").forEach(closeLayer);
      syncScrim();
    });
  };

  const markActiveNav = () => {
    const here = location.pathname.split("/").pop() || "index.html";
    const query = location.search;
    $$(".main-nav a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const path = href.split("?")[0].split("#")[0];
      if (href.includes("#")) {
        link.classList.toggle("is-active", false);
      } else {
        link.classList.toggle("is-active", here === path && !query);
      }
    });
  };

  const syncCounts = () => {
    $$("[data-cart-count]").forEach((el) => {
      el.textContent = String(VY.cart.count());
      el.classList.toggle("is-hidden", VY.cart.count() === 0);
    });
    $$("[data-wish-count]").forEach((el) => {
      el.textContent = String(VY.wishlist.count());
      el.classList.toggle("is-hidden", VY.wishlist.count() === 0);
    });
    const mmWish = $("#mm-wish");
    if (mmWish) mmWish.textContent = String(VY.wishlist.count());
  };

  const hideLoader = () => {
    const loader = $("#loader");
    if (!loader) {
      document.body.classList.add("is-ready");
      return;
    }
    const minimum = (() => {
      try {
        return sessionStorage.getItem("vyron_visited") ? 250 : 750;
      } catch {
        return 500;
      }
    })();
    try {
      sessionStorage.setItem("vyron_visited", "1");
    } catch {}
    const finish = () => {
      loader.classList.add("is-done");
      document.body.classList.add("is-ready");
      VY.emit("app:ready");
      setTimeout(() => loader.remove(), 700);
    };
    setTimeout(finish, minimum);
  };

  const renderChrome = () => {
    const headerMount = $("#site-header");
    if (headerMount) {
      headerMount.className = "site-header";
      headerMount.innerHTML = headerHtml();
    }
    const main = $(".page");
    if (main && !main.classList.contains("page-enter")) main.classList.add("page-enter");

    const footerMount = $("#site-footer");
    if (footerMount) {
      footerMount.className = "site-footer";
      footerMount.innerHTML = footerHtml();
    }

    const mm = $("#mobile-menu");
    if (mm) mm.outerHTML = mobileMenuHtml();

    markActiveNav();
    syncCounts();
  };

  const init = () => {
    document.body.insertAdjacentHTML("afterbegin", SPRITE);

    const hasOverlays = !$("#drawer-minicart");
    if (hasOverlays) {
      document.body.insertAdjacentHTML("beforeend", overlayRootHtml());
      document.body.insertAdjacentHTML("beforeend", mobileMenuHtml());
    }

    renderChrome();
    bindDelegation();

    const onScroll = () => {
      const header = $("#site-header");
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    VY.on("lang:changed", () => {
      renderChrome();
      VY.i18n.applyStatic();
      VY.cart.renderMiniCart();
      const query = $("#search-input") && $("#search-input").value;
      if ($("#search-overlay").classList.contains("is-open")) renderSearchResults(query || "");
    });
    VY.on("currency:changed", () => {
      renderChrome();
      VY.cart.renderMiniCart();
    });
    VY.on("cart:changed", () => {
      VY.cart.renderMiniCart();
      syncCounts();
    });
    VY.on("wish:changed", syncCounts);

    hideLoader();
  };

  Object.assign(VY, {
    ui: {
      init,
      toast,
      openModal,
      closeModal,
      openCart,
      openLayer,
      closeLayer,
      openSearch,
      closeSearch,
      openMobileMenu,
      closeMobileMenu,
      closeLayers,
      syncScrim,
      productCardHtml,
      minPriceOf,
      offerBadgeHtml,
      renderChrome,
      syncCounts
    }
  });
})();
