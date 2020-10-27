class ListaPacientes {

  constructor() {
    this._pacientes = []
  }

  adiciona(paciente) {
    this._pacientes.push(paciente);
  }

  get pacientes(){
    return this._pacientes;
  }
}