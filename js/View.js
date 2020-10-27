class View {
  constructor(elemento) {
    this.elemento = elemento;
  }

  template() {
    throw new Error('O método template precisa ser implementado!');
  }

  update(modelo) {
    this.elemento.innerHTML = this.template(modelo);
  }
}