/** CUSTOM ELEMENT */
class MyElement extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM tree to the element
    const shadow = this.attachShadow({ mode: 'open' });

    // Create some content inside the element
    const wrapper = document.createElement('div');
    wrapper.textContent = 'Hello, this is a custom element!';

    // Append the wrapper to the shadow root
    shadow.appendChild(wrapper);
  }

  connectedCallback() {} // the element is added to the dom
  disconnectedCallback() {} // The element is removed to the dom
  adoptedCallback() {} // The element has been moved to a new document
  attributeChangedCallback(name, oldValue, newValue) {} // fire when the other change
}

// Define the custom element
customElements.define('my-element', MyElement);

// in HTML: <my-element></my-element>
