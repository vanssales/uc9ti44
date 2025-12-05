/*
    um programa que pede 3 número, valida se os números
    são validos, e formam um triangulo, se for um triangulo
    diz se ele é equilatero, isoceles, ou escaleno
*/

const input = require("../input");

(async ()=>{
    console.log("Coloque o primeiro lado do triângulo! ");
    let a = Number (await input());

    console.log("Coloque o segundo lado do triângulo! ");
    let b = Number (await input());

    console.log("Coloque o terceiro lado do triângulo! ");
    let c = Number (await input());
   
    if(isNaN(a)){
        console.log("O lado a deve ser um número ")
    }

    if(isNaN(b)){
        console.log("O lado b deve ser um número ")
    }

    if(isNaN(c)){
        console.log("O lado c deve ser um número ")
    }
    
    if ((a < b + c) && ( b < a + c) && (c < a + b))
    {
        console.log("os lados formam um triângulo!")

        if ((a==b) && (b==c))
        {
            console.log("triângulo equilátero");
            }else 
                if((a==b)||(b==c)||(a==c))
                {
                console.log("triangulo isósceles");
                }
                else
                {
              console.log("triangulo escaleno");    
                }
        }
    else
    {
        console.log("triangulo inexistente!")

    }  
}    
)();