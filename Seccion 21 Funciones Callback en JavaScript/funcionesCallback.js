// Funciones Callback en JS
// Es una funcion que se pasa como parametro a otra funcion y dentro de una funcion vamos a poder llamar a otra funcion
miFuncion2();
miFuncion1();

function miFuncion1(){
    console.log("funcion 1");
}
function miFuncion2(){
    console.log("funcion 2");
}

// Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}
/*let imp = function imprimir(mensaje){
    console.log(mensaje);
}*/

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}
/*function sumar(op1, op2, imprimir){
    let res = op1 + op2;
    imprimir(`Resultado: ${res}`);
}*/

sumar(5, 3, imprimir);
//sumar(5, 3, imp);