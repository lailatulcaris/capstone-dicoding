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
      const cultureId = url.id;

      const response = await fetch(`http://54.255.130.64:5000/cultures#${cultureId}`);
      const data = await response.json(); // Ubah ke response.json()

      if (data.status === 200 && data.data.length > 0) {
        const culture = data.data.find((item) => item.id === parseInt(cultureId));

        if (culture) {
          const cultureDetailTemplate = `
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <img src="${culture.image}" alt="${culture.name}" class="img-fluid" />
              </div>
              <div class="col-lg-6 col-md-12">
                <h2 class="text-center">${culture.name}</h2><br>
                <p class="text text-justify">${culture.description}</p>
                <p class="text text-justify"><b>Province:</b> ${culture.province}</p>
                <p class="text text-justify"><b>Address:</b> ${culture.address}</p>
              </div>
            </div>
            <hr>
          `;
          cultureDetailsContainer.innerHTML = cultureDetailTemplate;
        } else {
          cultureDetailsContainer.innerHTML = '<p class="text-danger">Culture not found.</p>';
        }
      } else {
        cultureDetailsContainer.innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
      }
    } catch (error) {
      console.error("Error fetching the culture data:", error);
      cultureDetailsContainer.innerHTML = '<p class="text-danger">Failed to load culture data. Please try again later.</p>';
    }
  },
};

export default DetailBudaya;
