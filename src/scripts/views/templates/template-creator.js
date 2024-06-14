import CONFIG from "../../globals/config";

const createCultureItemTemplate = (data) => `
  <a href="/#/cultures/${data.id}" id="${data.id}" class="card-link">
    <div class="card h-100">
      <img data-src="${CONFIG.BASE_URL}/cultures/${data.image}" class="card-img-top lazyload" alt="${data.name}" style="height: 200px;">
      <div class="card-body d-flex flex-column">
        <div class="card-title card-title-custom">
          <h5 class="m-0">${data.name}</h5>
        </div>
        <p><strong>Province:</strong><br>${data.province}</p>
        <p><strong>Address:</strong><br>${data.address}</p>
      </div>
    </div>
  </a>
`;

const createCultureDetailTemplate = (data) => `
  <div class="row">
    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <img data-src="${CONFIG.BASE_URL}/cultures/${data.image}" alt="${data.name}" class="img-fluid lazyload" />
    </div>
    <div class="col-lg-6 col-md-12">
      <h2 class="text-center">${data.name}</h2><br>
      <p class="text text-justify">${data.description}</p>
      <p class="text text-justify"><b>Province:</b> ${data.province}</p>
      <p class="text text-justify"><b>Address:</b> ${data.address}</p>
    </div>
  </div>
  <hr>
`;

const createTourItemTemplate = (data) => `
<a href="/#/tourism/${data.id}" id="${data.id}" class="card-link">
  <div class="card h-100">
    <img data-src="${CONFIG.BASE_URL}/tours/${data.image}" class="card-img-top lazyload" alt="${data.name}" style="height: 200px;">
    <div class="card-body d-flex flex-column">
      <div class="card-title card-title-custom">
        <h5 class="m-0">${data.name}</h5>
      </div>
      <p><strong>Province:</strong><br>${data.province}</p>
      <p><strong>Address:</strong><br>${data.address}</p>
    </div>
  </div>
</a>
`;

const createTourDetailTemplate = (data) => `
<div class="row">
  <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
    <img data-src="${CONFIG.BASE_URL}/tours/${data.image}" alt="${data.name}" class="img-fluid lazyload" />
  </div>
  <div class="col-lg-6 col-md-12">
    <h2 class="text-center">${data.name}</h2><br>
    <p class="text text-justify">${data.description}</p>
    <p class="text text-justify"><b>Province:</b> ${data.province}</p>
    <p class="text text-justify"><b>Address:</b> ${data.address}</p>
    <div class="text-center mt-4">
      <button class="btn btn-primary" onclick="window.open('${data.map}', '_blank');">
        <i class="bi bi-geo-alt-fill"></i> Open in Maps
      </button>
    </div>
  </div>
  </div>
  <hr>
`;

export {
  createCultureItemTemplate,
  createCultureDetailTemplate,
  createTourItemTemplate,
  createTourDetailTemplate,
};
