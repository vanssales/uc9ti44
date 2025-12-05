/* Aula de repetições */
/* Vanessa Alessandra de Sales da Silva */

let prompt = require("prompt-sync")();

let resposta = 7;
let numero = 0;
let tentativas = 0;

while (numero != resposta && tentativas<5) {
    tentativas++;
    // Solicita que o usuário digite o número
    numero = parseInt(prompt("Digite um número: "));

    if (numero == resposta) {
        console.log("Parabéns, você acertou!");
    } else {
        console.log("Você errou!... Tente novamente.");
    }

    if (tentativas>=5) console.log(`Acabaram as suas ${tentativas} tentativas!`);
}

