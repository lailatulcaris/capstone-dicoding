import TravelinSource from "../../data/travelin-source";
import { createCultureHomeItemTemplate, createTourHomeItemTemplate } from "../templates/template-creator";

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
          <picture>
            <source type="image/webp" srcset="./hero-3.webp" class="d-block w-100 lazyload">
            <source type="image/jpeg" srcset="./hero-3.jpg" class="d-block w-100 lazyload">
            <img data-src="./hero-3.jpg" class="d-block w-100 lazyload" alt="Image 1">
          </picture>
          <div class="carousel-caption d-none d-md-block">
            <p>WELCOME TO TRAVEL IN!</p>
            <!-- Sambutan -->
          </div>
        </div>
        <div class="carousel-item">
          <picture>
            <source type="image/webp" srcset="./hero-2.webp" class="d-block w-100 lazyload">
            <source type="image/jpeg" srcset="./hero-2.jpg" class="d-block w-100 lazyload">
            <img data-src="./hero-2.jpg" class="d-block w-100 lazyload" alt="Image 2">
          </picture>
          
          <div class="carousel-caption d-none d-md-block">
            <p>EXPERIENCE THE DIVERSITY OF CULTURE AND</p>
            <p>BEAUTIFUL TOURISM IN INDONESIA</p>
            <!-- Keanekaragaman budaya dan keindahan pariwisata di Indonesia -->
          </div>
        </div>
        <div class="carousel-item">
          <picture>
            <source type="image/webp" srcset="./hero-1.webp" class="d-block w-100 lazyload">
            <source type="image/jpeg" srcset="./hero-1.jpg" class="d-block w-100 lazyload">
            <img data-src="./hero-1.jpg" class="d-block w-100 lazyload" alt="Image 3">
          </picture>
          
          <div class="carousel-caption d-none d-md-block">
            <p>DISCOVER HIDDEN GEMS ACROSS THE ARCHIPELAGO</p>
            <!-- menjelajahi tempat-tempat tersembunyi yang menakjubkan di seluruh kepulauan Indonesia -->
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
      <path fill="#b47552" fill-opacity="0.7" d="M0,224L40,229.3C80,235,160,245,240,213.3C320,181,400,107,480,69.3C560,32,640,32,720,69.3C800,107,880,181,960,202.7C1040,224,1120,192,1200,202.7C1280,213,1360,267,1400,293.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
    </svg>

    <div class="container mt-5">
      <div class="section-title">
        <center><h2>CULTURES</h2></center>
      </div>
      <div class="row mt-4" id="culture-cards">
        ${this._createSkeletonLoader(4)} <!-- Skeleton loader -->
      </div>
      <div class="text-center mt-3">
        <a href="#/cultures" class="link-text">See More Cultures</a>
      </div>
    </div>

    <div class="container mt-5">
      <div class="section-title">
        <center><h2>TOURISM'S</h2></center>
      </div>
      <div class="row mt-4" id="tourism-cards">
        ${this._createSkeletonLoader(4)} <!-- Skeleton loader -->
      </div>
      <div class="text-center mt-3">
        <a href="#/tourism" class="link-text">See More Tourism's</a>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#D49E7B" fill-opacity="0.7" d="M0,32L30,42.7C60,53,120,75,180,106.7C240,139,300,181,360,208C420,235,480,245,540,234.7C600,224,660,192,720,165.3C780,139,840,117,900,106.7C960,96,1020,96,1080,122.7C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
    </svg>
    `;
  },

  async afterRender() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    try {
      const cultures = await TravelinSource.Cultures();
      const cultureCardsContainer = document.getElementById("culture-cards");
      
      function displayCultureCards(items) {
        cultureCardsContainer.innerHTML = '';
        if (items.length === 0) {
          cultureCardsContainer.innerHTML = '<p class="text-danger">Tidak ada data yang ditemukan.</p>';
          return;
        }
        items.forEach((culture) => {
          const card = document.createElement("div");
          card.className = "col-lg-3 col-md-6 mb-4";
          card.innerHTML = createCultureHomeItemTemplate(culture);
          cultureCardsContainer.appendChild(card);
        });
      }
      
      // Mengacak data budaya dan mengambil 4 item pertama
      const shuffledCultures = shuffleArray(cultures);
      const previewCultures = shuffledCultures.slice(0, 4);
      
      displayCultureCards(previewCultures);

    } catch (error) {
      console.error("Error fetching or rendering data:", error);
      document.getElementById("culture-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
    }

    try {
      const tours = await TravelinSource.Tours();
      const tourismCardsContainer = document.getElementById("tourism-cards");

      function displayTourismCards(items) {
        tourismCardsContainer.innerHTML = "";
        if (items.length === 0) {
          tourismCardsContainer.innerHTML = '<p class="text-danger">Tidak ada data yang ditemukan.</p>';
          return;
        }
        items.forEach((tour) => {
          const card = document.createElement("div");
          card.className = "col-lg-3 col-md-6 mb-4";
          card.innerHTML = createTourHomeItemTemplate(tour);
          tourismCardsContainer.appendChild(card);
        });
      }
      
      // Mengacak data pariwisata dan mengambil 4 item pertama
      const shuffledTours = shuffleArray(tours);
      const previewTours = shuffledTours.slice(0, 4);
      
      displayTourismCards(previewTours);
    } catch (error) {
      console.error("Error fetching or rendering data:", error);
      document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
    }
  },

  _createSkeletonLoader(count) {
    let skeletonHTML = '';
    for (let i = 0; i < count; i++) {
      skeletonHTML += `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-img-top skeleton skeleton-img" style="height: 200px;"></div>
          <div class="card-body d-flex flex-column">
            <div class="skeleton skeleton-text" style="width: 70%; height: 20px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 50%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px;"></div>
          </div>
        </div>
      </div>
      `;
    }
    return skeletonHTML;
  }
};

export default Beranda;


// const Beranda = {
//   async render() {
//     return `
//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//       <!-- Carousel indicators -->
//       <ol class="carousel-indicators">
//         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//       </ol>
//       <!-- Carousel items -->
//       <div class="carousel-inner">
//         <div class="carousel-item active">
//           <picture>
//             <source type="image/webp" srcset="./hero-3.webp" class="d-block w-100 lazyload">
//             <source type="image/jpeg" srcset="./hero-3.jpg" class="d-block w-100 lazyload">
//             <img data-src="./hero-3.jpg" class="d-block w-100 lazyload" alt="Image 1">
//           </picture>
//           <div class="carousel-caption d-none d-md-block">
//             <p>WELCOME TO TRAVEL IN!</p>
//             <!-- Sambutan -->
//           </div>
//         </div>
//         <div class="carousel-item">
//           <picture>
//             <source type="image/webp" srcset="./hero-2.webp" class="d-block w-100 lazyload">
//             <source type="image/jpeg" srcset="./hero-2.jpg" class="d-block w-100 lazyload">
//             <img data-src="./hero-2.jpg" class="d-block w-100 lazyload" alt="Image 2">
//           </picture>
          
