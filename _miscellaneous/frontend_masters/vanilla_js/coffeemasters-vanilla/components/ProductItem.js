export class ProductItem extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const data = JSON.parse(this.dataset.product);
    const li = document.createElement('li');
    li.textContent = data.name;
    li.id = data.id;

    this.root.appendChild(li);
  }
}

customElements.define('product-item', ProductItem);
