import CONFIG from "../../globals/config";

const createCultureItemTemplate = (data) => `
  <a href="/#/budaya/${data.id}" id="${data.id}" class="card-link">
    <div class="card h-100">
      <img src="${CONFIG.BASE_URL}/cultures/${data.image}" class="card-img-top" alt="${data.name}" style="height: 200px;">
      <div class="card-body d-flex flex-column">
        <div class="card-title card-title-custom">
          <h5 class="m-0">${data.name}</h5>
        </div>
        <!-- <p class="card-text">${data.description}</p> -->
        <p><strong>Province:</strong> ${data.province}</p>
        <p><strong>Address:</strong> ${data.address}</p>
      </div>
    </div>
  </a>
`;

const createCultureDetailTemplate = (data) => `
  <div class="card h-100">
    <img src="${CONFIG.BASE_URL}/cultures/${data.image}" class="card-img-top" alt="${data.name}" style="height: 200px;">
    <div class="card-body d-flex flex-column">
      <div class="card-title card-title-custom">
        <h5 class="m-0">${data.name}</h5>
      </div>
      <p class="card-text">${data.description}</p>
      <p><strong>Province:</strong> ${data.province}</p>
      <p><strong>Address:</strong> ${data.address}</p>
    </div>
  </div>
`;

const createTourItemTemplate = (data) => `
<a href="/#/pariwisata/${data.id}" id="${data.id}" class="card-link">
  <div class="card h-100">
    <img src="${CONFIG.BASE_URL}/tours/${data.image}" class="card-img-top" alt="${data.name}" style="height: 200px;">
    <div class="card-body d-flex flex-column">
      <div class="card-title card-title-custom">
        <h5 class="m-0">${data.name}</h5>
      </div>
      <!-- <p class="card-text">${data.description}</p> -->
      <p><strong>Province:</strong> ${data.province}</p>
      <p><strong>Address:</strong> ${data.address}</p>
    </div>
  </div>
</a>
`;

const createTourDetailTemplate = (data) => `
<div class="card h-100">
  <img src="${CONFIG.BASE_URL}/tours/${data.image}" class="card-img-top" alt="${data.name}" style="height: 200px;">
  <div class="card-body d-flex flex-column">
    <div class="card-title card-title-custom">
      <h5 class="m-0">${data.name}</h5>
    </div>
    <!-- <p class="card-text">${data.description}</p> -->
    <p><strong>Province:</strong> ${data.province}</p>
    <p><strong>Address:</strong> ${data.address}</p>
  </div>
</div>
`;

export { createCultureItemTemplate, createCultureDetailTemplate, createTourItemTemplate, createTourDetailTemplate };
