export class MenuPage extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });

    const styles = document.createElement('style');
    this.root.appendChild(styles);

    async function loadCSS() {
      const request = await fetch('/components/MenuPage.css');
      const css = await request.text();
      styles.textContent = css;
    }
    loadCSS();
  }

  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener('appmenuchanged', () => {
      this.render();
    });
  }

  render() {
    if (app.store.menu) {
      for (let category of app.store.menu) {
        const products = [];

        for (let items of category.products) {
          products.push(`<li>${items.name}</li>`);
        }

        this.root.innerHTML += `
          <h3>${category.name}</h3>
          <ul class="category">
            ${products.join('')}
          </ul>
        `;
      }
    } else {
      this.root.querySelector('#menu').innerHTML = 'Loading...';
    }
  }
}

customElements.define('menu-page', MenuPage);
