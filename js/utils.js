(() => {
  "use strict";

  const VY = window.VY;

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));

  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const norm = (str) => String(str || "").toLowerCase().replace(/ё/g, "е").trim();

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const debounce = (fn, wait) => {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), wait);
    };
  };

  const getParam = (name) => {
    try {
      return new URLSearchParams(location.search).get(name);
    } catch {
      return null;
    }
  };

  const storage = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        if (raw == null) return fallback;
        return JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {}
    },
    remove(key) {
      try {
        localStorage.removeItem(key);
      } catch {}
    }
  };

  const listeners = {};

  const on = (event, handler) => {
    if (!listeners[event]) listeners[event] = [];
    listeners[event].push(handler);
    return () => off(event, handler);
  };

  const off = (event, handler) => {
    if (!listeners[event]) return;
    listeners[event] = listeners[event].filter((h) => h !== handler);
  };

  const emit = (event, payload) => {
    if (!listeners[event]) return;
    listeners[event].slice().forEach((handler) => {
      try {
        handler(payload);
      } catch (error) {
        console.error(error);
      }
    });
  };

  const icon = (name, cls) => `<svg class="icon${cls ? " " + cls : ""}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

  const socialLink = (type) => {
    const raw = (VY.CONTACTS[type] || "").trim();
    return /^https?:\/\//i.test(raw) && !/INSTAGRAM_URL|TELEGRAM_URL|WHATSAPP_URL/i.test(raw) ? raw : null;
  };

  const originalOf = (usd) => {
    const rate = 1 - VY.DISCOUNT_RATE;
    return Math.round(usd / rate * 100) / 100;
  };

  const money = (usd) => VY.currency.format(usd);

  const imageChain = (product, index) => {
    const list = product.images || [];
    const src = list[index];
    if (!src) return [];
    const dot = src.lastIndexOf(".");
    if (dot < 0) return [src];
    const stem = src.slice(0, dot);
    return [src, stem + ".png", stem + ".jpg", stem + ".jpeg", stem + ".webp"];
  };

  const mediaHtml = ({ chain, alt, className, fallbackLabel }) => {
    const first = chain[0] || "";
    const rest = chain.slice(1);
    return `
      <span class="media-fallback" aria-hidden="true"><b>${escapeHtml(fallbackLabel || "vyron")}</b></span>
      <img src="${escapeHtml(first)}" alt="${escapeHtml(alt || "")}" loading="lazy" decoding="async"
        data-chain='${escapeHtml(JSON.stringify(rest))}' data-chain-step="0" class="${className ? "media-img " + className : "media-img"}">`;
  };

  Object.assign(VY, {
    $,
    $$,
    money,
    escapeHtml,
    norm,
    clamp,
    debounce,
    getParam,
    storage,
    emit,
    on,
    off,
    socialLink,
    icon,
    imageChain,
    mediaHtml,
    originalOf
  });
})();
