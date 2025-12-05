/*for (let i=1; i<10; i+=2){
    console.log(i);
}
console.log("\n");
for (let i=0; i<10; i+=2){
    console.log(i);
}*/



function sorteado() {
    return Math.floor(Math.random() * 11);
}

const input = require("../input");
let tentativa = 0;

console.log(`\n Sorteio de Número \n`);

(async () => {

      for (let numeroSorteado=-1, tentativa, contador = 0; contador<10 && tentativa != numeroSorteado; contador++){
        numeroSorteado = sorteado()
        console.log("Número Sorteado pelo sistema! " + numeroSorteado)
        console.log("Advinhe o número!")
        tentativa = Number(await input());
    } 
})();