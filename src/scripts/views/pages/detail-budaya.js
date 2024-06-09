/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import TravelinSource from "../../data/travelin-source";
import { createCultureDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const DetailBudaya = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Detail Budaya</h2></center>
        </div>
        <div class="row mt-4" id="culture-cards">
          <!-- Culture details will be inserted here by JavaScript -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const culture = await TravelinSource.DetailCulture(url.id);
      const cultureDetailContainer = document.getElementById("culture-cards");

      const card = document.createElement("div");
      card.className = "col-lg-3 col-md-6 mb-4";
      card.innerHTML = createCultureDetailTemplate(culture);
      cultureDetailContainer.appendChild(card);

    } catch (error) {
      console.error("Error fetching the culture data:", error);
      document.getElementById("culture-detail").innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default DetailBudaya;
