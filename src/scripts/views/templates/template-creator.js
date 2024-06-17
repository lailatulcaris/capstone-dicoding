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

const createCultureHomeItemTemplate = (data) => `
  <a href="/#/cultures/${data.id}" id="${data.id}" class="card-link">
    <div class="card h-100">
      <img data-src="${CONFIG.BASE_URL}/cultures/${data.image}" class="card-img-top lazyload" alt="${data.name}" style="height: 200px;">
      <div class="card-body d-flex flex-column">
        <div class="card-title card-title-custom">
          <h5 class="m-0">${data.name}</h5>
        </div>
      </div>
    </div>
  </a>
`;

const createCultureDetailTemplate = (data) => `
  <div class="row">
    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
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

const createTourHomeItemTemplate = (data) => `
<a href="/#/tourism/${data.id}" id="${data.id}" class="card-link">
  <div class="card h-100">
    <img data-src="${CONFIG.BASE_URL}/tours/${data.image}" class="card-img-top lazyload" alt="${data.name}" style="height: 200px;">
    <div class="card-body d-flex flex-column">
      <div class="card-title card-title-custom">
        <h5 class="m-0">${data.name}</h5>
      </div>
    </div>
  </div>
</a>
`;

const createTourDetailTemplate = (data) => `
<div class="row">
  <div class="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
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

const createCultureSkeletonTemplate = (count) => {
  let skeletonHTML = '';
  for (let i = 0; i < count; i++) {
    skeletonHTML += `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-img-top skeleton skeleton-img" style="height: 200px;"></div>
          <div class="card-body d-flex flex-column">
            <div class="skeleton skeleton-text" style="width: 70%; height: 20px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 50%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px;"></div>
          </div>
        </div>
      </div>
    `;
  }
  return skeletonHTML;
};

const createCultureDetailSkeletonTemplate = () => `
  <div class="row">
    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
      <div class="skeleton skeleton-img" style="height: 300px;"></div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="skeleton skeleton-text" style="width: 80%; height: 30px; margin-bottom: 20px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
    </div>
  </div>
  <hr>
`;

const createTourSkeletonTemplate = (count) => {
  let skeletonHTML = '';
  for (let i = 0; i < count; i++) {
    skeletonHTML += `
      <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <div class="card-img-top skeleton skeleton-img" style="height: 200px;"></div>
          <div class="card-body d-flex flex-column">
            <div class="skeleton skeleton-text" style="width: 70%; height: 20px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 50%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px;"></div>
          </div>
        </div>
      </div>
    `;
  }
  return skeletonHTML;
};


const createTourDetailSkeletonTemplate = () => `
  <div class="row">
    <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
      <div class="skeleton skeleton-img" style="height: 300px;"></div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="skeleton skeleton-text" style="width: 80%; height: 30px; margin-bottom: 20px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
      <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
    </div>
  </div>
  <hr>
`;

const createReviewSkeletonTemplate = (count) => {
  let skeletonHTML = '';
  for (let i = 0; i < count; i++) {
    skeletonHTML += `
      <div class="col-md-4 mb-4">
        <div class="card review-card">
          <div class="card-body">
            <div class="d-flex align-items-center mb-3">
              <div class="skeleton skeleton-img rounded-circle" style="width: 60px; height: 60px; margin-right: 10px;"></div>
              <div>
                <div class="skeleton skeleton-text" style="width: 80%; height: 20px; margin-bottom: 5px;"></div>
                <div class="skeleton skeleton-text" style="width: 50%; height: 15px;"></div>
              </div>
            </div>
            <div class="skeleton skeleton-text" style="width: 100%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 90%; height: 15px; margin-bottom: 10px;"></div>
            <div class="skeleton skeleton-text" style="width: 80%; height: 15px;"></div>
          </div>
        </div>
      </div>
    `;
  }
  return skeletonHTML;
};

export {
  createCultureItemTemplate,
  createCultureHomeItemTemplate,
  createCultureDetailTemplate,
  createCultureSkeletonTemplate,
  createCultureDetailSkeletonTemplate,
  createReviewSkeletonTemplate,
  createTourItemTemplate,
  createTourHomeItemTemplate,
  createTourDetailTemplate,
  createTourSkeletonTemplate,
  createTourDetailSkeletonTemplate,
};