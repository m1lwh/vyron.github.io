(() => {
  "use strict";

  const VY = window.VY;
  const { $, $$, escapeHtml, icon } = VY;
  const t = (key, vars) => VY.i18n.t(key, vars);

  const PAGE_SIZE = 6;

  const state = {
    category: "all",
    collection: null,
    query: "",
    sizes: new Set(),
    priceMin: "",
    priceMax: "",
    sort: "popular",
    visible: PAGE_SIZE
  };

  let priceBoundsUSD = { min: 0, max: 0 };

  const computeBounds = () => {
    let min = Infinity;
    let max = 0;
    VY.PRODUCTS.forEach((product) => {
      product.sizes.forEach((size) => {
        if (size.price < min) min = size.price;
        if (size.price > max) max = size.price;
      });
    });
    priceBoundsUSD = { min: Math.floor(min), max: Math.ceil(max) };
  };

  const CAT_TO_TYPE = { all: null, tshirts: "tee", sweatshirts: "sweatshirt" };

  const matchesFilters = (product) => {
    const catType = CAT_TO_TYPE[state.category];
    if (catType && product.type !== catType) return false;
    if (state.collection && product.collection !== state.collection) return false;
    if (state.sizes.size) {
      const codes = product.sizes.map((size) => size.code);
      if (!codes.some((code) => state.sizes.has(code))) return false;
    }
    const rate = VY.currency.rate();
    if (state.priceMin !== "") {
      const minPrice = Math.min(...product.sizes.map((size) => size.price)) * rate;
      if (minPrice < Number(state.priceMin) - 0.01) return false;
    }
    if (state.priceMax !== "") {
      const maxPrice = Math.max(...product.sizes.map((size) => size.price)) * rate;
      if (maxPrice > Number(state.priceMax) + 0.01) return false;
    }
    if (state.query.trim()) {
      const haystack = [
        VY.productsApi.productName(product),
        VY.productsApi.loc(product.id, product.tagline) || "",
        VY.productsApi.loc(product.id, product.story) || "",
        product.type,
        product.id
      ]
        .join(" ")
        .toLowerCase();
      if (!state.query.trim().toLowerCase().split(/\s+/).every((word) => haystack.includes(word))) return false;
    }
    return true;
  };

  const getFiltered = () => {
    const list = VY.PRODUCTS.filter(matchesFilters);
    switch (state.sort) {
      case "price-asc":
        list.sort((a, b) => VY.ui.minPriceOf(a) - VY.ui.minPriceOf(b));
        break;
      case "price-desc":
        list.sort((a, b) => VY.ui.minPriceOf(b) - VY.ui.minPriceOf(a));
        break;
      case "name-asc":
        list.sort((a, b) =>
          VY.productsApi.productName(a).localeCompare(VY.productsApi.productName(b), VY.i18n.lang)
        );
        break;
      default:
        break;
    }
    return list;
  };

  const renderChips = () => {
    const mount = $("#catalog-chips");
    if (!mount) return;
    const cats = [
      { value: "all", label: t("cat.all") },
      { value: "tshirts", label: t("cat.tshirts") },
      { value: "sweatshirts", label: t("cat.sweatshirts") }
    ];
    mount.innerHTML = cats
      .map(
        (cat) =>
          `<button type="button" class="chip${state.category === cat.value ? " is-active" : ""}" data-cat="${cat.value}">${escapeHtml(cat.label)}</button>`
      )
      .join("");
  };

  const renderSortOptions = () => {
    const select = $("#catalog-sort");
    if (!select) return;
    const options = [
      ["popular", "list.sortPopular"],
      ["price-asc", "list.priceAsc"],
      ["price-desc", "list.priceDesc"],
      ["name-asc", "list.nameAsc"]
    ];
    select.innerHTML = options
      .map(([value, key]) => `<option value="${value}"${state.sort === value ? " selected" : ""}>${escapeHtml(t(key))}</option>`)
      .join("");
  };

  const renderFilters = () => {
    const panel = $("#filters-panel");
    if (!panel) return;
    const sizeCodes = [...new Set(VY.PRODUCTS.flatMap((product) => product.sizes.map((size) => size.code)))];
    const rate = VY.currency.rate();
    const symbol = VY.currency.symbol();
    const boundsMin = Math.round(priceBoundsUSD.min * rate);
    const boundsMax = Math.round(priceBoundsUSD.max * rate);
    panel.innerHTML = `
      <div class="filters-head">
        <p class="drawer-title">${escapeHtml(t("list.filters"))}</p>
        <button type="button" class="icon-btn" data-action="close-drawer" aria-label="${escapeHtml(t("a11y.close"))}">${icon("close")}</button>
      </div>
      <div class="filters-body">
        <div class="filter-group">
          <h4>${escapeHtml(t("list.category"))}</h4>
          <div class="filter-opts">
            ${[
              ["all", "cat.all"],
              ["tshirts", "cat.tshirts"],
              ["sweatshirts", "cat.sweatshirts"]
            ]
              .map(
                ([value, key]) =>
                  `<label class="check${state.category === value ? " is-active" : ""}"><input type="radio" name="f-cat" value="${value}"${state.category === value ? " checked" : ""}><i>${icon("check")}</i><span>${escapeHtml(t(key))}</span></label>`
              )
              .join("")}
          </div>
        </div>
        <div class="filter-group">
          <h4>${escapeHtml(t("list.size"))}</h4>
          <div class="size-grid">
            ${sizeCodes
              .map(
                (code) =>
                  `<button type="button" class="size-box${state.sizes.has(code) ? " is-active" : ""}" data-f-size="${escapeHtml(code)}">${escapeHtml(code)}</button>`
              )
              .join("")}
          </div>
        </div>
        <div class="filter-group">
          <h4>${escapeHtml(t("list.price"))}<small>${escapeHtml(interpolateRange(boundsMin, boundsMax, symbol))}</small></h4>
          <div class="price-inputs">
            <input type="number" id="f-price-min" inputmode="numeric" min="0" placeholder="${boundsMin}" value="${state.priceMin}" aria-label="${escapeHtml(t("list.from"))}">
            <span>-</span>
            <input type="number" id="f-price-max" inputmode="numeric" min="0" placeholder="${boundsMax}" value="${state.priceMax}" aria-label="${escapeHtml(t("list.to"))}">
          </div>
        </div>
        <button type="button" class="btn btn-outline btn-block" data-action="reset-filters">${icon("refresh")}<span>${escapeHtml(t("list.reset"))}</span></button>
      </div>`;
  };

  const interpolateRange = (min, max, symbol) => `${min}${symbol} - ${max}${symbol}`;

  const renderResultsMeta = (list) => {
    const countEl = $("#results-count");
    if (countEl) countEl.textContent = interpolateCount(t("list.found"), { n: list.length });
    const wrap = $("#load-more-wrap");
    const shown = Math.min(state.visible, list.length);
    const btn = $("#load-more-btn");
    if (btn && list.length > shown) btn.textContent = interpolateCount(t("list.loadMore"), { n: list.length - shown });
    if (wrap) wrap.hidden = list.length <= shown;
  };

  const interpolateCount = (str, vars) => String(str).replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : `{${k}}`));

  const renderGrid = () => {
    const grid = $("#catalog-grid");
    if (!grid) return;
    const list = getFiltered();
    if (!list.length) {
      grid.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">${icon("search")}</span>
          <h3>${escapeHtml(t("list.emptyTitle"))}</h3>
          <p>${escapeHtml(t("list.emptyText"))}</p>
          <button type="button" class="btn btn-primary" data-action="reset-filters">${escapeHtml(t("list.reset"))}</button>
        </div>`;
      renderResultsMeta(list);
      return;
    }
    const shown = list.slice(0, state.visible);
    grid.innerHTML = shown.map((product) => VY.ui.productCardHtml(product)).join("");
    VY.wishlist.syncButtons(grid);
    VY.animations.observeReveals(grid);
    renderResultsMeta(list);
  };

  const resetState = () => {
    state.category = "all";
    state.sizes.clear();
    state.priceMin = "";
    state.priceMax = "";
    state.query = "";
    state.visible = PAGE_SIZE;
    const searchInput = $("#catalog-search-input");
    if (searchInput) searchInput.value = "";
    renderAll();
  };

  const renderAll = () => {
    renderChips();
    renderSortOptions();
    renderFilters();
    renderGrid();
  };

  const readUrlParams = () => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat && ["all", "tshirts", "sweatshirts"].includes(cat)) state.category = cat;
    const col = params.get("collection");
    if (col) state.collection = col;
    const q = params.get("q");
    if (q) {
      state.query = q;
      const searchInput = $("#catalog-search-input");
      if (searchInput) searchInput.value = q;
    }
  };

  const bindCatalogEvents = () => {
    document.addEventListener("click", (event) => {
      const openBtn = event.target.closest("[data-action='open-filters']");
      if (openBtn) {
        const panel = $("#filters-panel");
        if (panel) {
          VY.ui.openLayer(panel, { focus: '[data-action="close-drawer"]' });
        }
        return;
      }
      const chip = event.target.closest("[data-cat]");
      if (chip) {
        state.category = chip.dataset.cat;
        state.visible = PAGE_SIZE;
        renderChips();
        renderFilters();
        renderGrid();
        return;
      }
      const sizeBtn = event.target.closest("[data-f-size]");
      if (sizeBtn) {
        const code = sizeBtn.dataset.fSize;
        if (state.sizes.has(code)) state.sizes.delete(code);
        else state.sizes.add(code);
        sizeBtn.classList.toggle("is-active", state.sizes.has(code));
        state.visible = PAGE_SIZE;
        renderGrid();
        return;
      }
      if (event.target.closest("[data-action='reset-filters']")) {
        resetState();
      }
    });

    document.addEventListener("change", (event) => {
      if (event.target.name === "f-cat") {
        state.category = event.target.value;
        state.visible = PAGE_SIZE;
        $$("#filters-panel .check").forEach((label) => {
          const input = label.querySelector("input");
          label.classList.toggle("is-active", !!input && input.checked);
        });
        renderChips();
        renderGrid();
        return;
      }
      if (event.target.id === "catalog-sort") {
        state.sort = event.target.value;
        renderGrid();
      }
    });

    document.addEventListener("input", (event) => {
      if (event.target.id === "catalog-search-input") {
        state.query = event.target.value;
        state.visible = PAGE_SIZE;
        clearTimeout(bindCatalogEvents._qt);
        bindCatalogEvents._qt = setTimeout(renderGrid, 220);
        return;
      }
      if (event.target.id === "f-price-min") {
        state.priceMin = event.target.value;
        state.visible = PAGE_SIZE;
        clearTimeout(bindCatalogEvents._pt);
        bindCatalogEvents._pt = setTimeout(renderGrid, 320);
        return;
      }
      if (event.target.id === "f-price-max") {
        state.priceMax = event.target.value;
        state.visible = PAGE_SIZE;
        clearTimeout(bindCatalogEvents._pt2);
        bindCatalogEvents._pt2 = setTimeout(renderGrid, 320);
      }
    });

    const loadMoreBtn = $("#load-more-btn");
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener("click", () => {
        state.visible += PAGE_SIZE;
        renderGrid();
      });
    }

    VY.on("lang:changed", renderAll);
    VY.on("currency:changed", renderAll);
  };

  const init = () => {
    if (!$("#catalog-grid")) return;
    computeBounds();
    readUrlParams();
    renderAll();
    bindCatalogEvents();
  };

  Object.assign(VY, {
    catalogPage: {
      init,
      getFiltered
    }
  });
})();
