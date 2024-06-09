const Beranda = {
  async render() {
    return `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./hero-1.jpg" class="d-block w-100" alt="Image 1">
    </div>
    <div class="carousel-item">
      <img src="./hero-2.jpg" class="d-block w-100" alt="Image 2">
    </div>
    <div class="carousel-item">
      <img src="./hero-3.jpg" class="d-block w-100" alt="Image 3">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <div class="container mt-5">
    <div class="section-title">
      <center><h2>Budaya</h2></center>
    </div>
    <div class="row mt-4" id="culture-cards">
      <!-- Culture cards will be inserted here by JavaScript -->
    </div>
    <div class="text-center mt-3">
      <a href="#/budaya" class="link-text">Selengkapnya >>></a>
    </div>
  </div>
  <div class="container mt-5">
    <div class="section-title">
      <center><h2>Pariwisata</h2></center>
    </div>
    <div class="row mt-4" id="tourism-cards">
      <!-- Tourism cards will be inserted here by JavaScript -->
    </div>
    <div class="text-center mt-3">
      <a href="#/pariwisata" class="link-text">Selengkapnya >>></a>
    </div>
  </div>
  
    `;
  },

  async afterRender() {
    try {
      // Fetch culture data
      const cultureResponse = await fetch("../data/culture-en.json");
      // console.log("Fetch culture response status:", cultureResponse.status);
      if (!cultureResponse.ok) {
        throw new Error("Network response for culture data was not ok");
      }
      const cultureData = await cultureResponse.json();
      // console.log("Fetched culture data:", cultureData);

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
      // console.log("Fetch tourism response status:", tourismResponse.status);
      if (!tourismResponse.ok) {
        throw new Error("Network response for tourism data was not ok");
      }
      const tourismData = await tourismResponse.json();
      // console.log("Fetched tourism data:", tourismData);

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
