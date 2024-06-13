import UrlParser from "../../routes/url-parser";
import TravelinSource from "../../data/travelin-source";
import { createTourDetailTemplate } from "../templates/template-creator";

const DetailPariwisata = {
  async render() {
    return `
      <section class="container my-5" id="tour-details">
        <!-- Tour details will be inserted here by JavaScript -->
      </section><br>
      <section class="container my-5" id="tour-reviews">
        <h2 class="mb-4 text-center title-with-border">Visitor Reviews</h2>
  <div id="reviews-container" class="row">
          <!-- Reviews will be inserted here by JavaScript -->
        </div>
      </section><br>
      <a href="https://wa.me/088901488574" class="whatsapp-float" target="_blank">
        <i class="bi bi-whatsapp whatsapp-icon"></i>
      </a>
    `;
  },

  async afterRender() {
    try {
      const tourDetailsContainer = document.getElementById("tour-details");
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const tour = await TravelinSource.DetailTour(url.id);

      tourDetailsContainer.innerHTML = createTourDetailTemplate(tour);

      // Dummy reviews data
      const reviews = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bf6k_qx00FOckkiNyulG7YNnIgveUqF4NcV0Ci0dgllkiMuKwuIBotORF5_CmUEyB3o&usqp=CAU",
          name: "Nadiem Makarim",
          position: "Minister of Education and Culture",
          review: "Website ini sangat bermanfaat bagi para wisatawan baik dari dalam negeri atau luar negeri",
        },
        {
          img: "https://www.bing.com/th?id=OIP.z7hczHvzGF5s2S7UYcaruwHaJT&w=120&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
          name: "Joko Widodo",
          position: "President of Indonesia",
          review: "Patut diacungi jempol untuk website ini karena tampilannya sangat menarik membuat nyaman user",
        },
        {
          img: "https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2023/04/Narenda-Wicaksono-scaled-e1681885786425-1024x982.jpg",
          name: "Narenda Wicaksono",
          position: "CEO of Dicoding",
          review: "Sungguh sangat inspiratif web ini menyediakan berbagai rekomendasi Budaya dan Pariwisata yang sangat detail",
        },
      ];

      const reviewsContainer = document.getElementById("reviews-container");
      reviewsContainer.innerHTML = reviews
        .map(
          (review) => `
        <div class="col-md-4">
          <div class="card review-card mb-4">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <img src="${review.img}" class="rounded-circle mr-3" alt="${review.name}" style="width: 60px; height: 60px;">
                <div>
                  <h5 class="card-title mb-0">${review.name}</h5>
                  <small class="text-muted">${review.position}</small>
                </div>
              </div>
              <p class="card-text">${review.review}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("");
    } catch (error) {
      console.error("Error fetching the tour data:", error);
      const tourDetailsContainer = document.getElementById("tour-details");
      tourDetailsContainer.innerHTML = '<p class="text-danger">Failed to load tour data. Please try again later.</p>';
    }
  },
};

export default DetailPariwisata;
