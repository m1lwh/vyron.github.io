(() => {
  "use strict";

  window.VY = window.VY || {};

  const VYRON_CONFIG = {
    brand: {
      name: "vyron",
      legalName: "vyron",
      logo: "assets/logo.jpg"
    },

    contacts: {
      instagram: "INSTAGRAM_URL",
      telegram: "https://t.me/VYRONNbrand",
      whatsapp: "https://wa.me/994505543747",
      whatsappRaw: "994505543747",
      whatsappDisplay: "+994 50 554 37 47",
      youtube: "https://www.youtube.com/@VYRONBRAND",
      tiktok: "https://www.youtube.com/@VYRONBRAND"
    },

    currencies: {
      USD: { symbol: "$", rate: 1, decimals: 2, before: true },
      RUB: { symbol: "₽", rate: 92, decimals: 0, before: false },
      AZN: { symbol: "₼", rate: 1.7, decimals: 2, before: false }
    },

    discountRate: 0.2,

    defaults: {
      language: "ru",
      currency: "USD"
    }
  };

  window.VYRON_CONFIG = VYRON_CONFIG;
  Object.assign(window.VY, {
    BRAND: {
      name: VYRON_CONFIG.brand.name,
      legalName: VYRON_CONFIG.brand.legalName,
      logo: VYRON_CONFIG.brand.logo
    },
    CONTACTS: VYRON_CONFIG.contacts,
    CURRENCIES: VYRON_CONFIG.currencies,
    DISCOUNT_RATE: VYRON_CONFIG.discountRate
  });
})();
