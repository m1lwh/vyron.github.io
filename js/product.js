(() => {
  "use strict";

  const VY = window.VY;
  const { $, $$, money, escapeHtml, icon } = VY;

  const t = (key, vars) => VY.i18n.t(key, vars);

  const state = { id: null, img: 0, size: null, qty: 1 };

  const lbState = { open: false };

  const getProduct = () => {
    if (!state.id) state.id = VY.getParam("id");
    return VY.productsApi.getById(state.id);
  };

  const chainOf = (product, index) => VY.imageChain(product, index || 0);

  const renderBreadcrumbs = (product) => {
    const mount = $("#pdp-breadcrumbs");
    if (!mount) return;
    mount.innerHTML = `
      <a href="index.html">vyron</a>
      <span>/</span>
      <a href="catalog.html">${escapeHtml(t("nav.catalog"))}</a>
      <span>/</span>
      <b>${escapeHtml(VY.productsApi.productName(product))}</b>`;
  };

  const thumbsHtml = (product) =>
    product.images
      .map(
        (_, index) =>
          `<button type="button" class="pdp-thumb${index === state.img ? " is-active" : ""}" data-thumb="${index}" aria-label="${escapeHtml(t("prod.galleryCounter", { i: index + 1, n: product.images.length }))}">
            ${VY.mediaHtml({ chain: chainOf(product, index), alt: "", fallbackLabel: VY.BRAND.name })}
          </button>`
      )
      .join("");

  const sizeBoxesHtml = (product) =>
    product.sizes
      .map((size) => {
        const active = state.size === size.code;
        return `
          <button type="button" class="size-box${active ? " is-active" : ""}" data-pdp-size="${escapeHtml(size.code)}">
            <b>${escapeHtml(size.code)}</b>
            <i>${money(size.price)}</i>
          </button>`;
      })
      .join("");

  const accordionHtml = (product) => {
    const features = product.features.map((item) => `<li>${escapeHtml(VY.productsApi.loc("", item))}</li>`).join("");
    const care = product.care.map((item) => `<li>${escapeHtml(VY.productsApi.loc("", item))}</li>`).join("");
    const specRows = [];
    if (product.material) {
      specRows.push(`<div class="spec-row"><span>${escapeHtml(t("prod.materialLabel"))}</span><p>${escapeHtml(VY.productsApi.loc("", product.material))}</p></div>`);
    }
    if (product.fit) {
      specRows.push(`<div class="spec-row"><span>${escapeHtml(t("prod.fitLabel"))}</span><p>${escapeHtml(VY.productsApi.loc("", product.fit))}</p></div>`);
    }
    return `
      ${specRows.length ? `<details class="acc" open><summary>${escapeHtml(t("prod.details"))}${icon("chevron-down")}</summary><div class="acc-body">${specRows.join("")}${features ? `<h5>${escapeHtml(t("prod.features"))}</h5><ul class="feature-list">${features}</ul>` : ""}</div></details>` : ""}
      ${care ? `<details class="acc"><summary>${escapeHtml(t("prod.care"))}${icon("chevron-down")}</summary><div class="acc-body"><ul class="care-list">${care}</ul></div></details>` : ""}
      <details class="acc"><summary>${escapeHtml(t("ship.delivH"))}${icon("chevron-down")}</summary><div class="acc-body"><p>${escapeHtml(t("ship.delivP"))}</p><p>${escapeHtml(t("ship.payP"))}</p></div></details>
      <details class="acc"><summary>${escapeHtml(t("ship.retH"))}${icon("chevron-down")}</summary><div class="acc-body"><p>${escapeHtml(t("ship.retP"))}</p></div></details>`;
  };

  const updatePriceViews = (product) => {
    const priceEl = $("#pdp-price");
    const oldEl = $("#pdp-old");
    const addBtn = $("#pdp-add");
    const pbPrice = $("#pb-price");
    const pbOld = $("#pb-old");
    if (!priceEl) return;
    let priceText;
    let oldText = "";
    if (state.size) {
      const price = VY.cart.sizePrice(product, state.size);
      priceText = money(price);
      oldText = money(VY.originalOf(price));
    } else {
      priceText = String(t("card.from", { p: money(VY.ui.minPriceOf(product)) }));
    }
    priceEl.textContent = priceText;
    oldEl.textContent = oldText;
    oldEl.classList.toggle("is-hidden", !oldText);
    if (pbPrice) pbPrice.textContent = priceText;
    if (pbOld) {
      pbOld.textContent = oldText;
      pbOld.classList.toggle("is-hidden", !oldText);
    }
    if (addBtn) addBtn.disabled = !state.size;
  };

  const layoutHtml = (product) => {
    const name = VY.productsApi.productName(product);
    return `
      <div class="pdp-grid">
        <div class="pdp-gallery">
          <div class="pdp-thumbs">${thumbsHtml(product)}</div>
          <figure class="pdp-stage" id="pdp-stage" data-action="pdp-zoom" title="${escapeHtml(t("prod.zoomHint"))}">
            <div class="pdp-stage-media" id="pdp-stage-media">${VY.mediaHtml({ chain: chainOf(product, state.img), alt: name, fallbackLabel: VY.BRAND.name })}</div>
            ${VY.ui.offerBadgeHtml()}
            <button type="button" class="wish-btn pdp-wish" data-action="wish-toggle" data-wish-id="${product.id}" aria-pressed="${VY.wishlist.has(product.id)}" aria-label="${escapeHtml(t("card.wishAdd"))}">${icon("heart")}</button>
            <button type="button" class="zoom-btn" data-action="pdp-zoom" aria-label="${escapeHtml(t("prod.zoomHint"))}">${icon("eye")}<span>${escapeHtml(t("prod.zoomHint"))}</span></button>
          </figure>
        </div>
        <div class="pdp-info">
          <p class="eyebrow">${escapeHtml(t(`prod.${product.type}`))}<span class="eyebrow-dot"></span>${escapeHtml(t("col." + product.collection + ".title"))}</p>
          <h1 class="pdp-name">${escapeHtml(name)}</h1>
          ${product.tagline ? `<p class="pdp-tagline">${escapeHtml(VY.productsApi.loc("", product.tagline))}</p>` : ""}
          <div class="pdp-price-row">
            <s class="price-old" id="pdp-old"></s>
            <b class="pdp-price" id="pdp-price"></b>
            <span class="badge-offer badge-offer-inline"><b>-20%</b><span>${escapeHtml(t("sec.offerEyebrow"))}</span></span>
          </div>
          <p class="pdp-sizes-label">${escapeHtml(t("qv.selectSize"))}</p>
          <div class="pdp-sizes">${sizeBoxesHtml(product)}</div>
          <p class="pdp-sizing-note">${escapeHtml(t("prod.sizingNote"))}</p>
          <div class="pdp-buy-row">
            <div class="qty-stepper">
              <button type="button" data-qty-step="-1" aria-label="-">${icon("minus")}</button>
              <b id="pdp-qty">${state.qty}</b>
              <button type="button" data-qty-step="1" aria-label="+">${icon("plus")}</button>
            </div>
            <button type="button" class="btn btn-primary btn-lg btn-flex" id="pdp-add" data-action="pdp-add" disabled>${escapeHtml(t("card.add"))}</button>
          </div>
          <div class="pdp-accordions">${accordionHtml(product)}</div>
        </div>
      </div>
      ${product.story ? `
      <section class="pdp-story" aria-labelledby="story-title">
        <div class="pdp-story-inner">
          <p class="eyebrow">${escapeHtml(t("prod.story"))}</p>
          <h2 id="story-title">${escapeHtml(name)}</h2>
          <p class="pdp-story-text">${escapeHtml(VY.productsApi.loc("", product.story))}</p>
        </div>
      </section>` : ""}
      <div class="pdp-buybar">
        <div class="pb-info">
          <small>${escapeHtml(name)}</small>
          <div class="pb-price-row"><s class="price-old" id="pb-old"></s><b id="pb-price"></b></div>
        </div>
        <button type="button" class="btn btn-primary" id="pb-add" data-action="pdp-add">${escapeHtml(t("card.add"))}</button>
      </div>`;
  };

  const renderNotFound = () => {
    const layout = $("#pdp-layout");
    if (!layout) return;
    layout.innerHTML = `
      <div class="empty-state empty-state-tall">
        <span class="empty-icon big">${icon("search")}</span>
        <h2>404</h2>
        <p>${escapeHtml(t("list.emptyText"))}</p>
        <a href="catalog.html" class="btn btn-primary btn-lg">${escapeHtml(t("prod.backToCatalog"))}</a>
      </div>`;
    const relatedRoot = $("#related-root");
    if (relatedRoot) relatedRoot.closest(".section").hidden = true;
  };

  const renderRelated = (product) => {
    const root = $("#related-root");
    if (!root) return;
    root.closest(".section").hidden = false;
    const scored = VY.PRODUCTS.filter((item) => item.id !== product.id).sort((a, b) => {
      const score = (item) => (item.type === product.type ? 2 : 0) + (item.collection === product.collection ? 1 : 0);
      return score(b) - score(a);
    });
    root.innerHTML = scored.slice(0, 4).map((item) => VY.ui.productCardHtml(item)).join("");
    VY.wishlist.syncButtons(root);
    VY.animations.observeReveals(root);
  };

  const absoluteUrl = (src) => new URL(src, location.href).href;

  const updateMeta = (product) => {
    const name = VY.productsApi.productName(product);
    const description = product.tagline ? VY.productsApi.loc("", product.tagline) : "";
    document.title = `${name} - vyron`;
    const setMeta = (selector, attr, value) => {
      const el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", `${name} - vyron`);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", absoluteUrl(product.images[0] || "assets/logo.jpg"));
    const existing = document.getElementById("pdp-jsonld");
    if (existing) existing.remove();
    const prices = product.sizes.map((size) => size.price);
    const jsonld = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      image: [absoluteUrl(product.images[0] || "assets/logo.jpg")],
      brand: { "@type": "Brand", name: VY.BRAND.name },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        availability: "https://schema.org/InStock"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "pdp-jsonld";
    script.textContent = JSON.stringify(jsonld);
    document.head.appendChild(script);
  };

  const swapStageImage = (product, index) => {
    const stage = $("#pdp-stage-media");
    if (!stage) return;
    state.img = index;
    stage.innerHTML = VY.mediaHtml({ chain: chainOf(product, index), alt: VY.productsApi.productName(product), fallbackLabel: VY.BRAND.name });
    stage.classList.remove("is-in");
    requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.add("is-in")));
    $$(".pdp-thumb").forEach((thumb) => thumb.classList.toggle("is-active", Number(thumb.dataset.thumb) === index));
  };

  const openLightbox = (product, index) => {
    closeLightbox();
    const box = document.createElement("div");
    box.className = "lightbox";
    box.id = "lightbox";
    box.innerHTML = `
      <button type="button" class="icon-btn lb-close" data-lb="close" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
      <button type="button" class="lb-arrow lb-prev" data-lb="prev" aria-label="${escapeHtml(t("a11y.prevImage"))}">${icon("arrow-left")}</button>
      <figure class="lb-stage"><img class="lb-img" src="${chainOf(product, index)[0]}" alt="${escapeHtml(VY.productsApi.productName(product))}"></figure>
      <button type="button" class="lb-arrow lb-next" data-lb="next" aria-label="${escapeHtml(t("a11y.nextImage"))}">${icon("arrow-right")}</button>
      <span class="lb-counter"></span>`;
    document.body.appendChild(box);
    requestAnimationFrame(() => box.classList.add("is-open"));
    document.body.classList.add("is-locked");
    lbState.open = true;
    updateLbImage(box, product, index);
    box._keyHandler = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
        return;
      }
      if (event.key === "ArrowRight") stepLb(box, product, 1);
      if (event.key === "ArrowLeft") stepLb(box, product, -1);
    };
    document.addEventListener("keydown", box._keyHandler);
  };

  const updateLbImage = (box, product, index) => {
    const img = box.querySelector(".lb-img");
    img.classList.remove("is-zoomed");
    img.style.transformOrigin = "center";
    img.src = chainOf(product, index)[0];
    img.onload = () => img.classList.add("is-ready");
    box.querySelector(".lb-counter").textContent = t("prod.galleryCounter", { i: index + 1, n: product.images.length });
    box.dataset.index = String(index);
  };

  const stepLb = (box, product, delta) => {
    const total = product.images.length;
    const next = (Number(box.dataset.index) + delta + total) % total;
    updateLbImage(box, product, next);
  };

  const closeLightbox = () => {
    const box = $("#lightbox");
    if (!box) return;
    if (box._keyHandler) document.removeEventListener("keydown", box._keyHandler);
    box.remove();
    lbState.open = false;
    document.body.classList.remove("is-locked");
  };

  const bindProductEvents = () => {
    document.addEventListener("click", (event) => {
      const thumb = event.target.closest("[data-thumb]");
      if (thumb) {
        const product = getProduct();
        swapStageImage(product, Number(thumb.dataset.thumb));
        return;
      }

      if (!lbState.open && event.target.closest('[data-action="pdp-zoom"]')) {
        openLightbox(getProduct(), state.img);
        return;
      }

      const lbBtn = event.target.closest("[data-lb]");
      if (lbBtn) {
        const box = $("#lightbox");
        const action = lbBtn.dataset.lb;
        if (action === "close") {
          closeLightbox();
        } else if (action === "prev") {
          stepLb(box, getProduct(), -1);
        } else if (action === "next") {
          stepLb(box, getProduct(), 1);
        }
        return;
      }
      if (event.target.closest(".lightbox") && !event.target.closest(".lb-img")) {
        closeLightbox();
        return;
      }
      if (event.target.closest(".lb-img")) {
        const img = event.target.closest(".lb-img");
        if (!img.classList.contains("is-zoomed")) {
          const rect = img.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          img.style.transformOrigin = `${x}% ${y}%`;
          img.classList.add("is-zoomed");
        } else {
          img.classList.remove("is-zoomed");
        }
        return;
      }

      const sizeBtn = event.target.closest("[data-pdp-size]");
      if (sizeBtn) {
        state.size = sizeBtn.dataset.pdpSize;
        $$(".pdp-sizes .size-box").forEach((btn) => btn.classList.toggle("is-active", btn === sizeBtn));
        updatePriceViews(getProduct());
        return;
      }

      const stepBtn = event.target.closest("[data-qty-step]");
      if (stepBtn) {
        state.qty = Math.min(9, Math.max(1, state.qty + Number(stepBtn.dataset.qtyStep)));
        const qtyEl = $("#pdp-qty");
        if (qtyEl) qtyEl.textContent = String(state.qty);
        return;
      }

      if (event.target.closest('[data-action="pdp-add"]')) {
        const product = getProduct();
        if (!state.size) {
          VY.ui.toast(t("toasts.needSize"), { type: "error" });
          return;
        }
        VY.cart.add(product.id, state.size, state.qty);
        VY.ui.toast(t("toasts.toCart"));
        setTimeout(() => VY.ui.openCart(), 350);
      }
    });

    VY.on("lang:changed", () => render());
    VY.on("currency:changed", () => render());
  };

  const render = () => {
    const product = getProduct();
    if (!product) {
      renderNotFound();
      return;
    }
    if (!product.images[state.img]) state.img = 0;
    if (state.size && !product.sizes.some((size) => size.code === state.size)) state.size = null;
    renderBreadcrumbs(product);
    const layout = $("#pdp-layout");
    if (layout) layout.innerHTML = layoutHtml(product);
    updatePriceViews(product);
    renderRelated(product);
    updateMeta(product);
    VY.wishlist.syncButtons($("#pdp-layout"));
    VY.animations.observeReveals($("#pdp-layout"));
  };

  const init = () => {
    if (!$("#pdp-layout")) return;
    bindProductEvents();
    render();
  };

  Object.assign(VY, {
    productPage: {
      init,
      render,
      openLightbox
    }
  });
})();
