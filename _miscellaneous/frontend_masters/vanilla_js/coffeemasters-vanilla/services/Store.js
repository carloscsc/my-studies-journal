import API from './API.js';

const Store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;

    if (property === 'menu') {
      window.dispatchEvent(new Event('appmenuchanged'));
    }

    if (property === 'cart') {
      window.dispatchEvent(new Event('appchartchanged'));
    }

    return true;
  },
});

export default proxyStore;
