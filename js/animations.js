(() => {
  "use strict";

  const VY = window.VY;
  const { $$ } = VY;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let revealObserver = null;

  const getObserver = () => {
    if (revealObserver) return revealObserver;
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.revealDelay || 0);
          setTimeout(() => el.classList.add("is-visible"), delay);
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    return revealObserver;
  };

  const observeReveals = (root) => {
    const items = $$("[data-reveal]:not(.is-visible)", root || document);
    if (!items.length) return;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = getObserver();
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        const delay = Number(item.dataset.revealDelay || 0);
        setTimeout(() => item.classList.add("is-visible"), delay);
      } else {
        observer.observe(item);
      }
    });
  };

  const initReveals = () => {
    observeReveals(document);
  };

  const initParallax = () => {
    if (prefersReduced) return;
    const layers = $$("[data-parallax]");
    if (!layers.length) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const scrollY = window.scrollY;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0.2);
        layer.style.transform = `translate3d(0, ${scrollY * speed * -1}px, 0)`;
      });
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    update();
  };

  const initMagnetic = () => {
    if (prefersReduced || !window.matchMedia("(pointer: fine)").matches) return;
    $$("[data-magnetic]").forEach((el) => {
      const strength = Number(el.dataset.magnetic || 14);
      el.addEventListener("mousemove", (event) => {
        const rect = el.getBoundingClientRect();
        const relX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const relY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        el.style.transform = `translate(${relX * strength}px, ${relY * strength * 0.7}px)`;
        el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  };

  const initCounters = () => {
    const counters = $$("[data-counter]");
    if (!counters.length) return;
    const animate = (el) => {
      const target = Number(el.dataset.counter);
      const suffix = el.dataset.counterSuffix || "";
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = `${Math.round(target * eased).toLocaleString("ru-RU")}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (prefersReduced || !("IntersectionObserver" in window)) {
      counters.forEach((el) => {
        el.textContent = `${Number(el.dataset.counter).toLocaleString("ru-RU")}${el.dataset.counterSuffix || ""}`;
      });
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((counter) => observer.observe(counter));
  };

  const bindButtonSpotlight = () => {
    document.addEventListener("mousemove", (event) => {
      const btn = event.target.closest(".btn");
      if (!btn || prefersReduced) return;
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      btn.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    });
  };

  const initAll = () => {
    initReveals();
    initParallax();
    initMagnetic();
    initCounters();
    bindButtonSpotlight();
  };

  VY.animations = { init: initAll, observeReveals };
})();
