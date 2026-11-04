(function () {
  var cfg = window.SITE_CONFIG || {};

  // Fill in shared text/links from config
  document.querySelectorAll("[data-brand]").forEach(function (el) { el.textContent = cfg.brandName; });
  document.querySelectorAll("[data-consultant]").forEach(function (el) { el.textContent = cfg.consultantName; });
  document.querySelectorAll("[data-location]").forEach(function (el) { el.textContent = cfg.location; });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = cfg.email; el.href = "mailto:" + cfg.email;
  });
  document.querySelectorAll("[data-phone]").forEach(function (el) {
    el.textContent = cfg.phone; el.href = "tel:" + String(cfg.phone).replace(/\s/g, "");
  });
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.href = "https://wa.me/" + cfg.whatsapp;
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Booking page: Calendly inline widget
  var widget = document.getElementById("calendly-embed");
  if (!widget) return;

  var picker = document.getElementById("service-select");
  var params = new URLSearchParams(window.location.search);
  var initial = params.get("service") || "discovery";
  if (picker && picker.querySelector('option[value="' + initial + '"]')) picker.value = initial;

  function urlFor(service) {
    var links = cfg.serviceLinks || {};
    var base = (links[service] && links[service].trim()) || cfg.CALENDLY_URL;
    var sep = base.indexOf("?") === -1 ? "?" : "&";
    return base + sep + "hide_gdpr_banner=1&primary_color=2f6b3a";
  }

  function render() {
    var service = picker ? picker.value : "discovery";
    widget.innerHTML = "";
    var fallback = document.getElementById("calendly-fallback");
    if (fallback) fallback.href = urlFor(service);
    if (window.Calendly && window.Calendly.initInlineWidget) {
      window.Calendly.initInlineWidget({ url: urlFor(service), parentElement: widget });
    }
  }

  if (picker) picker.addEventListener("change", render);

  if (window.Calendly) render();
  else {
    var s = document.querySelector('script[src*="calendly.com"]');
    if (s) s.addEventListener("load", render);
  }
})();
