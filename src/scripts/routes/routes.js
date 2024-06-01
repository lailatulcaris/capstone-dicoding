import Beranda from "../views/pages/beranda";
import Budaya from "../views/pages/budaya";
import Pariwisata from "../views/pages/pariwisata";
import About from "../views/pages/about";
 
const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/budaya': Budaya,
  '/pariwisata': Pariwisata,
  '/about': About,
  // '/budaya/detail/:id': Detail,
};
 
export default routes;