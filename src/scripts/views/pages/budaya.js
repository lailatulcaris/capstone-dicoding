import TravelinSource from "../../data/travelin-source";
import { createCultureItemTemplate } from "../templates/template-creator";

const Budaya = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Budaya</h2></center>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <input type="text" id="search-input" class="form-control" placeholder="Cari Budaya...">
          </div>
        </div>
        <div class="row mt-4" id="culture-cards">
          <!-- Culture cards will be inserted here by JavaScript -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const cultures = await TravelinSource.Cultures();
      const cultureCardsContainer = document.getElementById("culture-cards");
      const searchInput = document.getElementById("search-input");

      const renderCultures = (filteredCultures) => {
        cultureCardsContainer.innerHTML = "";
        filteredCultures.forEach((culture) => {
          const card = document.createElement("div");
          card.className = "col-lg-3 col-md-6 mb-4";
          card.innerHTML = createCultureItemTemplate(culture);
          cultureCardsContainer.appendChild(card);
        });
      };

      renderCultures(cultures); // Initial render with all cultures

      searchInput.addEventListener("input", (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredCultures = cultures.filter((culture) => culture.name.toLowerCase().includes(searchText));
        renderCultures(filteredCultures);
      });
    } catch (error) {
      console.error("Error fetching the culture data:", error);
      document.getElementById("culture-cards").innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default Budaya;
