(() => {
  const supported = ["en", "ko", "ja", "zh-Hans"];
  const sections = Array.from(document.querySelectorAll(".kkori-page section[lang]"));
  const buttons = Array.from(document.querySelectorAll(".language-nav button[data-lang]"));
  if (!sections.length || !buttons.length) return;

  const normalize = (value) => {
    if (!value) return null;
    const lower = value.toLowerCase();
    if (lower.startsWith("ko")) return "ko";
    if (lower.startsWith("ja")) return "ja";
    if (lower.startsWith("zh")) return "zh-Hans";
    if (lower.startsWith("en")) return "en";
    return null;
  };

  const preferredLanguage = () => {
    const hashLanguage = normalize(window.location.hash.slice(1));
    if (hashLanguage) return hashLanguage;

    const savedLanguage = normalize(localStorage.getItem("kkori-language"));
    if (savedLanguage) return savedLanguage;

    for (const language of navigator.languages || [navigator.language]) {
      const normalized = normalize(language);
      if (normalized) return normalized;
    }

    return "en";
  };

  const selectLanguage = (language, updateHash = true) => {
    const selected = supported.includes(language) ? language : "en";
    sections.forEach((section) => {
      section.hidden = section.lang !== selected;
    });
    buttons.forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    document.documentElement.lang = selected;
    localStorage.setItem("kkori-language", selected);
    if (updateHash && window.location.hash !== `#${selected}`) {
      history.replaceState(null, "", `#${selected}`);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => selectLanguage(button.dataset.lang));
  });

  window.addEventListener("hashchange", () => selectLanguage(preferredLanguage(), false));
  selectLanguage(preferredLanguage(), Boolean(window.location.hash));
})();
