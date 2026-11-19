/**
 * 99MOBILES / SPECNOVA - Dynamic Application Engine
 * Handles State, Filter/Search, Compare Matrix, Modal Sheet & Theme Management
 */

(function () {
  'use strict';

  // Inline Fallback SVG Generator for Offline / Blocked Images
  function getDeviceFallbackSvg(phoneName, brand) {
    const safeBrand = encodeURIComponent(brand || 'SMARTPHONE');
    const safeName = encodeURIComponent((phoneName || '').slice(0, 22));
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="100%" height="100%" fill="%23111113"/><rect x="110" y="40" width="180" height="320" rx="28" fill="%231a1a1e" stroke="%23333338" stroke-width="3"/><rect x="120" y="55" width="160" height="290" rx="18" fill="%23050505"/><circle cx="200" cy="70" r="4" fill="%2355555e"/><text x="200" y="190" font-family="sans-serif" font-weight="bold" font-size="13" fill="%23ffffff" text-anchor="middle">${safeBrand}</text><text x="200" y="212" font-family="sans-serif" font-size="11" fill="%23888888" text-anchor="middle">${safeName}</text></svg>`;
  }

  // Application State
  const state = {
    phones: [...SMARTPHONES_DATA],
    filteredPhones: [...SMARTPHONES_DATA],
    brand: 'all',
    category: 'all',
    searchQuery: '',
    maxPrice: 2000,
    minRam: 0,
    selectedFeatures: [],
    sortBy: 'popular',
    currency: localStorage.getItem('specnova_currency') || 'USD',
    theme: localStorage.getItem('specnova_theme') || 'dark',
    compareList: JSON.parse(localStorage.getItem('specnova_compare') || '[]'),
    favorites: JSON.parse(localStorage.getItem('specnova_favorites') || '[]'),
    highlightDiffs: false
  };

  // DOM Elements
  const DOM = {
    phoneGrid: document.getElementById('phoneGrid'),
    phoneCountBadge: document.getElementById('phoneCountBadge'),
    brandsContainer: document.getElementById('brandsContainer'),
    categoryFilterNav: document.getElementById('categoryFilterNav'),
    searchInput: document.getElementById('searchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    searchResultsDropdown: document.getElementById('searchResultsDropdown'),
    sortSelect: document.getElementById('sortSelect'),
    priceRange: document.getElementById('priceRange'),
    priceDisplay: document.getElementById('priceDisplay'),
    featureCheckboxes: document.querySelectorAll('.feature-filter-cb'),
    currencySelector: document.getElementById('currencySelector'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    compareDock: document.getElementById('compareDock'),
    dockSlots: document.getElementById('dockSlots'),
    compareCountBadge: document.getElementById('compareCountBadge'),
    dockCompareBtn: document.getElementById('dockCompareBtn'),
    dockClearBtn: document.getElementById('dockClearBtn'),
    favoritesCountBadge: document.getElementById('favoritesCountBadge'),
    specModal: new bootstrap.Modal(document.getElementById('specModal')),
    compareModal: new bootstrap.Modal(document.getElementById('compareModal')),
    phoneFinderModal: new bootstrap.Modal(document.getElementById('phoneFinderModal')),
    specModalContent: document.getElementById('specModalContent'),
    compareModalContent: document.getElementById('compareModalContent'),
    toastContainer: document.getElementById('toastContainer'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    featuredPhoneCard: document.getElementById('featuredPhoneCard')
  };

  // Currency Converter Utility
  function formatPrice(usdPrice) {
    const cur = CURRENCIES[state.currency] || CURRENCIES.USD;
    let converted;
    if (state.currency === 'USD') converted = usdPrice;
    else if (state.currency === 'EUR') converted = Math.round(usdPrice * cur.rate);
    else if (state.currency === 'GBP') converted = Math.round(usdPrice * cur.rate);
    else if (state.currency === 'INR') converted = Math.round(usdPrice * cur.rate);
    else converted = Math.round(usdPrice * cur.rate);

    return `${cur.symbol}${converted.toLocaleString()}`;
  }

  // Toast Notification System
  function showToast(message, icon = 'info-circle') {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
      <i class="bi bi-${icon} fs-5"></i>
      <span class="flex-grow-1">${message}</span>
      <button type="button" class="btn-close btn-close-white ms-auto" aria-label="Close"></button>
    `;

    toast.querySelector('.btn-close').addEventListener('click', () => toast.remove());
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // Theme Initializer
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('specnova_theme', state.theme);
    updateThemeIcon();
    showToast(`Switched to ${state.theme === 'dark' ? 'OLED Dark' : 'Studio Light'} Mode`, 'palette');
  }

  function updateThemeIcon() {
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.innerHTML = state.theme === 'dark' 
        ? '<i class="bi bi-sun"></i>' 
        : '<i class="bi bi-moon-stars"></i>';
    }
  }

  // Render Brands Carousel / Grid
  function renderBrands() {
    if (!DOM.brandsContainer) return;
    DOM.brandsContainer.innerHTML = BRAND_LIST.map(brand => {
      const isActive = (state.brand === brand.slug || (state.brand === 'all' && brand.slug === 'all'));
      return `
        <div class="brand-chip ${isActive ? 'active' : ''}" data-brand="${brand.slug}">
          <i class="bi bi-${brand.logo} brand-chip-icon"></i>
          <div>
            <div class="fw-bold fs-6">${brand.name}</div>
            <small class="text-secondary" style="font-size:0.75rem;">${brand.country ? brand.country : 'Worldwide'}</small>
          </div>
        </div>
      `;
    }).join('');

    DOM.brandsContainer.querySelectorAll('.brand-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.brand = chip.dataset.brand;
        renderBrands();
        applyFilters();
      });
    });
  }

  // Render Featured Hero Device
  function renderFeaturedHero() {
    if (!DOM.featuredPhoneCard) return;
    const flagship = state.phones[0]; // Samsung S24 Ultra or iPhone 16 Pro Max
    DOM.featuredPhoneCard.innerHTML = `
      <div class="row g-4 align-items-center">
        <div class="col-md-5 text-center">
          <img src="${flagship.image}" alt="${flagship.name}" class="featured-device-img shadow" onerror="this.onerror=null; this.src=window.SpecNova.getFallback('${flagship.name.replace(/'/g, "\\'")}', '${flagship.brand}');">
        </div>
        <div class="col-md-7">
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="badge bg-light text-dark px-2 py-1">${flagship.brand}</span>
            <span class="brand-pill"><i class="bi bi-award-fill me-1"></i>${flagship.badge}</span>
            <span class="ms-auto text-secondary mono-tag fs-6"><i class="bi bi-star-fill text-warning me-1"></i>${flagship.userRating} / 5</span>
          </div>
          <h2 class="fw-bold mb-1">${flagship.name}</h2>
          <p class="text-secondary small mb-3">${flagship.tagline}</p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <div class="quick-spec-pill"><i class="bi bi-cpu"></i> SD 8 Gen 3 (4nm)</div>
            <div class="quick-spec-pill"><i class="bi bi-camera"></i> 200MP Quad OIS</div>
            <div class="quick-spec-pill"><i class="bi bi-display"></i> 120Hz LTPO AMOLED</div>
            <div class="quick-spec-pill"><i class="bi bi-battery-charging"></i> 5000mAh 45W</div>
          </div>

          <div class="d-flex align-items-center justify-content-between pt-2 border-top border-secondary">
            <div>
              <small class="text-secondary d-block">Starting from</small>
              <span class="fs-3 fw-bold text-white">${formatPrice(flagship.price.USD)}</span>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-light btn-sm px-3 rounded-pill" onclick="window.SpecNova.openSpecModal('${flagship.id}')">
                <i class="bi bi-info-circle me-1"></i> Full Specs
              </button>
              <button class="btn btn-light btn-sm px-3 rounded-pill text-dark fw-bold" onclick="window.SpecNova.toggleCompare('${flagship.id}')">
                <i class="bi bi-plus-lg me-1"></i> Compare
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Filter & Search Engine
  function applyFilters() {
    let list = [...state.phones];

    // Filter by Brand
    if (state.brand && state.brand !== 'all') {
      list = list.filter(p => p.brand.toLowerCase() === state.brand.toLowerCase());
    }

    // Filter by Category
    if (state.category && state.category !== 'all') {
      list = list.filter(p => p.category.includes(state.category));
    }

    // Filter by Search Query
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.keySpecs.processor.toLowerCase().includes(q) ||
        p.keySpecs.rearCamera.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q)
      );
    }

    // Filter by Max Price
    list = list.filter(p => p.price.USD <= state.maxPrice);

    // Filter by Selected Features
    if (state.selectedFeatures.length > 0) {
      list = list.filter(phone => {
        return state.selectedFeatures.every(feat => {
          if (feat === '5g') return phone.detailedSpecs.connectivity.fiveG.includes('5G');
          if (feat === 'wireless') return phone.detailedSpecs.battery.wirelessCharging && !phone.detailedSpecs.battery.wirelessCharging.includes('No');
          if (feat === 'ip68') return phone.detailedSpecs.build.ipRating.includes('IP68');
          if (feat === '120hz') return phone.keySpecs.display.includes('120Hz') || phone.keySpecs.display.includes('144Hz') || phone.keySpecs.display.includes('165Hz');
          if (feat === 'jack') return phone.detailedSpecs.connectivity.audioJack.includes('Yes');
          if (feat === 'periscope') return phone.detailedSpecs.camera.periscope && !phone.detailedSpecs.camera.periscope.includes('None');
          if (feat === 'sd-card') return phone.detailedSpecs.performance.storageType.includes('MicroSD') || phone.detailedSpecs.connectivity.sim.includes('MicroSD');
          return true;
        });
      });
    }

    // Sort
    if (state.sortBy === 'score-high') {
      list.sort((a, b) => b.specScore - a.specScore);
    } else if (state.sortBy === 'price-low') {
      list.sort((a, b) => a.price.USD - b.price.USD);
    } else if (state.sortBy === 'price-high') {
      list.sort((a, b) => b.price.USD - a.price.USD);
    } else if (state.sortBy === 'rating') {
      list.sort((a, b) => b.userRating - a.userRating);
    } else {
      // Popular (default)
      list.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    state.filteredPhones = list;
    renderPhoneGrid();
  }

  // Render Phone Cards
  function renderPhoneGrid() {
    if (!DOM.phoneGrid) return;

    if (DOM.phoneCountBadge) {
      DOM.phoneCountBadge.textContent = `${state.filteredPhones.length} Devices`;
    }

    if (state.filteredPhones.length === 0) {
      DOM.phoneGrid.innerHTML = `
        <div class="col-12 py-5 text-center">
          <div class="mb-3 text-secondary"><i class="bi bi-search display-3"></i></div>
          <h4 class="fw-bold mb-2">No Matching Smartphones Found</h4>
          <p class="text-secondary max-w-md mx-auto mb-4">Try adjusting your filters, budget slider, or searching for other keywords.</p>
          <button class="btn btn-outline-light rounded-pill px-4" id="emptyResetBtn">
            <i class="bi bi-arrow-counterclockwise me-1"></i> Reset All Filters
          </button>
        </div>
      `;
      const btn = document.getElementById('emptyResetBtn');
      if (btn) btn.addEventListener('click', resetFilters);
      return;
    }

    DOM.phoneGrid.innerHTML = state.filteredPhones.map(phone => {
      const isFav = state.favorites.includes(phone.id);
      const isComparing = state.compareList.includes(phone.id);

      return `
        <div class="col-xl-4 col-md-6 mb-4">
          <div class="phone-card">
            <div class="phone-card-image-wrap">
              <span class="spec-score-badge">
                <i class="bi bi-shield-check"></i> ${phone.specScore}/100
              </span>
              <button class="phone-card-fav-btn ${isFav ? 'active' : ''}" 
                      onclick="window.SpecNova.toggleFavorite('${phone.id}')" 
                      title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
                <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
              </button>
              <img src="${phone.image}" alt="${phone.name}" class="phone-img" loading="lazy" onerror="this.onerror=null; this.src=window.SpecNova.getFallback('${phone.name.replace(/'/g, "\\'")}', '${phone.brand}');">
            </div>

            <div class="phone-card-body">
              <div class="device-brand-tag">${phone.brand}</div>
              <h3 class="device-name">${phone.name}</h3>
              
              <div class="device-price-row">
                <span class="device-price">${formatPrice(phone.price.USD)}</span>
                <span class="device-status-badge"><i class="bi bi-star-fill text-warning me-1"></i>${phone.userRating} (${phone.reviewCount})</span>
              </div>

              <div class="card-spec-grid">
                <div class="spec-cell" title="Display: ${phone.keySpecs.display}">
                  <i class="bi bi-display"></i>
                  <span>${phone.detailedSpecs.display.size.split(' ')[0]} ${phone.detailedSpecs.display.refreshRate.split(' ')[0]}</span>
                </div>
                <div class="spec-cell" title="Chipset: ${phone.keySpecs.processor}">
                  <i class="bi bi-cpu"></i>
                  <span>${phone.detailedSpecs.performance.chipset.split('(')[0]}</span>
                </div>
                <div class="spec-cell" title="Rear Camera: ${phone.keySpecs.rearCamera}">
                  <i class="bi bi-camera"></i>
                  <span>${phone.detailedSpecs.camera.rearSetup.split('(')[0]}</span>
                </div>
                <div class="spec-cell" title="Battery: ${phone.keySpecs.batteryCharging}">
                  <i class="bi bi-battery-charging"></i>
                  <span>${phone.detailedSpecs.battery.capacity.split(' ')[0]} mAh</span>
                </div>
              </div>

              <div class="card-actions-row">
                <button class="btn-spec-primary" onclick="window.SpecNova.openSpecModal('${phone.id}')">
                  <i class="bi bi-file-earmark-text"></i> Full Specs
                </button>
                <button class="btn-spec-outline ${isComparing ? 'active-compare' : ''}" 
                        onclick="window.SpecNova.toggleCompare('${phone.id}')"
                        title="Add to compare dock">
                  <i class="bi ${isComparing ? 'bi-check-lg' : 'bi-plus-lg'}"></i>
                  <span>${isComparing ? 'Added' : 'Compare'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Live Search Autocomplete Dropdown
  function setupLiveSearch() {
    if (!DOM.searchInput) return;

    DOM.searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      state.searchQuery = q;

      if (DOM.searchClearBtn) {
        DOM.searchClearBtn.style.display = q ? 'block' : 'none';
      }

      if (q.length === 0) {
        DOM.searchResultsDropdown.style.display = 'none';
        applyFilters();
        return;
      }

      const matches = state.phones.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.keySpecs.processor.toLowerCase().includes(q)
      ).slice(0, 5);

      if (matches.length > 0) {
        DOM.searchResultsDropdown.innerHTML = matches.map(phone => `
          <div class="search-result-item" onclick="window.SpecNova.openSpecModal('${phone.id}'); document.getElementById('searchResultsDropdown').style.display='none';">
            <img src="${phone.image}" alt="${phone.name}" class="search-thumb">
            <div class="flex-grow-1 overflow-hidden">
              <div class="fw-bold text-truncate">${phone.name}</div>
              <small class="text-secondary d-block text-truncate">${phone.keySpecs.processor}</small>
            </div>
            <div class="fw-bold text-end">
              <div>${formatPrice(phone.price.USD)}</div>
              <small class="text-secondary"><i class="bi bi-shield-check text-success"></i> ${phone.specScore}</small>
            </div>
          </div>
        `).join('');
        DOM.searchResultsDropdown.style.display = 'block';
      } else {
        DOM.searchResultsDropdown.innerHTML = `
          <div class="p-3 text-center text-secondary small">
            No devices found matching "${q}"
          </div>
        `;
        DOM.searchResultsDropdown.style.display = 'block';
      }

      applyFilters();
    });

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        DOM.searchInput.value = '';
        state.searchQuery = '';
        DOM.searchClearBtn.style.display = 'none';
        DOM.searchResultsDropdown.style.display = 'none';
        applyFilters();
      });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        if (DOM.searchResultsDropdown) DOM.searchResultsDropdown.style.display = 'none';
      }
    });
  }

  // Full Specifications Modal Renderer
  function openSpecModal(phoneId) {
    const phone = state.phones.find(p => p.id === phoneId);
    if (!phone || !DOM.specModalContent) return;

    const isFav = state.favorites.includes(phone.id);
    const isComp = state.compareList.includes(phone.id);

    DOM.specModalContent.innerHTML = `
      <div class="custom-modal-header">
        <div class="d-flex align-items-center gap-3">
          <div class="brand-icon-box fs-5"><i class="bi bi-phone"></i></div>
          <div>
            <div class="text-secondary small mono-tag">${phone.brand} • ${phone.releaseDate}</div>
            <h4 class="fw-bold mb-0">${phone.name}</h4>
          </div>
        </div>
        <button type="button" class="modal-close-btn" data-bs-dismiss="modal">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="modal-body p-4">
        <!-- Overview Banner -->
        <div class="row g-4 mb-4 align-items-center">
          <div class="col-lg-4 text-center">
            <img src="${phone.image}" alt="${phone.name}" class="img-fluid rounded-4 shadow" style="max-height: 280px; object-fit: cover;" onerror="this.onerror=null; this.src=window.SpecNova.getFallback('${phone.name.replace(/'/g, "\\'")}', '${phone.brand}');">
            <div class="mt-3 d-flex justify-content-center gap-2">
              <span class="badge bg-dark border border-secondary px-3 py-2 fs-6">
                <i class="bi bi-shield-check text-light"></i> Spec Score: ${phone.specScore}/100
              </span>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="brand-pill"><i class="bi bi-award me-1"></i>${phone.badge}</span>
              <span class="fs-4 fw-bold">${formatPrice(phone.price.USD)}</span>
            </div>
            <h5 class="fw-bold">${phone.tagline}</h5>
            <p class="text-secondary small mb-4">${phone.keySpecs.os} • ${phone.keySpecs.weight}</p>

            <!-- Storage Variants Table -->
            <div class="mb-4">
              <div class="text-secondary small fw-bold text-uppercase mb-2">Official Configuration Variants</div>
              <div class="d-flex flex-wrap gap-2">
                ${phone.variants.map(v => `
                  <div class="p-2 px-3 rounded-3 bg-dark border border-secondary text-center">
                    <div class="fw-bold small">${v.ram} + ${v.storage}</div>
                    <div class="text-secondary" style="font-size:0.8rem;">${formatPrice(v.priceUSD)}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="d-flex gap-2">
              <button class="btn btn-light px-4 py-2 rounded-pill fw-bold text-dark" onclick="window.SpecNova.toggleCompare('${phone.id}')">
                <i class="bi ${isComp ? 'bi-check2' : 'bi-plus-lg'} me-1"></i> ${isComp ? 'In Comparison' : 'Add to Compare'}
              </button>
              <button class="btn btn-outline-light px-4 py-2 rounded-pill" onclick="window.SpecNova.toggleFavorite('${phone.id}')">
                <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'} me-1"></i> ${isFav ? 'Saved' : 'Save Device'}
              </button>
            </div>
          </div>
        </div>

        <!-- Pros & Cons Grid -->
        <div class="row g-3 mb-4">
          <div class="col-md-6">
            <div class="pros-box">
              <div class="fw-bold text-uppercase small text-success"><i class="bi bi-hand-thumbs-up me-1"></i> Key Strengths</div>
              <ul class="pros-list">
                ${phone.pros.map(pro => `<li><i class="bi bi-check-circle-fill"></i><span>${pro}</span></li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="cons-box">
              <div class="fw-bold text-uppercase small text-danger"><i class="bi bi-hand-thumbs-down me-1"></i> Things to Consider</div>
              <ul class="cons-list">
                ${phone.cons.map(con => `<li><i class="bi bi-x-circle-fill"></i><span>${con}</span></li>`).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Detailed Specifications Accordion/Tables -->
        <div class="spec-section-header">
          <i class="bi bi-display"></i> Display & Screen Matrix
        </div>
        <table class="spec-table">
          <tr><td>Technology & Panel</td><td>${phone.detailedSpecs.display.type}</td></tr>
          <tr><td>Screen Size</td><td>${phone.detailedSpecs.display.size}</td></tr>
          <tr><td>Resolution</td><td>${phone.detailedSpecs.display.resolution} (${phone.detailedSpecs.display.ppi})</td></tr>
          <tr><td>Refresh Rate</td><td>${phone.detailedSpecs.display.refreshRate}</td></tr>
          <tr><td>Peak Luminance</td><td>${phone.detailedSpecs.display.peakBrightness}</td></tr>
          <tr><td>Protection Glass</td><td>${phone.detailedSpecs.display.protection}</td></tr>
          <tr><td>Display Features</td><td>${phone.detailedSpecs.display.features}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-cpu"></i> Processor, Memory & Storage
        </div>
        <table class="spec-table">
          <tr><td>SoC / Chipset</td><td>${phone.detailedSpecs.performance.chipset}</td></tr>
          <tr><td>CPU Architecture</td><td>${phone.detailedSpecs.performance.cpu}</td></tr>
          <tr><td>GPU Graphics</td><td>${phone.detailedSpecs.performance.gpu}</td></tr>
          <tr><td>RAM Configuration</td><td>${phone.detailedSpecs.performance.ram}</td></tr>
          <tr><td>Internal Storage</td><td>${phone.detailedSpecs.performance.storage} (${phone.detailedSpecs.performance.storageType})</td></tr>
          <tr><td>Thermal Architecture</td><td>${phone.detailedSpecs.performance.coolingSystem}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-camera"></i> Camera System (Rear & Front)
        </div>
        <table class="spec-table">
          <tr><td>Rear Camera Setup</td><td>${phone.detailedSpecs.camera.rearSetup}</td></tr>
          <tr><td>Primary Sensor</td><td>${phone.detailedSpecs.camera.mainSensor}</td></tr>
          ${phone.detailedSpecs.camera.periscope ? `<tr><td>Periscope / Telephoto</td><td>${phone.detailedSpecs.camera.periscope}</td></tr>` : ''}
          ${phone.detailedSpecs.camera.ultrawide ? `<tr><td>Ultrawide Angle</td><td>${phone.detailedSpecs.camera.ultrawide}</td></tr>` : ''}
          <tr><td>Video Capabilities</td><td>${phone.detailedSpecs.camera.videoRecording}</td></tr>
          <tr><td>Front Selfie Camera</td><td>${phone.detailedSpecs.camera.frontCamera}</td></tr>
          <tr><td>Optics & AI Features</td><td>${phone.detailedSpecs.camera.features}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-battery-charging"></i> Battery & Fast Charging
        </div>
        <table class="spec-table">
          <tr><td>Battery Capacity</td><td>${phone.detailedSpecs.battery.capacity}</td></tr>
          <tr><td>Wired Fast Charging</td><td>${phone.detailedSpecs.battery.wiredCharging}</td></tr>
          <tr><td>Wireless Charging</td><td>${phone.detailedSpecs.battery.wirelessCharging}</td></tr>
          <tr><td>Reverse Power Share</td><td>${phone.detailedSpecs.battery.reverseCharging}</td></tr>
          <tr><td>Battery Endurance Score</td><td>${phone.detailedSpecs.battery.batteryLifeScore}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-shield"></i> Build, Materials & Durability
        </div>
        <table class="spec-table">
          <tr><td>Dimensions</td><td>${phone.detailedSpecs.build.dimensions}</td></tr>
          <tr><td>Weight</td><td>${phone.detailedSpecs.build.weight}</td></tr>
          <tr><td>Frame & Chassis</td><td>${phone.detailedSpecs.build.frameMaterial}</td></tr>
          <tr><td>Back Cover</td><td>${phone.detailedSpecs.build.backMaterial}</td></tr>
          <tr><td>Ingress Protection</td><td>${phone.detailedSpecs.build.ipRating}</td></tr>
          <tr><td>Color Finishes</td><td>${phone.detailedSpecs.build.colors.join(', ')}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-wifi"></i> Connectivity & Sound
        </div>
        <table class="spec-table">
          <tr><td>Cellular / 5G</td><td>${phone.detailedSpecs.connectivity.fiveG}</td></tr>
          <tr><td>Wi-Fi Standard</td><td>${phone.detailedSpecs.connectivity.wifi}</td></tr>
          <tr><td>Bluetooth</td><td>${phone.detailedSpecs.connectivity.bluetooth}</td></tr>
          <tr><td>NFC Support</td><td>${phone.detailedSpecs.connectivity.nfc}</td></tr>
          <tr><td>USB Port</td><td>${phone.detailedSpecs.connectivity.usb}</td></tr>
          <tr><td>SIM Configuration</td><td>${phone.detailedSpecs.connectivity.sim}</td></tr>
          <tr><td>Audio Output</td><td>${phone.detailedSpecs.connectivity.audioJack}</td></tr>
        </table>

        <div class="spec-section-header">
          <i class="bi bi-terminal"></i> Software OS & AI Capabilities
        </div>
        <table class="spec-table">
          <tr><td>Operating System</td><td>${phone.detailedSpecs.software.osVersion} (${phone.detailedSpecs.software.customUI})</td></tr>
          <tr><td>Software Support Policy</td><td>${phone.detailedSpecs.software.promisedUpdates}</td></tr>
          <tr><td>On-Device AI Engine</td><td>${phone.detailedSpecs.software.aiFeatures}</td></tr>
        </table>
      </div>
    `;

    DOM.specModal.show();
  }

  // Compare Dock & Matrix
  function updateCompareDock() {
    if (!DOM.compareDock) return;

    const count = state.compareList.length;
    if (DOM.compareCountBadge) DOM.compareCountBadge.textContent = count;

    if (count > 0) {
      DOM.compareDock.classList.add('visible');
    } else {
      DOM.compareDock.classList.remove('visible');
    }

    // Render slots (up to 4)
    if (DOM.dockSlots) {
      let slotsHtml = '';
      for (let i = 0; i < 4; i++) {
        const phoneId = state.compareList[i];
        if (phoneId) {
          const phone = state.phones.find(p => p.id === phoneId);
          slotsHtml += `
            <div class="dock-slot filled" title="${phone ? phone.name : ''}">
              <img src="${phone ? phone.image : ''}" alt="">
              <span class="dock-remove-btn" onclick="window.SpecNova.removeFromCompare('${phoneId}')">&times;</span>
            </div>
          `;
        } else {
          slotsHtml += `<div class="dock-slot text-muted small"><i class="bi bi-plus"></i></div>`;
        }
      }
      DOM.dockSlots.innerHTML = slotsHtml;
    }

    localStorage.setItem('specnova_compare', JSON.stringify(state.compareList));
  }

  function toggleCompare(phoneId) {
    const idx = state.compareList.indexOf(phoneId);
    if (idx > -1) {
      state.compareList.splice(idx, 1);
      showToast('Removed device from comparison', 'dash-circle');
    } else {
      if (state.compareList.length >= 4) {
        showToast('You can compare a maximum of 4 devices simultaneously.', 'exclamation-triangle');
        return;
      }
      state.compareList.push(phoneId);
      const phone = state.phones.find(p => p.id === phoneId);
      showToast(`Added ${phone ? phone.name : 'device'} to comparison dock`, 'plus-circle');
    }

    updateCompareDock();
    renderPhoneGrid();
  }

  function removeFromCompare(phoneId) {
    const idx = state.compareList.indexOf(phoneId);
    if (idx > -1) {
      state.compareList.splice(idx, 1);
      updateCompareDock();
      renderPhoneGrid();
      if (document.getElementById('compareModal').classList.contains('show')) {
        renderCompareMatrix();
      }
    }
  }

  function clearCompare() {
    state.compareList = [];
    updateCompareDock();
    renderPhoneGrid();
    showToast('Comparison dock cleared', 'trash');
  }

  // Side-by-Side Comparison Matrix Renderer
  function renderCompareMatrix() {
    if (state.compareList.length === 0) {
      showToast('Select at least 2 smartphones to compare specs.', 'info-circle');
      return;
    }

    const phones = state.compareList.map(id => state.phones.find(p => p.id === id)).filter(Boolean);

    DOM.compareModalContent.innerHTML = `
      <div class="custom-modal-header">
        <div class="d-flex align-items-center gap-3">
          <div class="brand-icon-box fs-5"><i class="bi bi-arrow-left-right"></i></div>
          <div>
            <h4 class="fw-bold mb-0">Side-by-Side Technical Comparison</h4>
            <small class="text-secondary">Comparing ${phones.length} flagship devices worldwide</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-light rounded-pill" id="toggleDiffBtn">
            <i class="bi bi-eye me-1"></i> Highlight Differences
          </button>
          <button type="button" class="modal-close-btn" data-bs-dismiss="modal">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>

      <div class="modal-body p-0 overflow-auto">
        <div class="table-responsive">
          <table class="compare-matrix-table">
            <thead>
              <tr>
                <th style="min-width: 180px; width: 20%;">Device</th>
                ${phones.map(p => `
                  <th style="min-width: 240px; text-align: center;">
                    <div class="position-relative p-2">
                      <button class="btn-close btn-close-white position-absolute top-0 end-0" 
                              onclick="window.SpecNova.removeFromCompare('${p.id}')" 
                              title="Remove from comparison"></button>
                      <img src="${p.image}" alt="${p.name}" class="rounded-3 mb-2" style="height: 120px; object-fit: cover;">
                      <div class="text-secondary small mono-tag">${p.brand}</div>
                      <h6 class="fw-bold mb-1">${p.name}</h6>
                      <div class="fw-bold fs-5 mb-2">${formatPrice(p.price.USD)}</div>
                      <span class="badge bg-light text-dark mb-2">Score: ${p.specScore}/100</span>
                    </div>
                  </th>
                `).join('')}
              </tr>
            </thead>
            <tbody>
              <!-- Rating & Score -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">General Rating</th></tr>
              <tr><td>User Rating</td>${phones.map(p => `<td>★ ${p.userRating} / 5 (${p.reviewCount} reviews)</td>`).join('')}</tr>
              <tr><td>Launch Date</td>${phones.map(p => `<td>${p.releaseDate}</td>`).join('')}</tr>

              <!-- Display -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Display & Touch</th></tr>
              <tr class="spec-row"><td>Display Type</td>${phones.map(p => `<td>${p.detailedSpecs.display.type}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Screen Size</td>${phones.map(p => `<td>${p.detailedSpecs.display.size}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Resolution & PPI</td>${phones.map(p => `<td>${p.detailedSpecs.display.resolution} (${p.detailedSpecs.display.ppi})</td>`).join('')}</tr>
              <tr class="spec-row"><td>Refresh Rate</td>${phones.map(p => `<td>${p.detailedSpecs.display.refreshRate}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Peak Brightness</td>${phones.map(p => `<td>${p.detailedSpecs.display.peakBrightness}</td>`).join('')}</tr>

              <!-- Hardware -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Hardware & Performance</th></tr>
              <tr class="spec-row"><td>Chipset</td>${phones.map(p => `<td>${p.detailedSpecs.performance.chipset}</td>`).join('')}</tr>
              <tr class="spec-row"><td>CPU & GPU</td>${phones.map(p => `<td>${p.detailedSpecs.performance.cpu}<br><small class="text-secondary">${p.detailedSpecs.performance.gpu}</small></td>`).join('')}</tr>
              <tr class="spec-row"><td>RAM & Storage</td>${phones.map(p => `<td>${p.detailedSpecs.performance.ram} • ${p.detailedSpecs.performance.storage}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Cooling Solution</td>${phones.map(p => `<td>${p.detailedSpecs.performance.coolingSystem}</td>`).join('')}</tr>

              <!-- Cameras -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Optics & Cameras</th></tr>
              <tr class="spec-row"><td>Main Camera</td>${phones.map(p => `<td>${p.detailedSpecs.camera.mainSensor}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Zoom / Periscope</td>${phones.map(p => `<td>${p.detailedSpecs.camera.periscope || 'N/A'}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Ultrawide</td>${phones.map(p => `<td>${p.detailedSpecs.camera.ultrawide || 'N/A'}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Video Recording</td>${phones.map(p => `<td>${p.detailedSpecs.camera.videoRecording}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Selfie Camera</td>${phones.map(p => `<td>${p.detailedSpecs.camera.frontCamera}</td>`).join('')}</tr>

              <!-- Battery -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Battery & Power</th></tr>
              <tr class="spec-row"><td>Battery Capacity</td>${phones.map(p => `<td>${p.detailedSpecs.battery.capacity}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Wired Charging</td>${phones.map(p => `<td>${p.detailedSpecs.battery.wiredCharging}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Wireless Charging</td>${phones.map(p => `<td>${p.detailedSpecs.battery.wirelessCharging}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Endurance Score</td>${phones.map(p => `<td>${p.detailedSpecs.battery.batteryLifeScore}</td>`).join('')}</tr>

              <!-- Build & Protection -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Build & Materials</th></tr>
              <tr class="spec-row"><td>Dimensions & Weight</td>${phones.map(p => `<td>${p.detailedSpecs.build.dimensions}<br>${p.detailedSpecs.build.weight}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Chassis Materials</td>${phones.map(p => `<td>${p.detailedSpecs.build.frameMaterial} • ${p.detailedSpecs.build.backMaterial}</td>`).join('')}</tr>
              <tr class="spec-row"><td>Water / Dust Rating</td>${phones.map(p => `<td>${p.detailedSpecs.build.ipRating}</td>`).join('')}</tr>

              <!-- Software -->
              <tr class="table-dark"><th colspan="${phones.length + 1}">Software & Support</th></tr>
              <tr class="spec-row"><td>OS & UI</td>${phones.map(p => `<td>${p.detailedSpecs.software.osVersion} (${p.detailedSpecs.software.customUI})</td>`).join('')}</tr>
              <tr class="spec-row"><td>Update Commitment</td>${phones.map(p => `<td>${p.detailedSpecs.software.promisedUpdates}</td>`).join('')}</tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    const diffBtn = document.getElementById('toggleDiffBtn');
    if (diffBtn) {
      diffBtn.addEventListener('click', () => {
        state.highlightDiffs = !state.highlightDiffs;
        diffBtn.classList.toggle('active', state.highlightDiffs);
        diffBtn.innerHTML = state.highlightDiffs 
          ? '<i class="bi bi-eye-slash me-1"></i> Normal View' 
          : '<i class="bi bi-eye me-1"></i> Highlight Differences';

        document.querySelectorAll('.spec-row').forEach(row => {
          const cells = Array.from(row.querySelectorAll('td')).slice(1);
          const firstVal = cells[0]?.textContent.trim();
          const isDiff = cells.some(c => c.textContent.trim() !== firstVal);
          if (isDiff && state.highlightDiffs) {
            row.classList.add('compare-diff-highlight');
          } else {
            row.classList.remove('compare-diff-highlight');
          }
        });
      });
    }

    DOM.compareModal.show();
  }

  // Favorites Management
  function toggleFavorite(phoneId) {
    const idx = state.favorites.indexOf(phoneId);
    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast('Removed from favorites', 'heartbreak');
    } else {
      state.favorites.push(phoneId);
      showToast('Saved to your favorites', 'heart-fill');
    }

    localStorage.setItem('specnova_favorites', JSON.stringify(state.favorites));
    if (DOM.favoritesCountBadge) DOM.favoritesCountBadge.textContent = state.favorites.length;
    renderPhoneGrid();
  }

  function filterByFavorites() {
    if (state.favorites.length === 0) {
      showToast('You have no saved favorites yet. Click the heart icon on any phone card to bookmark it!', 'info-circle');
      return;
    }
    state.filteredPhones = state.phones.filter(p => state.favorites.includes(p.id));
    renderPhoneGrid();
    showToast(`Showing ${state.filteredPhones.length} bookmarked phones`, 'bookmark-check');
  }

  // Interactive Phone Finder Quiz
  function startPhoneFinder() {
    DOM.phoneFinderModal.show();
  }

  function handleQuizSelection(category, maxBudget) {
    state.category = category;
    state.maxPrice = maxBudget;
    if (DOM.priceRange) DOM.priceRange.value = maxBudget;
    if (DOM.priceDisplay) DOM.priceDisplay.textContent = formatPrice(maxBudget);
    
    // Update category nav UI
    document.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === category);
    });

    applyFilters();
    DOM.phoneFinderModal.hide();
    showToast(`Found ${state.filteredPhones.length} smartphones matching your profile!`, 'stars');

    // Scroll to results
    const resultsSec = document.getElementById('browseSection');
    if (resultsSec) resultsSec.scrollIntoView({ behavior: 'smooth' });
  }

  // Reset Filters
  function resetFilters() {
    state.brand = 'all';
    state.category = 'all';
    state.searchQuery = '';
    state.maxPrice = 2000;
    state.selectedFeatures = [];
    state.sortBy = 'popular';

    if (DOM.searchInput) DOM.searchInput.value = '';
    if (DOM.searchClearBtn) DOM.searchClearBtn.style.display = 'none';
    if (DOM.sortSelect) DOM.sortSelect.value = 'popular';
    if (DOM.priceRange) DOM.priceRange.value = 2000;
    if (DOM.priceDisplay) DOM.priceDisplay.textContent = formatPrice(2000);

    DOM.featureCheckboxes.forEach(cb => cb.checked = false);
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));

    renderBrands();
    applyFilters();
    showToast('Filters reset to default', 'arrow-counterclockwise');
  }

  // Event Listeners Initializer
  function initEventListeners() {
    // Theme Switcher
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Currency Switcher
    if (DOM.currencySelector) {
      DOM.currencySelector.value = state.currency;
      DOM.currencySelector.addEventListener('change', (e) => {
        state.currency = e.target.value;
        localStorage.setItem('specnova_currency', state.currency);
        if (DOM.priceDisplay) DOM.priceDisplay.textContent = formatPrice(state.maxPrice);
        renderFeaturedHero();
        renderPhoneGrid();
        showToast(`Currency changed to ${state.currency} (${CURRENCIES[state.currency].symbol})`, 'currency-exchange');
      });
    }

    // Category Filter Navigation
    if (DOM.categoryFilterNav) {
      DOM.categoryFilterNav.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          DOM.categoryFilterNav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.category = btn.dataset.category;
          applyFilters();
        });
      });
    }

    // Sort Dropdown
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        applyFilters();
      });
    }

    // Price Range Slider
    if (DOM.priceRange) {
      DOM.priceRange.addEventListener('input', (e) => {
        state.maxPrice = parseInt(e.target.value, 10);
        if (DOM.priceDisplay) DOM.priceDisplay.textContent = formatPrice(state.maxPrice);
        applyFilters();
      });
    }

    // Feature Checkboxes
    DOM.featureCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        state.selectedFeatures = Array.from(DOM.featureCheckboxes)
          .filter(c => c.checked)
          .map(c => c.value);
        applyFilters();
      });
    });

    // Reset Filters Button
    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', resetFilters);
    }

    // Dock Buttons
    if (DOM.dockCompareBtn) {
      DOM.dockCompareBtn.addEventListener('click', renderCompareMatrix);
    }
    if (DOM.dockClearBtn) {
      DOM.dockClearBtn.addEventListener('click', clearCompare);
    }

    // Favorites counter icon click
    const favBtn = document.getElementById('favoritesNavBtn');
    if (favBtn) {
      favBtn.addEventListener('click', filterByFavorites);
    }

    // Compare counter icon click
    const compBtn = document.getElementById('compareNavBtn');
    if (compBtn) {
      compBtn.addEventListener('click', renderCompareMatrix);
    }

    // Phone Finder Trigger
    const quizTrigger = document.getElementById('phoneFinderTrigger');
    if (quizTrigger) {
      quizTrigger.addEventListener('click', startPhoneFinder);
    }

    setupLiveSearch();
  }

  // Application Bootstrap
  function init() {
    initTheme();
    renderBrands();
    renderFeaturedHero();
    updateCompareDock();
    if (DOM.favoritesCountBadge) DOM.favoritesCountBadge.textContent = state.favorites.length;
    if (DOM.priceDisplay) DOM.priceDisplay.textContent = formatPrice(state.maxPrice);
    applyFilters();
    initEventListeners();
  }

  // Public Exposure for HTML onclick bindings
  window.SpecNova = {
    openSpecModal,
    toggleCompare,
    removeFromCompare,
    clearCompare,
    toggleFavorite,
    renderCompareMatrix,
    startPhoneFinder,
    handleQuizSelection,
    resetFilters,
    getFallback: getDeviceFallbackSvg
  };

  document.addEventListener('DOMContentLoaded', init);
})();
