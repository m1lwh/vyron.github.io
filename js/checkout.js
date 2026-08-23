(() => {
  "use strict";

  const VY = window.VY;
  const { $, money, escapeHtml, icon } = VY;

  const t = (key, vars) => VY.i18n.t(key, vars);

  const orderMessage = () => {
    const rows = VY.cart.lines().map((line) => {
      const product = VY.productsApi.getById(line.id);
      if (!product) return "";
      const name = VY.productsApi.productName(product);
      const price = VY.cart.sizePrice(product, line.size) * line.qty;
      return t("contact.msgItem", { name, size: line.size, qty: line.qty, price: money(price) });
    });
    return [t("contact.msgHello"), ...rows, "", t("contact.msgTotal", { total: money(VY.cart.subtotalUSD()) }), "", t("contact.msgSign")].join("\n");
  };

  const telegramHref = () => {
    const base = VY.CONTACTS.telegram;
    return `${base}?text=${encodeURIComponent(orderMessage())}`;
  };

  const whatsappHref = () => `https://wa.me/${VY.CONTACTS.whatsappRaw}?text=${encodeURIComponent(orderMessage())}`;

  const itemRowHtml = (line) => {
    const product = VY.productsApi.getById(line.id);
    if (!product) return "";
    const price = VY.cart.sizePrice(product, line.size) * line.qty;
    return `
      <li class="co-item">
        <span class="co-thumb">${VY.mediaHtml({ chain: VY.imageChain(product, 0), alt: "", fallbackLabel: VY.BRAND.name })}</span>
        <span class="co-item-info">
          <b>${escapeHtml(VY.productsApi.productName(product))}</b>
          <small>${escapeHtml(t("cart.sizePrefix"))}: ${escapeHtml(line.size)} × ${line.qty}</small>
        </span>
        <span class="co-item-price">${money(price)}</span>
      </li>`;
  };

  const render = () => {
    const root = $("#checkout-root");
    if (!root) return;

    if (!VY.cart.lines().length) {
      root.innerHTML = `
        <div class="empty-page">
          <div class="empty-orb"></div>
          <span class="empty-icon big">${icon("bag")}</span>
          <h2>${escapeHtml(t("cart.emptyTitle"))}</h2>
          <p>${escapeHtml(t("cart.emptyText"))}</p>
          <a href="catalog.html" class="btn btn-primary btn-lg">${escapeHtml(t("cart.browse"))}</a>
        </div>`;
      return;
    }

    root.innerHTML = `
      <section class="co-grid">
        <div class="co-left">
          <p class="eyebrow">${escapeHtml(t("contact.eyebrow"))}</p>
          <h1>${escapeHtml(t("contact.title"))}</h1>
          <p class="co-sub">${escapeHtml(t("contact.sub"))}</p>
          <div class="co-actions">
            <a class="co-btn" href="${telegramHref()}" target="_blank" rel="noopener noreferrer">
              <span class="co-btn-icon">${icon("telegram")}</span>
              <span class="co-btn-body"><b>${escapeHtml(t("contact.tgBtn"))}</b><small>${escapeHtml(t("contact.tgNote"))}</small></span>
              <span class="co-btn-arrow">${icon("arrow-right")}</span>
            </a>
            <a class="co-btn" href="${whatsappHref()}" target="_blank" rel="noopener noreferrer">
              <span class="co-btn-icon">${icon("whatsapp")}</span>
              <span class="co-btn-body"><b>${escapeHtml(t("contact.waBtn"))}</b><small>${escapeHtml(t("contact.waNote"))}</small></span>
              <span class="co-btn-arrow">${icon("arrow-right")}</span>
            </a>
          </div>
          <div class="co-socials">
            <p class="co-socials-head">${escapeHtml(t("contact.socialsHead"))}</p>
            <div class="co-social-links">
              <a href="${VY.CONTACTS.youtube}" target="_blank" rel="noopener noreferrer">${icon("youtube")}<b>YouTube</b><small>${escapeHtml(t("cont.ytNote"))}</small></a>
              <a href="${VY.CONTACTS.tiktok}" target="_blank" rel="noopener noreferrer">${icon("tiktok")}<b>TikTok</b><small>${escapeHtml(t("cont.ttNote"))}</small></a>
            </div>
            <p class="co-hours">${escapeHtml(t("cont.hours"))}</p>
          </div>
          <div class="co-footer-row">
            <button type="button" class="btn btn-ghost" data-action="cart-clear">${icon("trash")}<span>${escapeHtml(t("cart.clear"))}</span></button>
            <a href="catalog.html" class="link-arrow">${escapeHtml(t("contact.continue"))} ${icon("arrow-right")}</a>
          </div>
        </div>
        <aside class="co-right" aria-label="${escapeHtml(t("contact.summaryHead"))}">
          <h2>${escapeHtml(t("contact.summaryHead"))}</h2>
          <ul class="co-items">${VY.cart.lines().map(itemRowHtml).join("")}</ul>
          <div class="co-total"><span>${escapeHtml(t("contact.total"))}</span><b>${money(VY.cart.subtotalUSD())}</b></div>
          <p class="co-note">${escapeHtml(t("sec.offerText"))}</p>
        </aside>
      </section>`;
  };

  const init = () => {
    if (!$("#checkout-root")) return;
    render();
    VY.on("cart:changed", render);
    VY.on("lang:changed", render);
    VY.on("currency:changed", render);
  };

  Object.assign(VY, {
    checkoutPage: {
      init,
      render,
      orderMessage,
      whatsappHref,
      telegramHref
    }
  });
})();
