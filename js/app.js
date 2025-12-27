/**
 * Jobs Data Analytics Platform - Main Application Controller
 * Handles routing, data loading, and global state
 */

const App = {
  // Current state
  state: {
    currentPage: 'home',
    currentCareer: null,
    compareList: [],
    filters: {},
    searchQuery: '',
    dataLoaded: false
  },

  // Data cache
  data: {
    careers: [],
    categories: [],
    tiers: [],
    aggregates: {}
  },

  /**
   * Initialize the application
   */
  async init() {
    console.log('🚀 Jobs Analytics Platform initializing...');
    
    // Load core data
    await this.loadData();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Handle initial route
    this.handleRoute();
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    
    console.log('✅ Application initialized');
  },

  /**
   * Load all required data
   */
  async loadData() {
    try {
      // Load career index
      const indexResponse = await fetch('data/careers/index.json');
      if (indexResponse.ok) {
        this.data.careers = await indexResponse.json();
      }
      
      // Load categories
      const categoriesResponse = await fetch('data/reference/categories.json');
      if (categoriesResponse.ok) {
        this.data.categories = await categoriesResponse.json();
      }
      
      this.state.dataLoaded = true;
      console.log(`📊 Loaded ${this.data.careers.length} careers`);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  },

  /**
   * Set up global event listeners
   */
  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.state.searchQuery = e.target.value;
        this.performSearch(e.target.value);
      });
    }

    // Compare button clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-compare]')) {
        const careerId = e.target.dataset.compare;
        this.toggleCompare(careerId);
      }
    });
  },

  /**
   * Handle URL routing
   */
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [page, param] = hash.split('/');
    
    this.state.currentPage = page;
    
    switch (page) {
      case 'home':
        this.renderHome();
        break;
      case 'career':
        this.renderCareerProfile(param);
        break;
      case 'compare':
        this.renderCompare();
        break;
      case 'explore':
        this.renderExplore(param);
        break;
      case 'analytics':
        this.renderAnalytics();
        break;
      default:
        this.renderHome();
    }
  },

  /**
   * Navigate to a page
   */
  navigate(page, param = null) {
    const hash = param ? `${page}/${param}` : page;
    window.location.hash = hash;
  },

  /**
   * Toggle career in compare list
   */
  toggleCompare(careerId) {
    const index = this.state.compareList.indexOf(careerId);
    if (index > -1) {
      this.state.compareList.splice(index, 1);
    } else if (this.state.compareList.length < 4) {
      this.state.compareList.push(careerId);
    } else {
      this.showToast('Maximum 4 careers can be compared', 'warning');
      return;
    }
    this.updateCompareUI();
  },

  /**
   * Update compare button states
   */
  updateCompareUI() {
    document.querySelectorAll('[data-compare]').forEach(btn => {
      const careerId = btn.dataset.compare;
      const isComparing = this.state.compareList.includes(careerId);
      btn.classList.toggle('active', isComparing);
      btn.textContent = isComparing ? 'Remove' : 'Compare';
    });

    // Update compare count badge
    const badge = document.getElementById('compare-count');
    if (badge) {
      badge.textContent = this.state.compareList.length;
      badge.style.display = this.state.compareList.length > 0 ? 'flex' : 'none';
    }
  },

  /**
   * Perform search
   */
  performSearch(query) {
    if (!query || query.length < 2) {
      this.hideSearchResults();
      return;
    }

    const results = this.data.careers.filter(career => 
      career.name.toLowerCase().includes(query.toLowerCase()) ||
      career.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10);

    this.showSearchResults(results);
  },

  /**
   * Show search results dropdown
   */
  showSearchResults(results) {
    let dropdown = document.getElementById('search-results');
    if (!dropdown) {
      dropdown = document.createElement('div');
      dropdown.id = 'search-results';
      dropdown.className = 'search-dropdown';
      document.getElementById('global-search')?.parentNode?.appendChild(dropdown);
    }

    if (results.length === 0) {
      dropdown.innerHTML = '<div class="search-no-results">No careers found</div>';
    } else {
      dropdown.innerHTML = results.map(career => `
        <a href="#career/${career.id}" class="search-result-item">
          <span class="search-result-name">${career.name}</span>
          <span class="tier-badge tier-badge-${career.tier}">${career.tierLabel}</span>
        </a>
      `).join('');
    }
    
    dropdown.style.display = 'block';
  },

  /**
   * Hide search results dropdown
   */
  hideSearchResults() {
    const dropdown = document.getElementById('search-results');
    if (dropdown) {
      dropdown.style.display = 'none';
    }
  },

  /**
   * Show toast notification
   */
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  },

  /**
   * Format currency
   */
  formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  },

  /**
   * Format number with commas
   */
  formatNumber(value) {
    return new Intl.NumberFormat('en-US').format(value);
  },

  /**
   * Render placeholder pages - will be expanded
   */
  renderHome() {
    console.log('Rendering home page');
  },

  renderCareerProfile(careerId) {
    console.log('Rendering career:', careerId);
  },

  renderCompare() {
    console.log('Rendering compare page');
  },

  renderExplore(category) {
    console.log('Rendering explore:', category);
  },

  renderAnalytics() {
    console.log('Rendering analytics');
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = App;
}
