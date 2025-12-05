//enquanto usuario disser sim continua

const input = require("../input");

(async () => {
    let continuar
    do{ //sempre quando eu quero que execute pelo menos uma vez
        console.log("Deseja continuar: (sim)")
        continuar = await input();
    }while(continuar == "sim")
})();