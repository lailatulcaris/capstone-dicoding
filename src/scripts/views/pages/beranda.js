const Beranda = {
  async render() {
    return `
      <div class="hero bg-light p-5 rounded" id="hero">
        <h1>Selamat datang di Travel in</h1>
        <p class="lead">Discover the diverse culture and stunning destinations of Indonesia.</p>
        <p>Explore the beauty of Indonesia, from its traditional dances to breathtaking landscapes.</p>
        <a class="btn btn-primary btn-lg" id="hero-btn" href="#" role="button">Selengkapnya</a>
      </div>
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Budaya</h2></center>
        </div>
        <div class="row mt-4" id="culture-cards">
          <!-- Culture cards will be inserted here by JavaScript -->
        </div>
      </div>
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Pariwisata</h2></center>
        </div>
        <div class="row mt-4" id="tourism-cards">
          <!-- Tourism cards will be inserted here by JavaScript -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      // Fetch culture data
      const cultureResponse = await fetch("../data/culture-en.json");
      console.log("Fetch culture response status:", cultureResponse.status);
      if (!cultureResponse.ok) {
        throw new Error("Network response for culture data was not ok");
      }
      const cultureData = await cultureResponse.json();
      console.log("Fetched culture data:", cultureData);

      // Render culture cards
      const cultureCardsContainer = document.getElementById("culture-cards");
      cultureData.culture.slice(0, 4).forEach((item) => {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <img src="../${item.name.toLowerCase().replace(/ /g, "-")}.jpg" class="card-img-top" alt="${item.name}" style="height: 200px;">
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

      // Fetch tourism data
      const tourismResponse = await fetch("../data/tours-en.json");
      console.log("Fetch tourism response status:", tourismResponse.status);
      if (!tourismResponse.ok) {
        throw new Error("Network response for tourism data was not ok");
      }
      const tourismData = await tourismResponse.json();
      console.log("Fetched tourism data:", tourismData);

      // Render tourism cards
      const tourismCardsContainer = document.getElementById("tourism-cards");
      tourismData.tours.slice(0, 4).forEach((item) => {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 mb-4";
        card.innerHTML = `
          <div class="card h-100">
          <img src="../${item.name.toLowerCase().replace(/ /g, "-")}.jpeg" class="card-img-top" alt="${item.name}" style="height: 200px;">
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
        tourismCardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching or rendering data:", error);
      document.getElementById("culture-cards").innerHTML = '<p class="text-danger">Failed to load data. Please try again later.</p>';
      document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Failed to load data. Please try again later.</p>';
    }
  },
};

export default Beranda;
