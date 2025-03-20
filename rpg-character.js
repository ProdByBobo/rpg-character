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
}

customElements.define('rpg-character', RPGCharacter);