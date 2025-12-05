//enquanto usuario disser sim continua

const input = require("../input");

(async () => {
    let continuar = "sim";
    while(continuar == "sim"){
        console.log("Deseja continuar: (sim)")
        continuar = await input();
    }
})();