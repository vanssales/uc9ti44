
function sorteado() {
    return Math.floor(Math.random() * 11);
}

const input = require("../input");
let tentativa = 0;
let contador = 0;

console.log(`\n Sorteio de Número \n`);

(async () => {

    let tentativa
    let numeroSorteado

    do { //sempre quando eu quero que execute pelo menos uma vez
        numeroSorteado = sorteado()
        console.log("Número Sorteado pelo sistema! " + numeroSorteado)

        contador++;
        console.log("Advinhe o número!")
        tentativa = Number(await input());
    } while (tentativa != numeroSorteado && contador < 10)
})();