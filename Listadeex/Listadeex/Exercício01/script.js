let ipTexto = document.querySelector("#valor");
let Resultado = document.querySelector("#Resultado1");
let Calcular = document.querySelector("#btResultado");

function CalcularReajuste(){
let num1 = Number(ipTexto.value);
let soma = (num1* (1/100))+ num1;
Resultado.textContent = String(soma);
}
Calcular.onclick=function(){
    CalcularReajuste();
}
// exercício 2% //
let ipTexto2 = document.querySelector("#valor2");
let Resultado2 = document.querySelector("#Resultado2");
let Calcular2 = document.querySelector("#btResultado2");

function CalcularReajuste2(){
    let num2 = Number(ipTexto2.value);
    let somar = (num2* (2/100))+ num2;
    Resultado2.textContent = String(somar);
}
Calcular2.onclick=function(){
    CalcularReajuste2()
}
// exercício 5%//
let ipTexto3 = document.querySelector("#valor3");
let Resultado3 = document.querySelector("#Resultado3");
let Calcular3 = document.querySelector("#btResultado3");

function CalcularReajuste3(){
    let num3 = Number(ipTexto3.value);
    let somas = (num3*(5/100))+ num3;
    Resultado3.textContent = String(somas);
}
Calcular3.onclick=function(){
    CalcularReajuste3();
}
// exercício 10% //
let ipTexto4 = document.querySelector("#valor4");
let Resultado4 = document.querySelector("#Resultado4");
let Calcular4 = document.querySelector("#btResultado4");

function CalcularReajuste4(){
    let num4 = Number(ipTexto4.value);
    let Reaj = (num4*(10/100))+num4;
    Resultado4.textContent = String(Reaj)
}
Calcular4.onclick=function(){
CalcularReajuste4()
}