//           <div class="carousel-caption d-none d-md-block">
//             <p>EXPERIENCE THE DIVERSITY OF CULTURE AND</p>
//             <p>BEAUTIFUL TOURISM IN INDONESIA</p>
//             <!-- Keanekaragaman budaya dan keindahan pariwisata di Indonesia -->
//           </div>
//         </div>
//         <div class="carousel-item">
//           <picture>
//             <source type="image/webp" srcset="./hero-1.webp" class="d-block w-100 lazyload">
//             <source type="image/jpeg" srcset="./hero-1.jpg" class="d-block w-100 lazyload">
//             <img data-src="./hero-1.jpg" class="d-block w-100 lazyload" alt="Image 3">
//           </picture>
          
//           <div class="carousel-caption d-none d-md-block">
//             <p>DISCOVER HIDDEN GEMS ACROSS THE ARCHIPELAGO</p>
//             <!-- menjelajahi tempat-tempat tersembunyi yang menakjubkan di seluruh kepulauan Indonesia -->
//           </div>
//         </div>
//       </div>
//       <!-- Carousel navigation buttons -->
//       <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="sr-only">Previous</span>
//       </a>
//       <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="sr-only">Next</span>
//       </a>
//     </div>

//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//   <path fill="#b47552" fill-opacity="0.7" d="M0,224L40,229.3C80,235,160,245,240,213.3C320,181,400,107,480,69.3C560,32,640,32,720,69.3C800,107,880,181,960,202.7C1040,224,1120,192,1200,202.7C1280,213,1360,267,1400,293.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
// </svg>

