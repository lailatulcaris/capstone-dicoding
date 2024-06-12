const Beranda = {
  async render() {
    return `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <!-- Carousel indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <!-- Carousel items -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./hero-1.jpg" class="d-block w-100" alt="Image 1">
          <div class="carousel-caption d-none d-md-block">
            <h5>SELAMAT DATANG DI TRAVEL IN</h5>
            <p>MENYUGUHKAN KEBERAGAMAN BUDAYA DAN PARIWISATA INDAH DI INDONESIA</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./hero-2.jpg" class="d-block w-100" alt="Image 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>SELAMAT DATANG DI TRAVEL IN</h5>
            <p>MENYUGUHKAN KEBERAGAMAN BUDAYA DAN PARIWISATA INDAH DI INDONESIA</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="./hero-3.jpg" class="d-block w-100" alt="Image 3">
          <div class="carousel-caption d-none d-md-block">
            <h5>SELAMAT DATANG DI TRAVEL IN</h5>
            <p>MENYUGUHKAN KEBERAGAMAN BUDAYA DAN PARIWISATA INDAH DI INDONESIA</p>
          </div>
        </div>
      </div>
      <!-- Carousel navigation buttons -->
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#D49E7B" fill-opacity="0.7" d="M0,224L40,229.3C80,235,160,245,240,213.3C320,181,400,107,480,69.3C560,32,640,32,720,69.3C800,107,880,181,960,202.7C1040,224,1120,192,1200,202.7C1280,213,1360,267,1400,293.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>

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

   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D49E7B" fill-opacity="0.7" d="M0,32L30,42.7C60,53,120,75,180,106.7C240,139,300,181,360,208C420,235,480,245,540,234.7C600,224,660,192,720,165.3C780,139,840,117,900,106.7C960,96,1020,96,1080,122.7C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

    `;
  },

  async afterRender() {
    try {
      // Fetch culture data
      const cultureResponse = await fetch("../data/culture-en.json");
      if (!cultureResponse.ok) {
        throw new Error("Network response for culture data was not ok");
      }
      const cultureData = await cultureResponse.json();

      // Render culture cards
      const cultureCardsContainer = document.getElementById("culture-cards");
      cultureData.culture.slice(0, 4).forEach((item) => {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <img src="../${item.name.toLowerCase().replace(/ /g, "-")}.jpg" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Province:</strong> ${item.province}</li>
              <li class="list-group-item"><strong>Address:</strong> ${item.address}</li>
            </ul>
          </div>
        `;
        cultureCardsContainer.appendChild(card);
      });

      // Fetch tourism data
      const tourismResponse = await fetch("../data/tours-en.json");
      if (!tourismResponse.ok) {
        throw new Error("Network response for tourism data was not ok");
      }
      const tourismData = await tourismResponse.json();

      // Render tourism cards
      const tourismCardsContainer = document.getElementById("tourism-cards");
      tourismData.tours.slice(0, 4).forEach((item) => {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 mb-4";
        card.innerHTML = `
          <div class="card h-100">
            <img src="../${item.name.toLowerCase().replace(/ /g, "-")}.jpeg" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Province:</strong> ${item.province}</li>
              <li class="list-group-item"><strong>Address:</strong> ${item.address}</li>
            </ul>
          </div>
        `;
        tourismCardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching or rendering data:", error);
      document.getElementById("culture-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
      document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
    }
  },
};

export default Beranda;
