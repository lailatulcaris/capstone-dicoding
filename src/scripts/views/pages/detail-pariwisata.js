import TravelinSource from "../../data/travelin-source";
import { createTourDetailTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const DetailPariwisata = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="section-title">
          <center><h2>Detail Pariwisata</h2></center>
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
      const tour = await TravelinSource.DetailTour(url.id);
      const tourismDetailContainer = document.getElementById("culture-cards");

      const card = document.createElement("div");
      card.className = "col-lg-3 col-md-6 mb-4";
      card.innerHTML = createTourDetailTemplate(tour);
      tourismDetailContainer.appendChild(card);

    } catch (error) {
      console.error("Error fetching the tours data:", error);
      document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Failed to load tours data. Please try again later.</p>';
    }
  },
};

export default DetailPariwisata;
