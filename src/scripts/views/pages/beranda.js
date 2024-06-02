const Beranda = {
  async render() {
    return `
    <div class="hero bg-light p-5 rounded" id="hero">
      <h1>Selamat datang di Travel in</h1>
      <p class="lead">Discover the diverse culture and stunning destinations of Indonesia.</p>
      <p>Explore the beauty of Indonesia, from its traditional dances to breathtaking landscapes.</p>
      <a class="btn btn-primary btn-lg" id="hero-btn" href="#" role="button">Learn more</a>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
