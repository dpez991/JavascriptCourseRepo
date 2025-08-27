// Funcion setTimeout en JS
miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log("funcion 1");
}
function miFuncion2(){
    console.log("funcion 2");
}

// Funcion de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

// Llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log("saludo asincrono 1 despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); // Despues de 3 segundos

// Tambien se puede pasar la funcion directamente como parametro en lugar de la referencia
setTimeout(function(){console.log("saludo asincrono 2 despues de 4 segundos")}, 4000);

// Sintaxis mas simplificada con el uso de funciones flecha
setTimeout( () => console.log("saludo asincrono 3 despues de 1 segundos"), 1000);