/* Aula de repetições */
/* Vanessa Alessandra de Sales da Silva */

let prompt = require("prompt-sync")();
 
let suaresposta = -10;

let tentativas = 0;

function sorteado(){
    return Math.floor(Math.random()*11);
}

let numero = sorteado()

while (numero != suaresposta && tentativas<5) {
    tentativas++;
    // Solicita que o usuário digite o número
    
    console.log("O numero para acertar é", numero);

    suaresposta = parseInt(prompt("Digite um número: "));

    if (suaresposta == numero) {
        console.log("Parabéns, você acertou!");
    } else {
        console.log("Você errou!... Tente novamente.");
    }

    if (tentativas>=5) console.log(`Acabaram as suas ${tentativas} tentativas!`);
}