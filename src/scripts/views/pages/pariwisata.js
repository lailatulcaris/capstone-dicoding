
import TravelinSource from "../../data/travelin-source";
import { createTourItemTemplate } from "../templates/template-creator";

const Pariwisata = {
  async render() {
    return `
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

      const tours = await TravelinSource.Tours();
      const tourismCardsContainer = document.getElementById("tourism-cards");
      tourismCardsContainer.innerHTML = "";
      
      tours.forEach((tour) => {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 mb-4";
        card.innerHTML = createTourItemTemplate(tour);
        tourismCardsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching the tours data:", error);
      document.getElementById("tourism-cards").innerHTML = '<p class="text-danger">Failed to load tours data. Please try again later.</p>';

    }
    
  },
};

export default Pariwisata;
