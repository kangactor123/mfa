class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const template = document.createElement("template");

    template.innerHTML = `
        <style>
          h2 {
            color: red;
          }
        </style>
        <h2>홈</h2>
        <button id="btn">버튼</button>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector("#btn")
      .addEventListener("click", this.onClick);
  }

  onClick() {
    alert("click");
  }
}

customElements.define("home-component", HomeComponent);
