const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        const link = new URL(event.target.href).pathname;
        Router.go(link);
      });
    });

    // Event handle for URL Changes
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;

    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Home Page';

        break;

      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Order Page';

        break;

      default:
        if (route.startsWith('products-')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Details Page';

          const paramId = route.substring(route.lastIndexOf('-') + 1);

          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      const main = document.querySelector('main');
      main.innerHTML = '';
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
