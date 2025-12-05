const readline = require("readline");

// Função para validar CPF
function validaCPF(cpf) {

  // Se nada foi digitado, já está errado
  if (!cpf) {
    return false;
  }

  // Remove tudo que não for número
  let apenasDigitos = "";
  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] >= "0" && cpf[i] <= "9") {
      apenasDigitos = apenasDigitos + cpf[i];
    }
  }

  // CPF tem que ter 11 dígitos
  if (apenasDigitos.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (ex: 11111111111)
  let todosIguais = true;
  for (let i = 1; i < 11; i++) {
    if (apenasDigitos[i] !== apenasDigitos[0]) {
      todosIguais = false;
      break;
    }
  }
  if (todosIguais) {
    return false;
  }

  // Transforma os caracteres em números
  let nums = [];
  for (let i = 0; i < 11; i++) {
    nums[i] = Number(apenasDigitos[i]);
  }

  // ----------------------------
  // CÁLCULO DO PRIMEIRO DÍGITO
  // ----------------------------
  let soma = 0;
  let multiplicador = 10;

  // Multiplica os 9 primeiros dígitos
  for (let i = 0; i < 9; i++) {
    soma = soma + nums[i] * multiplicador;
    multiplicador = multiplicador - 1;
  }

  let resto = soma % 11;
  let digito1;

  if (resto < 2) {
    digito1 = 0;
  } else {
    digito1 = 11 - resto;
  }

  // Se o dígito calculado estiver errado → CPF inválido
  if (nums[9] !== digito1) {
    return false;
  }

  // ----------------------------
  // CÁLCULO DO SEGUNDO DÍGITO
  // ----------------------------
  soma = 0;
  multiplicador = 11;

  for (let i = 0; i < 10; i++) {
    soma = soma + nums[i] * multiplicador;
    multiplicador = multiplicador - 1;
  }

  resto = soma % 11;
  let digito2;

  if (resto < 2) {
    digito2 = 0;
  } else {
    digito2 = 11 - resto;
  }

  if (nums[10] !== digito2) {
    return false;
  }

  // CPF passou em todas as regras → válido
  return true;
}

// Entrada pelo terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um CPF: ", function(cpfDigitado) {

  if (validaCPF(cpfDigitado)) {
    console.log("CPF VÁLIDO ✔️");
  } else {
    console.log("CPF INVÁLIDO ❌");
  }

  rl.close();
});
