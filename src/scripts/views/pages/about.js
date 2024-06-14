const About = {
    async render() {
        return `
      <div class="custom-container">
        <img data-src="logo-tanpa-bg.png" class="sinematik-image lazyload" alt="Logo">
        <p class="sinematik-text">Tim kami memilih proyek "Pesona Budaya Nusantara (Travel in)" karena yakin kekayaan budaya Indonesia dapat meningkatkan pariwisata. Kami bertujuan meningkatkan daya tarik destinasi pariwisata Indonesia serta mempromosikan nilai budaya Indonesia secara global.</p>
    </div>
    
      <div class="container mt-5">
        <div class="section-title">
            <center><h2>Our Team</h2></center>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img data-src="aldy.jpeg" class="card-img-top lazyload" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Muhammad Rizaldy Alifiansyah</h5>
                        <p class="card-text">Project Manager</p>
                        <div class="d-grid gap-2 text-center">
                            <a href="https://github.com/Mrzalf" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>
                            <a href="https://www.linkedin.com/in/mrzalf/" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img data-src="carisma.jpeg" class="card-img-top lazyload" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Lailatul Carisma Putri</h5>
                        <p class="card-text">Front End Developer</p>
                        <div class="d-grid gap-2 text-center">
                            <a href="https://github.com/lailatulcaris" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>
                            <a href="https://www.linkedin.com/in/lailatul-carisma-putri-50525330a/" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img data-src="syarif.jpeg" class="card-img-top lazyload" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Muhammad Syarif Yahya SH</h5>
                        <p class="card-text">Back End Developer</p>
                        <div class="d-grid gap-2 text-center">
                            <a href="https://github.com/syarifyahyash" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>
                            <a href="https://www.linkedin.com/in/muhammad-syarif-yahya-shafaruddin-hermawan-476193256/" class="btn btn-primary" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default About;
