(() => {
  "use strict";

  const VY = window.VY;
  const CURRENCIES = VY.CURRENCIES;

  let current = (() => {
    try {
      const saved = localStorage.getItem("vyron_currency");
      if (saved && CURRENCIES[saved]) return saved;
    } catch {}
    return VYRON_CONFIG.defaults.currency;
  })();

  const convert = (usd) => {
    const def = CURRENCIES[current];
    return usd * def.rate;
  };

  const round = (value, decimals) => {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  };

  const group = (numStr) => numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const format = (usd) => {
    const def = CURRENCIES[current];
    const value = round(convert(usd), def.decimals);
    const fixed = value.toFixed(def.decimals);
    const [intPart, frac] = fixed.split(".");
    const body = group(intPart) + (frac ? "," + frac : "");
    return def.before ? `${def.symbol}${body}` : `${body} ${def.symbol}`;
  };

  const code = () => current;

  const list = () => Object.keys(CURRENCIES);

  const symbol = () => CURRENCIES[current].symbol;

  const rate = () => CURRENCIES[current].rate;

  const setCurrency = (next) => {
    if (!CURRENCIES[next] || next === current) return;
    current = next;
    try {
      localStorage.setItem("vyron_currency", next);
    } catch {}
    VY.emit("currency:changed", current);
  };

  Object.assign(VY, {
    currency: {
      get code() {
        return current;
      },
      list,
      symbol,
      rate,
      convert,
      format,
      setCurrency
    }
  });
})();
