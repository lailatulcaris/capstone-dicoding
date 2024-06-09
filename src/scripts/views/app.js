import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    console.log(url);
    console.log(routes[url]);
    console.log(page);

    if (page) {
      try {
        this._content.innerHTML = await page.render();
        console.log(this._content);
        await page.afterRender();
      } catch (error) {
        this._content.innerHTML = '<h2>Ups.. halaman tidak ditemukan!</h2>';
        console.log(error);
      }
    } else {
      this._content.innerHTML = '<h2>Ups.. halaman tidak ditemukan!</h2>';
      console.log(`Page not found for route: ${url}`);
    }
  }
}

export default App;
