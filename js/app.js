(() => {
  "use strict";

  const VY = window.VY;
  const { $ } = VY;

  const renderHomeFeatured = () => {
    const grid = $("#home-featured");
    if (!grid) return;
    const featured = VY.PRODUCTS.filter((product) => product.featured);
    const list = (featured.length >= 4 ? featured : VY.PRODUCTS).slice(0, 4);
    grid.innerHTML = list.map((product) => VY.ui.productCardHtml(product)).join("");
    VY.wishlist.syncButtons(grid);
    VY.animations.observeReveals(grid);
  };

  const renderCartPage = () => VY.cart.renderCartPage();

  const renderFavoritesPage = () => VY.wishlist.renderFavoritesPage();

  const renderFaq = () => {
    const root = $("#faq-root");
    if (!root) return;
    const items = VY.i18n.t("faq") || [];
    root.innerHTML = items
      .map(
        ([question, answer], index) => `
        <div class="faq-item" data-reveal data-reveal-delay="${Math.min(index * 40, 200)}">
          <button type="button" class="faq-q" aria-expanded="false">
            <span><span class="faq-num">${String(index + 1).padStart(2, "0")}</span>${VY.escapeHtml(question)}</span>
            <svg class="icon"><use href="#i-chevron-down"/></svg>
          </button>
          <div class="faq-a"><div><p>${VY.escapeHtml(answer)}</p></div></div>
        </div>`
      )
      .join("");
    VY.animations.observeReveals(root);
  };

  const renderShipSteps = () => {
    const mount = $("#ship-steps");
    if (!mount) return;
    const steps = VY.i18n.t("ship.orderSteps") || [];
    mount.innerHTML = steps.map((step) => `<li>${VY.escapeHtml(step)}</li>`).join("");
  };

  const boot = () => {
    document.addEventListener(
      "error",
      (event) => {
        const img = event.target;
        if (!(img instanceof HTMLImageElement) || img.dataset.chain === undefined) return;
        let rest = [];
        try {
          rest = JSON.parse(img.dataset.chain || "[]");
        } catch {}
        const step = Number(img.dataset.chainStep || 0);
        if (step < rest.length) {
          img.dataset.chainStep = String(step + 1);
          img.src = rest[step];
        } else {
          img.style.display = "none";
        }
      },
      true
    );

    document.addEventListener(
      "load",
      (event) => {
        const img = event.target;
        if (img instanceof HTMLImageElement && img.classList.contains("media-img")) {
          img.classList.add("is-loaded");
        }
      },
      true
    );

    VY.i18n.applyStatic();
    VY.ui.init();

    const page = document.body.dataset.page || "";

    switch (page) {
      case "home":
        renderHomeFeatured();
        break;
      case "catalog":
        VY.catalogPage.init();
        break;
      case "product":
        VY.productPage.init();
        break;
      case "cart":
        renderCartPage();
        break;
      case "checkout":
        VY.checkoutPage.init();
        break;
      case "favorites":
        renderFavoritesPage();
        break;
      case "faq":
        renderFaq();
        break;
      case "shipping":
        renderShipSteps();
        break;
      default:
        break;
    }

    const rerenderSharedGrids = () => {
      if (page === "home") renderHomeFeatured();
      if (page === "cart") renderCartPage();
      if (page === "favorites") renderFavoritesPage();
      if (page === "faq") renderFaq();
      if (page === "shipping") renderShipSteps();
    };

    VY.on("lang:changed", rerenderSharedGrids);
    VY.on("currency:changed", rerenderSharedGrids);

    if (page === "favorites") {
      VY.on("wish:changed", renderFavoritesPage);
    }

    document.addEventListener("click", (event) => {
      const q = event.target.closest(".faq-q");
      if (!q) return;
      const item = q.closest(".faq-item");
      const open = item.hasAttribute("data-open");
      if (open) item.removeAttribute("data-open");
      else item.setAttribute("data-open", "");
      q.setAttribute("aria-expanded", String(!open));
    });

    VY.animations.init();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
