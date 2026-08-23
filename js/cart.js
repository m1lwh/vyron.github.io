(() => {
  "use strict";

  const VY = window.VY;
  const { $, $$, money } = VY;
  const KEY = "vyron_cart_v2";

  const read = () => {
    const data = VY.storage.get(KEY, []);
    return Array.isArray(data) ? data.filter((l) => l && l.id && l.size && l.qty > 0) : [];
  };

  const write = (lines) => {
    VY.storage.set(KEY, lines);
    VY.emit("cart:changed");
  };

  const keyOf = (line) => `${line.id}|${line.size}`;

  const product = (id) => VY.productsApi.getById(id);

  const sizePrice = (prod, size) => {
    if (!prod) return 0;
    const found = prod.sizes.find((s) => s.code === size);
    return found ? found.price : prod.sizes.length ? prod.sizes[0].price : 0;
  };

  const count = () => read().reduce((sum, l) => sum + l.qty, 0);

  const subtotalUSD = () =>
    read().reduce((sum, l) => {
      const prod = product(l.id);
      return sum + sizePrice(prod, l.size) * l.qty;
    }, 0);

  const add = (id, size, qty) => {
    qty = Math.max(1, Number(qty) || 1);
    const lines = read();
    const line = lines.find((l) => l.id === id && l.size === size);
    if (line) line.qty += qty;
    else lines.push({ id, size, qty });
    write(lines);
  };

  const remove = (key) => write(read().filter((l) => keyOf(l) !== key));

  const setQty = (key, qty) => {
    const lines = read();
    const line = lines.find((l) => keyOf(l) === key);
    if (!line) return;
    if (qty <= 0) {
      remove(key);
      return;
    }
    line.qty = qty;
    write(lines);
  };

  const clear = () => write([]);

  const miniItemHtml = (line) => {
    const prod = product(line.id);
    if (!prod) return "";
    const price = sizePrice(prod, line.size);
    const img = VY.imageChain(prod, 0);
    return `
      <article class="mini-item" data-line-key="${keyOf(line)}">
        <a href="product.html?id=${prod.id}" class="mini-thumb">${VY.mediaHtml({ chain: img, alt: VY.productsApi.productName(prod), fallbackLabel: VY.BRAND.name })}</a>
        <div class="mini-item-info">
          <h4>${VY.escapeHtml(VY.productsApi.productName(prod))}</h4>
          <i>${VY.escapeHtml(VY.t("cart.sizePrefix"))}: ${VY.escapeHtml(line.size)}</i>
          <div class="qty">
            <button type="button" data-action="cart-qty" data-key="${keyOf(line)}" data-delta="-1" aria-label="${VY.escapeHtml(VY.t("cart.decrease"))}">${VY.icon("minus")}</button>
            <output aria-live="polite">${line.qty}</output>
            <button type="button" data-action="cart-qty" data-key="${keyOf(line)}" data-delta="1" aria-label="${VY.escapeHtml(VY.t("cart.increase"))}">${VY.icon("plus")}</button>
          </div>
        </div>
        <div class="mini-item-right">
          <b>${money(price * line.qty)}</b>
          <button type="button" class="remove-btn" data-action="cart-remove" data-key="${keyOf(line)}" aria-label="${VY.escapeHtml(VY.t("cart.remove"))}">${VY.icon("trash")}</button>
        </div>
      </article>`;
  };

  const renderMiniCart = () => {
    const body = $("#minicart-body");
    const footer = $("#minicart-footer");
    if (!body) return;
    const items = read();
    $("#minicart-count").textContent = count();
    if (!items.length) {
      body.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">${VY.icon("bag")}</span>
          <h3>${VY.escapeHtml(VY.t("cart.emptyTitle"))}</h3>
          <p>${VY.escapeHtml(VY.t("cart.emptyText"))}</p>
          <a href="catalog.html" class="btn btn-outline btn-sm">${VY.escapeHtml(VY.t("cart.browse"))}</a>
        </div>`;
      footer.hidden = true;
      return;
    }
    body.innerHTML = items.map(miniItemHtml).join("");
    footer.hidden = false;
    $("#minicart-subtotal").textContent = money(subtotalUSD());
  };

  const cartRowHtml = (line) => {
    const prod = product(line.id);
    if (!prod) return "";
    const price = sizePrice(prod, line.size);
    return `
      <article class="cart-item" data-line-key="${keyOf(line)}">
        <a href="product.html?id=${prod.id}" class="cart-thumb" aria-label="${VY.escapeHtml(VY.productsApi.productName(prod))}">
          ${VY.mediaHtml({ chain: VY.imageChain(prod, 0), alt: VY.productsApi.productName(prod), fallbackLabel: VY.BRAND.name })}
        </a>
        <div class="cart-item-info">
          <h3 class="cart-item-name"><a href="product.html?id=${prod.id}">${VY.escapeHtml(VY.productsApi.productName(prod))}</a></h3>
          <div class="cart-item-meta">
            <i>${VY.escapeHtml(VY.t("cart.sizePrefix"))}: ${VY.escapeHtml(line.size)}</i>
            <i>${VY.escapeHtml(VY.t("prod." + prod.type))}</i>
          </div>
          <div class="cart-item-controls">
            <div class="qty">
              <button type="button" data-action="cart-qty" data-key="${keyOf(line)}" data-delta="-1" aria-label="${VY.escapeHtml(VY.t("cart.decrease"))}">${VY.icon("minus")}</button>
              <output aria-live="polite">${line.qty}</output>
              <button type="button" data-action="cart-qty" data-key="${keyOf(line)}" data-delta="1" aria-label="${VY.escapeHtml(VY.t("cart.increase"))}">${VY.icon("plus")}</button>
            </div>
            <b class="cart-item-price">${money(price * line.qty)}</b>
            <button type="button" class="remove-btn" data-action="cart-remove" data-key="${keyOf(line)}" aria-label="${VY.escapeHtml(VY.t("cart.remove"))}">${VY.icon("trash")}</button>
          </div>
        </div>
      </article>`;
  };

  const renderCartPage = () => {
    const root = $("#cart-root");
    if (!root) return;
    const items = read();
    if (!items.length) {
      root.innerHTML = `
        <div class="empty-page">
          <div class="empty-orb"></div>
          <h2>${VY.escapeHtml(VY.t("cart.pageTitle"))}</h2>
          <p class="empty-word">0</p>
          <h3>${VY.escapeHtml(VY.t("cart.emptyTitle"))}</h3>
          <p>${VY.escapeHtml(VY.t("cart.emptyText"))}</p>
          <a href="catalog.html" class="btn btn-primary btn-lg">${VY.escapeHtml(VY.t("cart.browse"))}</a>
        </div>`;
      return;
    }
    root.innerHTML = `
      <div class="cart-layout">
        <div class="cart-list">${items.map(cartRowHtml).join("")}</div>
        <aside class="cart-summary">
          <h3>${VY.escapeHtml(VY.t("cart.subtotal"))}</h3>
          <div class="summary-row"><span>${VY.i18n.pluralize(count(), "cart.items")}</span><b></b></div>
          <div class="summary-row total"><span>${VY.escapeHtml(VY.t("cart.subtotal"))}</span><b>${money(subtotalUSD())}</b></div>
          <p class="summary-note">${VY.escapeHtml(VY.t("sec.offerText"))}</p>
          <a href="checkout.html" class="btn btn-primary btn-block btn-lg">${VY.escapeHtml(VY.t("cart.checkout"))}</a>
          <a href="catalog.html" class="btn btn-ghost btn-block">${VY.escapeHtml(VY.t("cart.browse"))}</a>
          <button type="button" class="btn btn-link btn-block" data-action="cart-clear">${VY.escapeHtml(VY.t("cart.clear"))}</button>
        </aside>
      </div>`;
  };

  const init = () => {
    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-action='cart-clear']")) return;
      clear();
      VY.ui.toast(VY.t("cart.clearedToast"));
    });
    VY.on("cart:changed", () => {
      if (document.body.dataset.page === "cart") renderCartPage();
    });
  };

  Object.assign(VY, {
    cart: {
      init,
      add,
      remove,
      setQty,
      clear,
      count,
      subtotalUSD,
      lines: read,
      renderMiniCart,
      renderCartPage,
      sizePrice,
      keyOf
    }
  });
})();
