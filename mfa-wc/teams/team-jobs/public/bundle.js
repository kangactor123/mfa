class JobsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");

    template.innerHTML = `
        <style>
            h2 {
              color: blue;
            }
        </style>
        <h2>채용공고</h2>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("jobs-component", JobsComponent);
