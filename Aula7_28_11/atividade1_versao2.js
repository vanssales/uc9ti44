function div(n1, n2=1){
    return n1 / n2
}

function mult(n1, n2=1){
    return n1 * n2
}

function subtrai(n1, n2=0){
    return n1 - n2
}

function soma(n1, n2=0){
    return n1 + n2
}

const input = require("../input");

(async ()=>{
 
    let func;

    let flag = true;
    
    while (flag==true){

        console.log("Coloque o primeiro número [obrigatório]: ")
        let num1 =Number( await input())
        console.log("Coloque o segundo número [opcional]: ")
        let num2 =Number( await input())
       
        console.log(`O que você deseja fazer?
            1 - divisão
            2 - multiplicacao
            3 - subtração
            4 - soma
            5 - sair
        `);
        let opcao = await input();

        switch(opcao){
            case '1': func = div; break;
            case '2': func = mult; break;
            case '3': func = subtrai; break;
            case '4': func = soma; break;
            case '5': console.log("Sair sem fazer operacao!"); flag=false; break;
        }

        if (flag==true)
        {
        let resposta = func(num1, num2)
        console.log("REsposta: "+resposta)
        }
    }
   
})()