(() => {
  "use strict";

  const VY = window.VY;
  const KEY = "vyron_wishlist_v1";

  const read = () => {
    const data = VY.storage.get(KEY, []);
    return Array.isArray(data) ? data : [];
  };

  const write = (ids) => {
    VY.storage.set(KEY, ids);
    VY.emit("wish:changed");
    syncButtons(document);
    const mmWish = document.getElementById("mm-wish");
    if (mmWish) mmWish.textContent = String(count());
  };

  const has = (id) => read().includes(id);

  const count = () => read().length;

  const toggle = (id) => {
    const ids = read();
    const index = ids.indexOf(id);
    let added;
    if (index >= 0) {
      ids.splice(index, 1);
      added = false;
    } else {
      ids.push(id);
      added = true;
    }
    write(ids);
    return added;
  };

  const remove = (id) => write(read().filter((x) => x !== id));

  const syncButtons = (root) => {
    VY.$$("[data-wish-id]", root || document).forEach((btn) => {
      const active = has(btn.dataset.wishId);
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    $$count();
  };

  const $$count = () => {
    document.querySelectorAll("[data-wish-count]").forEach((el) => {
      el.textContent = String(count());
      el.classList.toggle("is-hidden", count() === 0);
    });
  };

  const cardHtml = (id) => {
    const prod = VY.productsApi.getById(id);
    if (!prod) return "";
    return VY.ui.productCardHtml(prod);
  };

  const renderFavoritesPage = () => {
    const root = VY.$("#favorites-root");
    if (!root) return;
    const ids = read();
    if (!ids.length) {
      root.innerHTML = `
        <div class="empty-page">
          <div class="empty-orb"></div>
          <h2>${VY.escapeHtml(VY.t("wish.pageTitle"))}</h2>
          <span class="empty-icon big">${VY.icon("heart")}</span>
          <h3>${VY.escapeHtml(VY.t("wish.emptyTitle"))}</h3>
          <p>${VY.escapeHtml(VY.t("wish.emptyText"))}</p>
          <a href="catalog.html" class="btn btn-primary btn-lg">${VY.escapeHtml(VY.t("wish.browse"))}</a>
        </div>`;
      return;
    }
    root.innerHTML = `<div class="products-grid">${ids.map(cardHtml).join("")}</div>`;
    syncButtons(root);
  };

  Object.assign(VY, {
    wishlist: {
      has,
      count,
      toggle,
      remove,
      syncButtons,
      renderFavoritesPage
    }
  });
})();
