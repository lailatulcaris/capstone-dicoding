import UrlParser from "../../routes/url-parser";

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
      const tourId = url.id;

      const response = await fetch(`http://54.255.130.64:5000/tours#${tourId}`);
      const data = await response.json(); // Ubah ke response.json()

      if (data.status === 200 && data.data.length > 0) {
        const tour = data.data.find((item) => item.id === parseInt(tourId));

        if (tour) {
          const tourDetailTemplate = `
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="${tour.image}" alt="${tour.name}" class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-12">
                <h2 class="text-center">${tour.name}</h2><br>
                <p class="text text-justify">${tour.description}</p>
                <p class="text text-justify"><b>Province:</b> ${tour.province}</p>
                <p class="text text-justify"><b>Address:</b> ${tour.address}</p>
                <div class="text-center mt-4">
                  <button class="btn btn-primary" onclick="window.open('${tour.map}', '_blank');">
                    <i class="bi bi-geo-alt-fill"></i> Lokasi
                  </button>
                </div>
              </div>
            </div>
            <hr>
          `;
          tourDetailsContainer.innerHTML = tourDetailTemplate;
        } else {
          tourDetailsContainer.innerHTML = '<p class="text-danger">Tour not found.</p>';
        }
      } else {
        tourDetailsContainer.innerHTML = '<p class="text-danger">Failed to load tour data. Please try again later.</p>';
      }
    } catch (error) {
      console.error("Error fetching the tour data:", error);
      const tourDetailsContainer = document.getElementById("tour-details");
      tourDetailsContainer.innerHTML = '<p class="text-danger">Failed to load tour data. Please try again later.</p>';
    }
  },
};

export default DetailPariwisata;
