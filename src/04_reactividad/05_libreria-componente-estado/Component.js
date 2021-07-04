class Component {
  // constructor del componente
  constructor(options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  }
  // methods

  // render UI
  render() {
    const $el = document.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
    console.log(this.data);
  }

  // actualizar el state de manera reactiva
  setState(obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  }

  // obtener copia inmutable del state
  getState() {
    return JSON.parse(JSON.stringify(this.data));
  }
}

export { Component };
