const About = {
  async render() {
    return `
      <div class="custom-container">
        <img data-src="logo-tanpa-bg.png" class="sinematik-image lazyload" alt="Logo">
        <p class="sinematik-text">Travel in is a web-based application designed to provide in-depth and
         comprehensive information about Culture and Tourism in Indonesia. This application aims to make
          it easier for foreign tourists to plan their trips to Indonesia by providing easy and complete 
          access to various information related to culture, traditions and the most popular tourist destinations
           in several provinces throughout the archipelago.
        </p>
      </div>
      
      <div class="container mt-5">
        <div class="section-title">
            <center><h2>Our Team</h2></center>
        </div>
        <div class="row" id="team-cards">
          ${this._createSkeletonLoader(3)} <!-- Skeleton loader -->
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      // Simulasi delay pemuatan data untuk demonstrasi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const teamCardsContainer = document.getElementById("team-cards");

      const teamMembers = [
        {
          img: 'aldy.jpeg',
          name: 'Muhammad Rizaldy Alifiansyah',
          role: 'Project Manager',
          github: 'https://github.com/Mrzalf',
          linkedin: 'https://www.linkedin.com/in/mrzalf/'
        },
        {
          img: 'carisma.jpeg',
          name: 'Lailatul Carisma Putri',
          role: 'Front End Developer',
          github: 'https://github.com/lailatulcaris',
          linkedin: 'https://www.linkedin.com/in/lailatul-carisma-putri-50525330a/'
        },
        {
          img: 'syarif.jpeg',
          name: 'Muhammad Syarif Yahya SH',
          role: 'Back End Developer',
          github: 'https://github.com/syarifyahyash',
          linkedin: 'https://www.linkedin.com/in/muhammad-syarif-yahya-shafaruddin-hermawan-476193256/'
        }
      ];

      function createTeamCard(member) {
        return `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img data-src="${member.img}" class="card-img-top lazyload" alt="${member.name}">
              <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <a href="${member.github}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="bi bi-github"></i> GitHub
                </a>
                <a href="${member.linkedin}" class="btn btn-primary" target="_blank" rel="noopener">
                  <i class="bi bi-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        `;
      }

      teamCardsContainer.innerHTML = teamMembers.map(createTeamCard).join('');
    } catch (error) {
      console.error("Error fetching or rendering data:", error);
      document.getElementById("team-cards").innerHTML = '<p class="text-danger">Gagal memuat data. Silakan coba lagi nanti.</p>';
    }
  },

  _createSkeletonLoader(count) {
    let skeletonHTML = '';
    for (let i = 0; i < count; i++) {
      skeletonHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-img-top skeleton skeleton-img"></div>
            <div class="card-body">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text skeleton-text__body"></div>
              <div class="skeleton skeleton-footer"></div>
              <div class="skeleton skeleton-footer"></div>
            </div>
          </div>
        </div>
      `;
    }
    return skeletonHTML;
  }
};

export default About;