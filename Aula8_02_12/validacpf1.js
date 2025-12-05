const readline = require("readline");

function validaCPF(cpf) {
  if (!cpf) return false;

  const apenasDigitos = cpf.replace(/\D/g, "");
  if (apenasDigitos.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(apenasDigitos)) return false;

  const nums = [...apenasDigitos].map(Number);

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += nums[i] * (10 - i);
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;
  if (nums[9] !== digito1) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += nums[i] * (11 - i);
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;
  if (nums[10] !== digito2) return false;

  return true;
}

// --- Entrada pelo terminal (Node.js) ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um CPF: ", (cpf) => {
  if (validaCPF(cpf)) {
    console.log("CPF VÁLIDO ✔️");
  } else {
    console.log("CPF INVÁLIDO ❌");
  }
  rl.close();
});
