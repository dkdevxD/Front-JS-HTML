class Paciente {
  constructor(nome, peso, altura) {
    this._nome = nome;
    this._peso = peso;
    this._altura = altura;
    Object.freeze(this);
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this.nome = nome;
  }

  get peso() {
    return this._peso;
  }

  get altura() {
    return this._altura;
  }

  get imc() {
    return this._peso / (this._altura * this._altura);
  }
}