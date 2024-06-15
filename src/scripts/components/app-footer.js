class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container d-flex justify-content-between align-items-center">
        <div class="text-center d-flex align-items-center">
            <img data-src="./logo-tanpa-bg.png" alt="Logo" class="logo-img mr-2 lazyload" />
          
          <p class="mb-0">&copy; 2024, Travel in.</p>
        </div>
        <div class="links">
          <a href="https://github.com/lailatulcaris/capstone-dicoding" target="_blank" aria-label="Github"><i class="bi bi-github github-icon"></i></a>
        </div>
      </div>
    `;
  }
}

customElements.define("app-footer", AppFooter);