import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

window.app = {}; // add a global variable attached to the window
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
  loadData();
});
