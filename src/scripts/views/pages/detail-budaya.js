import TravelinSource from "../../data/travelin-source";
import { createCultureDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const DetailBudaya = {
  async render() {
    return `
      <section class="container my-5" id="culture-details">
        <!-- Culture details will be inserted here by JavaScript -->
      </section><br>
    `;
  },

  async afterRender() {
    try {
      const cultureDetailsContainer = document.getElementById("culture-details");
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const culture = await TravelinSource.DetailCulture(url.id);

      cultureDetailsContainer.innerHTML = createCultureDetailTemplate(culture);

    } catch (error) {
      console.error("Error fetching the culture data:", error);
      cultureDetailsContainer.innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default DetailBudaya;
