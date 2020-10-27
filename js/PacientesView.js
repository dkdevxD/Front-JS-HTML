class PacientesView extends View {

  constructor(elemento) {
    super(elemento);
  }

  template(modelo) {
    return `
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Peso(kg)</th>
              <th scope="col">Altura(m)</th>
              <th scope="col">IMC</th>
            </tr>
          </thead>
          <tbody>
            ${modelo.pacientes.map(p => 
              `
                <tr>
                  <td>${p.nome}</td>
                  <td>${p.peso}</td>
                  <td>${p.altura}</td>
                  <td>${p.imc.toFixed(2)}</td>
                </tr>
              `
            ).join('')}
          </tbody>
        </table>
      `
  }

  update(modelo) {
    this.elemento.innerHTML = this.template(modelo);
  }
}