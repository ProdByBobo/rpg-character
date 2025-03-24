const { html } = require("lit");

class RPGCharacter extends HTMLElement {
  constructor() {
    super();
    this.title = "RPG Characters";
    this._data = "https://www.psu.edu/";
    this.header = "";
    this.t = {
      title: "Title",
      ...this.t,
    };
    this.registerLocalization({
      context: this,
      localesPath: new URL("./locales/rpg-character.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  registerLocalization({ context, localesPath, locales }) {
  }
  static get properties ()
  {
    return {
      title: { type: String },
      _data: { type: String },
      header: { type: String },
    };
  }
  static get styles()
  {
    return [super.styles,css`
    :root, html, body {
      margin: 0;
      padding: 0;
    }
    #demo {
      margin: var(--ddd-spacing-2);
    }
    .character-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--ddd-spacing-6);
      margin: var(--ddd-spacing-6);
      margin-bottom: var(--ddd-spacing-6); /* Add a larger bottom margin */
      border: var(--ddd-border-md);
      border-radius: var(--ddd-radius-lg);
    }
    .character-wrapper a {
      margin-top: var(--ddd-spacing-2);
      margin-bottom: 50px; 
      text-decoration: none;
      color: inherit;
    }
    #fetch-contributors {
      margin-bottom: var(--ddd-spacing-100); 
    }
    #character-count {
      margin: var(--ddd-spacing-2) 0; 
      font-weight: bold;
    }
    #character-container {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: var(--ddd-spacing-4);
    }
    #character-container > * {
  margin-bottom: var(--ddd-spacing-8); /* Add a larger bottom margin between characters */
  }
  `];
  }

  render() {
    return html`
    <div id="fetch-contributors-container">
      <button id="fetch-contributors">Fetch Contributors</button>
    </div>
    <div id="character-count-container">
      <div id="character-count"></div>
    </div>
    <div id="character-count"></div>
    <div id="character-container"></div>
    `;
  }
}

customElements.define('rpg-character', RPGCharacter);