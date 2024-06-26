import TravelinSource from "../../data/travelin-source";
import { createCultureItemTemplate, createCultureSkeletonTemplate } from "../templates/template-creator";

const Budaya = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>CULTURES</h2></center>
        </div>
        <!-- Search feature -->
        <div  class="search-container mt-4 d-flex justify-content-center">
          <input type="text" id="search-input" placeholder="Search Cultures Name or Province" class="form-control">
        </div>
        <div class="row mt-4 culture-container" id="culture-cards">
          ${createCultureSkeletonTemplate(8)} <!-- Skeleton loader -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const cultures = await TravelinSource.Cultures();
      const cultureCardsContainer = document.getElementById("culture-cards");
      const searchInput = document.getElementById("search-input");

      function displayCultureCards(items) {
        cultureCardsContainer.innerHTML = '';
        if (items.length === 0) {
          cultureCardsContainer.innerHTML = '<p class="text-danger">No data found.</p>';
          return;
        }
        items.forEach((culture) => {
          const card = document.createElement("div");
          card.className = "col-lg-3 col-md-6 mb-4";
          card.innerHTML = createCultureItemTemplate(culture);
          cultureCardsContainer.appendChild(card);
        });
      }

      displayCultureCards(cultures);

      searchInput.addEventListener("input", (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredItems = cultures.filter((culture) =>
          culture.province.toLowerCase().includes(searchTerm) ||
          culture.name.toLowerCase().includes(searchTerm)
        );
        displayCultureCards(filteredItems);
      });
    } catch (error) {
      console.error('Error fetching the culture data:', error);
      document.getElementById('culture-cards').innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default Budaya;