//Meus dados pessoais
//Inserção no vetor
//Mostrar na tela

/*vetor*/
var valores = []; // declarando um vetor
valores.push("Cama"); 
valores.push( "123");
valores.push(100.50);
valores.push("Mesa"); 
valores.push( "124");
valores.push(200.55);
console.log("O valor é", valores[2]+valores[5]);

/*Estrutura*/
//estrutura, dicionário, classe anônima
var lista_produtos = []

lista_produtos.push({
    nome_produto: "CAMA",
    codigo:"123",
    valor: 100.50
})

lista_produtos.push({
    nome_produto: "MESA",
    codigo:"124",
    valor: 200.55
})

soma = lista_produtos[0].valor + lista_produtos[1].valor;
console.log("O valor é", soma)