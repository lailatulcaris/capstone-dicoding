import Beranda from "../views/pages/beranda";
import Budaya from "../views/pages/budaya";
import DetailBudaya from "../views/pages/detail-budaya";
import Pariwisata from "../views/pages/pariwisata";
import DetailPariwisata from "../views/pages/detail-pariwisata";
import About from "../views/pages/about";

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/budaya': Budaya,
  '/pariwisata': Pariwisata,
  '/about': About,
  '/budaya/:id': DetailBudaya,
  '/pariwisata/:id': DetailPariwisata,
};

export default routes;
