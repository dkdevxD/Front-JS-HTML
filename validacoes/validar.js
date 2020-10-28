import { validarNome, validarPeso, validarAltura } from './validacoes.js';

const msgErro = (tipo, validity) => {
  const tiposDeErro = ['valueMissing'];

  let msgDeErro = ''

  const msgsDeErro = {
    nome: {
      valueMissing: 'O nome é necessário!',
      customError: 'O campo nome deve ser preenchido!!'
    },
    peso: {
      valueMissing: 'O peso é necessário!',
      customError: 'O campo peso deve ser preenchido!!'
    },
    altura: {
      valueMissing: 'A altura é necessária!',
      customError: 'O campo altura deve ser preenchido!!'
    },
  }

  tiposDeErro.forEach(erro => {
    if (validity[erro]) {
      msgDeErro = msgsDeErro[tipo][erro]
    }
  });

  return msgDeErro;
};


export const validarInput = (input, addErro = true) => {
  const classElementoErro = 'erro-validacao';
  const classInputErro = 'tem-erro-validacao';

  const elementoPai = input.parentNode;
  const elementoErroExiste = elementoPai.querySelector(`.${classElementoErro}`);
  const elementoErro = elementoErroExiste || document.createElement('div');

  const elementoEhValido = input.validity.valid;
  const tipo = input.dataset.tipo;
  const validadoresEspecificos = {
    nome: input => validarNome(input),
    peso: input => validarPeso(input),
    altura: input => validarAltura(input)
  }

  if (validadoresEspecificos[tipo]) {
    validadoresEspecificos[tipo](input);
  }

  if (!elementoEhValido) {
    elementoErro.className = classElementoErro;
    elementoErro.textContent = msgErro(tipo, input.validity);
    if (addErro)
      input.after(elementoErro);
    input.classList.add(classInputErro);
  } else {
    elementoErro.remove();
    input.classList.remove(classInputErro);
  }
}