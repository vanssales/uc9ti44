const input = require("../input");
const { validaEmailTelefone } = require("./validacao");

(async () => {

    var agenda = [];
    let i = 0;
    let continuar = "sim";

    do {
        console.log("Insira o nome:");
        let nome = await input();

        console.log("Insira o telefone:");
        let telefone = await input();

        console.log("Insira o email:");
        let email = await input();

        // verifica somente uma vez
        if (validaEmailTelefone("telefone", telefone) &&
            validaEmailTelefone("email", email)) {

            agenda[i] = { nome, 
                        telefone, 
                        email };
            console.log("\n✔ Contato cadastrado!\n");
            i++;

        } else {
            console.log("❌ Contato NÃO cadastrado! Telefone ou email inválidos.");
        }

        console.log("Deseja continuar? (sim)");
        continuar = await input();

    } while (continuar == "sim" && i < 5);

    console.log("\n--- CONTATOS CADASTRADOS ---");
    for (let j = 0; j < i; j++) {
        console.log(agenda[j]);
    }

})();
