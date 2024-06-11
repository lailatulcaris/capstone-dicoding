import UrlParser from "../../routes/url-parser";
import TravelinSource from "../../data/travelin-source";
import { createTourDetailTemplate } from "../templates/template-creator";

const DetailPariwisata = {
  async render() {
    return `
      <section class="container my-5" id="tour-details">
        <!-- Tour details will be inserted here by JavaScript -->
      </section><br>
    `;
  },

  async afterRender() {
    try {
      const tourDetailsContainer = document.getElementById("tour-details");
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const tour = await TravelinSource.DetailTour(url.id);

      tourDetailsContainer.innerHTML = createTourDetailTemplate(tour);
    } catch (error) {
      console.error("Error fetching the tour data:", error);
      const tourDetailsContainer = document.getElementById("tour-details");
      tourDetailsContainer.innerHTML = '<p class="text-danger">Failed to load tour data. Please try again later.</p>';
    }
  },
};

export default DetailPariwisata;
