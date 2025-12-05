/* Aula de repetições */
/* Vanessa Alessandra de Sales da Silva */

let prompt = require("prompt-sync")();

let resposta = 7;
let numero = 0;

while (numero != resposta) {
    // Solicita que o usuário digite o número
    numero = parseInt(prompt("Digite um número: "));

    if (numero == resposta) {
        console.log("Parabéns, você acertou!");
    } else {
        console.log("Você errou!... Tente novamente.");
    }
}
