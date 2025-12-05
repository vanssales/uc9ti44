/*

Você foi contratado para criar o sistema de uma lanchonete.

Esse sistema deve permitir que o cliente escolha o preço dos
produtos usados no lanche e, automaticamente, calcule o valor
final dos lanches considerando o lucro que o cliente espera ter

Os ingredientes são
Pão, salsicha, bacon, purê de batata, salada e batata palha

Este é o cardápio do restaurante
1 - Hotdog simples Salsicha e pure
2 - Dog Salada Salsicha e salada
3 - Dog Duplo Especial Duas salsichas, purê e bacon
4 - Dog-Tudo Duas salsichas, purê em dobro, bacon, salada

Considere que todos os lanches contém Pão e Batata Palha

------ ATIVIDADE
Mostre o valor dos lanches para o dono, sendo o preço de custo,
e o valor para o cliente final, considerando o lucro (preço venda)


*/

/*
    Atividade de Sistema bancário
*/

const input = require("../input");

(async ()=>{


    /*Pão, salsicha, bacon, purê de batata, salada e batata palha - valores*/
    console.log("😊Qual o valor do pão?");
    let valorpao = Number(await input());
    console.log("😀Qual o valor da salsicha?");
    let valorsalsicha = Number(await input());
    console.log("😀Qual o valor do bacon?");
    let valorbacon = Number(await input());
    console.log("😀Qual o valor do purê de batata?");
    let valorpure = Number(await input());
    console.log("😀Qual o valor da salada?");
    let valorsalada = Number(await input());
    console.log("😀Qual o valor da batata palha?");
    let valorpalha = Number(await input());
    console.log("😀Qual o valor do lucro em porcentagem [0-100]?");
    let porcentagemlucro = Number(await input());
    let valorlucro = (porcentagemlucro / 100) + 1;
    
    /*
    1 - Hotdog simples Salsicha e pure
    2 - Dog Salada Salsicha e salada
    3 - Dog Duplo Especial Duas salsichas, purê e bacon
    4 - Dog-Tudo Duas salsichas, purê em dobro, bacon, salada
    */

    console.log("😊Bem vindo ao Vanessa's Burguer");
    console.log("😀Digite 1 para escolher Hotdog simples Salsicha e pure");
    console.log("😀Digite 2 para escolher Dog Salada Salsicha e salada:");
    console.log("😀Digite 3 para escolher Hot Dog Duplo Especial Duas salsichas, purê e bacon");
    console.log("😀Digite 4 para escolher Dog-Tudo Duas salsichas, purê em dobro, bacon, salada:");
    
    let opcao = Number(await input());
    
    if (opcao == 1)
    {
        /*Considere que todos os lanches contém Pão e Batata Palha*/
        hotsimples=(valorpao+valorpalha+valorsalsicha+valorpure);
        hotsimples= hotsimples * valorlucro;
        
        console.log(`😀O lanche custa ${hotsimples}`);
    }    

    if (opcao == 2)
        {
            /*Considere que todos os lanches contém Pão e Batata Palha*/
            dogsalada=(valorpao+valorpalha+(valorsalsicha*2)+valorpure+valorbacon);
            dogsalada= dogsalada * valorlucro;
            console.log(`😀O lanche custa ${dogsaladas}`);
        }  

    if (opcao == 3)
    {
        /*Considere que todos os lanches contém Pão e Batata Palha*/
        dogduploespecial=(valorpao+valorpalha+valorsalsicha+valorpure);
        dogduploespecial= dogduploespecial * valorlucro;
        console.log(`😀O lanche custa ${dogduploespecial}`);
    }  

    if (opcao == 4)
    {
        /*Considere que todos os lanches contém Pão e Batata Palha*/
        dogtudo2salsichas=(valorpao+valorpalha+(valorsalsicha*2)+(valorpure*2)+valorbacon+valorsalada);
        dogtudo2salsichas= dogtudo2salsichas * valorlucro;
        console.log(`😀O lanche custa ${dogtudo2salsichas}`);
    }  
   
    if (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4)
    {
        console.log("Digite uma opção válida! [1 , 2 , 3 ou 4]!");

    }
    
})();
