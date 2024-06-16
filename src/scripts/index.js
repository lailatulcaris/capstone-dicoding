/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skeleton.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../scripts/components/app-nav.js';
import '../scripts/components/app-footer.js';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
