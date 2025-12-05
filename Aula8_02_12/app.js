// Arquivo: app.js

const readline = require("readline");
const validaCPF = require("./validaCPF"); // importa a função

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
