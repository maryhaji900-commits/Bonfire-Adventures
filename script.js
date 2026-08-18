/* ==========================================================================
   BONFIRE ADVENTURES — SHARED SITE BEHAVIOUR
   Loaded on every page after data.js. Exposes window.Bonfire with helpers
   used by page-specific scripts (packages.html, hotels.html, etc.)
   ========================================================================== */

const Bonfire = (function () {
  const WHATSAPP_NUMBER = "254789186899"; // Bonfire Advisor line — displayed as 0789 186899

  /* ---------------- navigation ---------------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // highlight current page link
    const path = location.pathname.split("/").pop() || "index.html";
    nav.querySelectorAll("a").forEach(function (a) {
      const href = a.getAttribute("href").split("/").pop();
      if (href === path) a.classList.add("is-active");
    });
  }

  function initFooterYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------------- WhatsApp / Advisor ---------------- */
  function buildWhatsAppLink(details) {
    const lines = [];
    lines.push("Hi Bonfire Adventures, I'd like to enquire about:");
    if (details.product) lines.push("Product: " + details.product);
    if (details.destination) lines.push("Destination: " + details.destination);
    if (details.dates) lines.push("Dates: " + details.dates);
    if (details.travellers) lines.push("Travellers: " + details.travellers);
    if (details.budget) lines.push("Budget: " + details.budget);
    if (details.options) lines.push("Options: " + details.options);
    if (details.custom) lines.push(details.custom);
    const text = encodeURIComponent(lines.join("\n"));
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
  }

  function initWhatsAppButtons() {
    document.querySelectorAll("[data-whatsapp]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const details = {
          product: btn.getAttribute("data-product") || "",
          destination: btn.getAttribute("data-destination") || "",
          custom: btn.getAttribute("data-message") || ""
        };
        btn.setAttribute("href", buildWhatsAppLink(details));
      });
    });
  }

  /* ---------------- formatting helpers ---------------- */
  const formatKES = BONFIRE_DATA.formatKES;

  function stars(rating) {
    const full = Math.round(rating);
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  /* ---------------- card renderers ---------------- */
  function packageCardHTML(pkg) {
    const dest = BONFIRE_DATA.getDestinationById(pkg.destinationId);
    return (
      '<article class="card" data-analytics="package-card" data-id="' + pkg.id + '">' +
        '<div class="card-media"><span class="badge">' + pkg.duration + '</span>' +
          '<span class="rating">★ ' + pkg.rating + ' (' + pkg.reviewCount + ')</span></div>' +
        '<div class="card-body">' +
          '<div class="card-loc">' + (dest ? dest.name : pkg.region) + ' · ' + pkg.region + '</div>' +
          '<h3 class="card-title">' + pkg.name + '</h3>' +
          '<p class="card-desc">' + pkg.desc + '</p>' +
          '<div class="card-tags">' + pkg.experiences.slice(0, 3).map(function (t) { return "<span>" + t + "</span>"; }).join("") + '</div>' +
          '<div class="card-foot">' +
            '<div class="price">' + formatKES(pkg.price) + '<br><small>' + pkg.priceBasis + '</small></div>' +
            '<div class="card-actions">' +
              '<a class="btn btn-ghost btn-sm" href="pages/packages.html?id=' + pkg.id + '" data-analytics="package-view">View</a>' +
              '<a class="btn btn-primary btn-sm" data-whatsapp data-product="' + pkg.name + '" data-destination="' + (dest ? dest.name : pkg.region) + '" target="_blank" rel="noopener" data-analytics="request-quote">Request Quote</a>' +
            '</div>' +
          '</div>' +
          '<label class="card-compare-toggle"><input type="checkbox" data-compare-add data-compare-type="package" data-compare-id="' + pkg.id + '"> Add to Compare</label>' +
        '</div>' +
      '</article>'
    );
  }

  function hotelCardHTML(h) {
    return (
      '<article class="card" data-analytics="hotel-card" data-id="' + h.id + '">' +
        '<div class="card-media"><span class="badge">' + h.type + '</span>' +
          '<span class="rating">★ ' + h.rating + ' (' + h.reviewCount + ')</span></div>' +
        '<div class="card-body">' +
          '<div class="card-loc">' + h.area + ', ' + h.town + '</div>' +
          '<h3 class="card-title">' + h.name + '</h3>' +
          '<p class="card-desc">' + h.desc + '</p>' +
          '<div class="card-tags">' + h.amenities.slice(0, 3).map(function (t) { return "<span>" + t + "</span>"; }).join("") + '</div>' +
          '<div class="card-foot">' +
            '<div class="price">' + formatKES(h.priceFrom) + '<br><small>from · ' + h.priceBasis + '</small></div>' +
            '<div class="card-actions">' +
              '<a class="btn btn-ghost btn-sm" href="pages/hotels.html?id=' + h.id + '" data-analytics="hotel-view">View</a>' +
              '<a class="btn btn-primary btn-sm" data-whatsapp data-product="' + h.name + '" data-destination="' + h.town + '" target="_blank" rel="noopener" data-analytics="request-quote">Request Quote</a>' +
            '</div>' +
          '</div>' +
          '<label class="card-compare-toggle"><input type="checkbox" data-compare-add data-compare-type="hotel" data-compare-id="' + h.id + '"> Add to Compare</label>' +
        '</div>' +
      '</article>'
    );
  }

  function dealCardHTML(deal) {
    const savings = deal.originalPrice - deal.dealPrice;
    return (
      '<article class="card" data-analytics="deal-card" data-id="' + deal.id + '">' +
        '<div class="card-media"><span class="badge">' + deal.category + '</span>' +
          '<span class="rating">Save ' + formatKES(savings) + '</span></div>' +
        '<div class="card-body">' +
          '<div class="card-loc">Valid until ' + new Date(deal.validUntil).toLocaleDateString("en-KE", { day: "numeric", month: "short", year: "numeric" }) + '</div>' +
          '<h3 class="card-title">' + deal.title + '</h3>' +
          '<p class="card-desc">Travel period: ' + deal.travelPeriod + '</p>' +
          '<div class="card-tags">' + deal.inclusions.slice(0, 3).map(function (t) { return "<span>" + t + "</span>"; }).join("") + '</div>' +
          '<div class="card-foot">' +
            '<div class="price"><span class="was">' + formatKES(deal.originalPrice) + '</span>' + formatKES(deal.dealPrice) + '<br><small>per person</small></div>' +
            '<div class="card-actions">' +
              '<a class="btn btn-primary btn-sm" data-whatsapp data-product="' + deal.title + '" target="_blank" rel="noopener" data-analytics="deal-view">Claim Deal</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function reviewCardHTML(r) {
    return (
      '<div class="review-card">' +
        '<div class="review-stars">' + stars(r.rating) + '</div>' +
        '<p class="review-quote">"' + r.text + '"</p>' +
        '<div class="review-name">' + r.name + '</div>' +
        '<div class="review-meta">' + r.context + '</div>' +
      '</div>'
    );
  }

  function emptyStateHTML(opts) {
    opts = opts || {};
    return (
      '<div class="empty-state">' +
        '<div class="icon">' + (opts.icon || "🧭") + '</div>' +
        '<h3>' + (opts.title || "No results found") + '</h3>' +
        '<p>' + (opts.text || "Try a broader search, flexible dates, or talk to a Travel Advisor.") + '</p>' +
        '<div class="empty-actions">' +
          '<a class="btn btn-outline btn-sm" href="' + (opts.altHref || "../index.html") + '">' + (opts.altLabel || "Browse all") + '</a>' +
          '<a class="btn btn-whatsapp btn-sm" data-whatsapp data-message="' + (opts.waMessage || "I could not find what I was looking for, please help me plan a custom trip.") + '" target="_blank" rel="noopener">Ask a Travel Advisor</a>' +
        '</div>' +
      '</div>'
    );
  }

  /* ---------------- compare list (persisted) ---------------- */
  const COMPARE_KEY = "bonfire_compare_list";

  function getCompareList() {
    try {
      return JSON.parse(localStorage.getItem(COMPARE_KEY)) || [];
    } catch (e) { return []; }
  }

  function saveCompareList(list) {
    try { localStorage.setItem(COMPARE_KEY, JSON.stringify(list)); } catch (e) {}
    updateCompareBadge();
  }

  function addToCompare(type, id) {
    const list = getCompareList();
    if (list.some(function (i) { return i.type === type && i.id === id; })) return list;
    if (list.length >= 4) {
      alert("You can compare up to 4 items at a time. Remove one first.");
      return list;
    }
    list.push({ type: type, id: id });
    saveCompareList(list);
    return list;
  }

  function removeFromCompare(type, id) {
    const list = getCompareList().filter(function (i) { return !(i.type === type && i.id === id); });
    saveCompareList(list);
    return list;
  }

  function clearCompare() { saveCompareList([]); }

  function updateCompareBadge() {
    const badge = document.querySelector("[data-compare-count]");
    if (badge) badge.textContent = getCompareList().length;
  }

  function initCompareToggles() {
    document.addEventListener("change", function (e) {
      const el = e.target;
      if (!el.matches("[data-compare-add]")) return;
      const type = el.getAttribute("data-compare-type");
      const id = el.getAttribute("data-compare-id");
      if (el.checked) addToCompare(type, id);
      else removeFromCompare(type, id);
    });
    // reflect existing state on load
    const list = getCompareList();
    document.querySelectorAll("[data-compare-add]").forEach(function (el) {
      const type = el.getAttribute("data-compare-type");
      const id = el.getAttribute("data-compare-id");
      if (list.some(function (i) { return i.type === type && i.id === id; })) el.checked = true;
    });
    updateCompareBadge();
  }

  /* ---------------- global search (header) ---------------- */
  function buildSearchIndex() {
    const idx = [];
    BONFIRE_DATA.PACKAGES.forEach(function (p) { idx.push({ type: "Package", label: p.name, sub: p.region, href: "pages/packages.html?id=" + p.id }); });
    BONFIRE_DATA.HOTELS.forEach(function (h) { idx.push({ type: "Hotel/B&B", label: h.name, sub: h.town, href: "pages/hotels.html?id=" + h.id }); });
    BONFIRE_DATA.DESTINATIONS.forEach(function (d) { idx.push({ type: "Destination", label: d.name, sub: d.category, href: "pages/destinations.html?id=" + d.id }); });
    BONFIRE_DATA.DEALS.forEach(function (d) { idx.push({ type: "Deal", label: d.title, sub: d.category, href: "pages/deals.html?id=" + d.id }); });
    return idx;
  }

  function initGlobalSearch() {
    const input = document.querySelector("[data-global-search]");
    const results = document.querySelector("[data-global-search-results]");
    if (!input || !results) return;
    const index = buildSearchIndex();
    function render(items) {
      if (!items.length) { results.innerHTML = '<div class="gs-empty">No matches — try a broader term or ask an Advisor.</div>'; results.hidden = false; return; }
      results.innerHTML = items.slice(0, 8).map(function (i) {
        return '<a class="gs-item" href="' + i.href + '"><span class="gs-type">' + i.type + '</span>' + i.label + '<span class="gs-sub">' + i.sub + '</span></a>';
      }).join("");
      results.hidden = false;
    }
    input.addEventListener("input", function () {
      const q = input.value.trim().toLowerCase();
      if (!q) { results.hidden = true; return; }
      render(index.filter(function (i) { return i.label.toLowerCase().indexOf(q) !== -1 || i.sub.toLowerCase().indexOf(q) !== -1; }));
    });
    document.addEventListener("click", function (e) {
      if (!results.contains(e.target) && e.target !== input) results.hidden = true;
    });
  }

  /* ---------------- init ---------------- */
  function init() {
    initNav();
    initFooterYear();
    initWhatsAppButtons();
    initCompareToggles();
    initGlobalSearch();
  }

  document.addEventListener("DOMContentLoaded", init);

  return {
    formatKES: formatKES,
    stars: stars,
    buildWhatsAppLink: buildWhatsAppLink,
    initWhatsAppButtons: initWhatsAppButtons,
    packageCardHTML: packageCardHTML,
    hotelCardHTML: hotelCardHTML,
    dealCardHTML: dealCardHTML,
    reviewCardHTML: reviewCardHTML,
    emptyStateHTML: emptyStateHTML,
    getCompareList: getCompareList,
    addToCompare: addToCompare,
    removeFromCompare: removeFromCompare,
    clearCompare: clearCompare,
    updateCompareBadge: updateCompareBadge
  };
})();
