class PacienteController {
  constructor() {
    const $ = document.querySelector.bind(document);
    this.inputNome = $('#nome');
    this.inputPeso = $('#peso');
    this.inputAltura = $('#altura');

    this.listaPacientes = new ListaPacientes();

    this.pacientesView = new PacientesView($('#pacientes-view'));
    this.pacientesView.update(this.listaPacientes);
    this.limpaForm();

    this.mensagem = new Mensagem();
    this.mensagemView = new MensagemView($('.mensagem-view'));
  }

  adiciona(event) {
    event.preventDefault();

    this.listaPacientes.adiciona(this.criaPaciente());

    this.pacientesView.update(this.listaPacientes);

    this.mensagem.texto = 'Paciente adicionado com sucesso!';
    this.mensagemView.update(this.mensagem);

    this.limpaForm();

  }

  criaPaciente() {
    return new Paciente(
      this.inputNome.value,
      this.inputPeso.value,
      this.inputAltura.value
    );
  }

  limpaForm() {
    this.inputNome.value = '';
    this.inputPeso.value = '';
    this.inputAltura.value = '';
    this.inputNome.focus();
  }
}