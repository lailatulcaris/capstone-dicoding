/* eslint-disable linebreak-style */
/* eslint-disable no-inner-declarations */
/* eslint-disable max-len */
/* eslint-disable no-console */
const Budaya = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Budaya</h2></center>
        </div>
        <!-- Search feature -->
        <div class="search-container mt-4">
          <input type="text" id="search-input" placeholder="Cari provinsi..." class="form-control">
        </div>
        <div class="row mt-4" id="culture-cards">
          <!-- Culture cards will be inserted here by JavaScript -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const response = await fetch('../data/culture-en.json');
      console.log('Fetch response status:', response.status); // Log response status
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log fetched data
      const cultureCardsContainer = document.getElementById('culture-cards');
      const searchInput = document.getElementById('search-input');

      function displayCultureCards(items) {
        cultureCardsContainer.innerHTML = '';
        if (items.length === 0) {
          cultureCardsContainer.innerHTML = '<p class="text-danger">Tidak ada data yang ditemukan.</p>';
          return;
        }
        items.forEach((item) => {
          const card = document.createElement('div');
          card.className = 'col-lg-3 col-md-6 mb-4'; // Menggunakan ukuran kolom yang lebih kecil agar 4 card dapat berjejer di dalam satu baris
          card.innerHTML = `
            <div class="card h-100">
              <img src="../${item.name.toLowerCase().replace(/ /g, '-')}.jpg" class="card-img-top" alt="${item.name}" style="height: 200px;"> <!-- Menambahkan properti height untuk memperbesar gambar -->
              <div class="card-body d-flex flex-column">
                <div class="card-title card-title-custom">
                  <h5 class="m-0">${item.name}</h5>
                </div>
                <p class="card-text">${item.description}</p>
                <p><strong>Province:</strong> ${item.province}</p>
                <p><strong>Address:</strong> ${item.address}</p>
              </div>
            </div>
          `;
          cultureCardsContainer.appendChild(card);
        });
      }

      displayCultureCards(data.culture);

      searchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredItems = data.culture.filter((item) => item.province.toLowerCase().includes(searchTerm));
        displayCultureCards(filteredItems);
      });
    } catch (error) {
      console.error('Error fetching the culture data:', error);
      document.getElementById('culture-cards').innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default Budaya;
