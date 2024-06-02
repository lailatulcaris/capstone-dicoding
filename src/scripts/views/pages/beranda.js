const Beranda = {
  async render() {
    return `
    <div class="hero bg-light p-5 rounded" id="hero">
      <h1>Selamat datang di Travel in</h1>
      <p class="lead">Discover the diverse culture and stunning destinations of Indonesia.</p>
      <p>Explore the beauty of Indonesia, from its traditional dances to breathtaking landscapes.</p>
      <a class="btn btn-primary btn-lg" id="hero-btn" href="#" role="button">Learn more</a>
    </div>
    <div id="culture-list" class="mt-5">
      <h2>Indonesian Cultural Heritage</h2>
      <div class="row" id="culture-items">
        <!-- Cultural items will be inserted here -->
      </div>
    </div>
    `;
  },

  async afterRender() {
    const cultures = [
      {
        "id": 1,
        "name": "Barong Dance",
        "description": "Barong Dance is a traditional Balinese dance depicting the battle between good (Barong) and evil (Rangda).",
        "province": "Bali",
        "address": "Batubulan Village, Gianyar, Bali"
      },
      {
        "id": 2,
        "name": "Saman Dance",
        "description": "Saman Dance is a traditional Acehnese dance performed in groups with synchronized hand and body movements.",
        "province": "Aceh",
        "address": "Gayo Lues, Aceh"
      },
      {
        "id": 3,
        "name": "Karapan Sapi",
        "description": "Karapan Sapi is a traditional bull racing competition from Madura, East Java.",
        "province": "East Java",
        "address": "Madura Island, East Java"
      },
      {
        "id": 4,
        "name": "Reog Ponorogo",
        "description": "Reog Ponorogo is a traditional performance art from Ponorogo, East Java, featuring large masks and lion dance.",
        "province": "East Java",
        "address": "Ponorogo, East Java"
      },
      {
        "id": 5,
        "name": "Nadran Ceremony",
        "description": "Nadran Ceremony is a sea ritual performed by fishermen in West Java as a form of gratitude for the sea's bounty.",
        "province": "West Java",
        "address": "Indramayu, West Java"
      },
      {
        "id": 6,
        "name": "Ondel-ondel",
        "description": "Ondel-ondel is a traditional Betawi performance featuring giant puppets and is an icon of Jakarta's culture.",
        "province": "Jakarta",
        "address": "Betawi Village, Jakarta"
      },
      {
        "id": 7,
        "name": "Ruwatan",
        "description": "Ruwatan is a traditional Javanese ceremony aimed at cleansing oneself from bad luck and evil spirits.",
        "province": "Central Java",
        "address": "Surakarta, Central Java"
      },
      {
        "id": 8,
        "name": "Pakarena Dance",
        "description": "Pakarena Dance is a traditional dance from South Sulawesi depicting the grace and politeness of Bugis women.",
        "province": "South Sulawesi",
        "address": "Gowa, South Sulawesi"
      },
      {
        "id": 9,
        "name": "Ararem",
        "description": "Ararem is a tradition of delivering dowries in the culture of West Papua with traditional dances and music.",
        "province": "West Papua",
        "address": "Sorong, West Papua"
      },
      {
        "id": 10,
        "name": "Bonet Dance",
        "description": "Bonet Dance is a traditional dance from East Nusa Tenggara that reflects the spirit of togetherness and cooperation.",
        "province": "East Nusa Tenggara",
        "address": "Kupang, East Nusa Tenggara"
      }
    ];

    const cultureContainer = document.getElementById('culture-items');

    cultures.forEach(culture => {
      const cultureElement = document.createElement('div');
      cultureElement.classList.add('col-md-2', 'culture-card');
      cultureElement.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${culture.name}</h5>
            <p class="card-text">${culture.description}</p>
            <p class="card-text"><small class="text-muted">${culture.province}</small></p>
            <p class="card-text"><small class="text-muted">${culture.address}</small></p>
          </div>
        </div>
      `;
      cultureContainer.appendChild(cultureElement);
    });
  },
};

export default Beranda;
