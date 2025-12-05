/*3) Substituir Palavras

Peça ao usuário digitar uma frase contendo a palavra "startup" e substitua por "empresa".

Exemplo:
Entrada: Estou montando uma startup de tecnologia
Saída: Estou montando uma empresa de tecnologia

Método útil: replace("busca", "troca")*/

//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Digite uma frase com a palavra startup: ");
    let frase = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log (frase.replace("startup","empresa"));
        
})();
