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
  <div class="card-body d-flex flex-column">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37544.92212712898!2d119.8566777499065!3d-8.458101902097969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db468a6d47ed641%3A0x87f524333c6a6e8d!2sLabuan%20Bajo%2C%20Komodo%2C%20West%20Manggarai%20Regency%2C%20East%20Nusa%20Tenggara%2C%20Indonesia!5e0!3m2!1sen!2skr!4v1717904033036!5m2!1sen!2skr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>
`;


export { createCultureItemTemplate, createCultureDetailTemplate, createTourItemTemplate, createTourDetailTemplate };
