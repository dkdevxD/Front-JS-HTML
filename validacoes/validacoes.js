export const validarNome = input => {
  const nome = input.value
  if (nome.length === 0 || nome.value == '') {
    input.setCustomValidity('O campo nome deve ser preenchido!');
    return;
  }
  input.setCustomValidity('');
  return;
}

export const validarPeso = input => {
  const peso = input.value;
  if (peso > 300) {
    input.setCustomValidity('O campo peso deve ser preenchido!');
    return;
  }
  input.setCustomValidity('');
  return;
}

export const validarAltura = input => {
  const altura = input.value;
  if (altura > 3.00) {
    input.setCustomValidity('O campo altura deve ser preenchido!');
    return;
  }
  input.setCustomValidity('');
  return;
}