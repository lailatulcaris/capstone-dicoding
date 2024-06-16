import TravelinSource from "../../data/travelin-source";
import { createCultureDetailTemplate, createCultureDetailSkeletonTemplate, createReviewSkeletonTemplate } from "../templates/template-creator";
import UrlParser from "../../routes/url-parser";

const DetailBudaya = {
  async render() {
    return `
      <div class="section-title mt-5">
        <center><h2>CULTURE DETAIL</h2></center>
      </div>
      <section class="container my-5" id="culture-details">
        ${createCultureDetailSkeletonTemplate()} <!-- Skeleton loader -->
      </section><br>
      <section class="container my-5" id="culture-reviews">
        <h2 class="mb-4 text-center title-with-border">Visitor Reviews</h2>
        <div id="reviews-container" class="row">
          ${createReviewSkeletonTemplate(3)} <!-- Skeleton loader untuk review -->
        </div>
      </section><br>
      <a href="https://wa.me/6288901488574" class="whatsapp-float" target="_blank">
        <i class="bi bi-whatsapp whatsapp-icon"></i>
      </a>
    `;
  },

  async afterRender() {
    try {
      const cultureDetailsContainer = document.getElementById("culture-details");
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const culture = await TravelinSource.DetailCulture(url.id);

      cultureDetailsContainer.innerHTML = createCultureDetailTemplate(culture);

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
                <img data-src="${review.img}" class="rounded-circle mr-3 lazyload" alt="${review.name}" style="width: 60px; height: 60px;">
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
      console.error("Error fetching the culture data:", error);
      const cultureDetailsContainer = document.getElementById("culture-details");
      cultureDetailsContainer.innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default DetailBudaya;