//     <div class="container mt-5">
//       <div class="section-title">
//         <center><h2>CULTURES</h2></center>
//       </div>
//       <div class="row mt-4" id="culture-cards">
//         <!-- Culture cards will be inserted here by JavaScript -->
//       </div>
//       <div class="text-center mt-3">
//         <a href="#/cultures" class="link-text">See More Cultures</a>
//       </div>
//     </div>

//     <div class="container mt-5">
//       <div class="section-title">
//         <center><h2>TOURISM'S</h2></center>
//       </div>
//       <div class="row mt-4" id="tourism-cards">
//         <!-- Tourism cards will be inserted here by JavaScript -->
//       </div>
//       <div class="text-center mt-3">
//         <a href="#/tourism" class="link-text">See More Tourism's</a>
//       </div>
//     </div>

//    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#D49E7B" fill-opacity="0.7" d="M0,32L30,42.7C60,53,120,75,180,106.7C240,139,300,181,360,208C420,235,480,245,540,234.7C600,224,660,192,720,165.3C780,139,840,117,900,106.7C960,96,1020,96,1080,122.7C1140,149,1200,203,1260,197.3C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

//     `;
//   },

//   async afterRender() {

//     function shuffleArray(array) {
//       for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//       }
//       return array;
//     }

//     try {
//       const cultures = await TravelinSource.Cultures();
//       const cultureCardsContainer = document.getElementById("culture-cards");
      
//       function displayCultureCards(items) {
//         cultureCardsContainer.innerHTML = '';
//         if (items.length === 0) {
//           cultureCardsContainer.innerHTML = '<p class="text-danger">Tidak ada data yang ditemukan.</p>';
//           return;
//         }
//         items.forEach((culture) => {
//           const card = document.createElement("div");
//           card.className = "col-lg-3 col-md-6 mb-4";
//           card.innerHTML = createCultureItemTemplate(culture);
//           cultureCardsContainer.appendChild(card);
//         });
//       }
      
//       // Mengacak data budaya dan mengambil 4 item pertama
//       const shuffledCultures = shuffleArray(cultures);
//       const previewCultures = shuffledCultures.slice(0, 4);
      
//       displayCultureCards(previewCultures);

      
//     } catch (error) {
//       console.error("Error fetching or rendering data:", error);
//       document.getElementById("culture-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
//     }

//     try {
//       const tours = await TravelinSource.Tours();
//       const tourismCardsContainer = document.getElementById("tourism-cards");

//       function displayTourismCards(items) {
//         tourismCardsContainer.innerHTML = "";
//         if (items.length === 0) {
//           tourismCardsContainer.innerHTML = '<p class="text-danger">Tidak ada data yang ditemukan.</p>';
//           return;
//         }
//         items.forEach((tour) => {
//           const card = document.createElement("div");
//           card.className = "col-lg-3 col-md-6 mb-4";
//           card.innerHTML = createTourItemTemplate(tour);
//           tourismCardsContainer.appendChild(card);
//         });
//       }
      
//       // Mengacak data pariwisata dan mengambil 4 item pertama
//       const shuffledTours = shuffleArray(tours);
//       const previewTours = shuffledTours.slice(0, 4);
      
//       displayTourismCards(previewTours);
//     } catch (error) {
//       console.error("Error fetching or rendering data:", error);
//       document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
//     }
//   },
// };

// export default Beranda;

