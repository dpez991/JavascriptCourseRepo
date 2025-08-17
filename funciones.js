// Funciones en JS
// Una funcion es un bloque de codigo reutilizable, que realiza una tarea en particular
// Puede tener parametros de entrada y tambien puede devolver un valor de salida

// 1. Declarar la funcion
function sumar(a, b){
    let resultadoSuma = a + b;
    return resultadoSuma;
};

// 2. Lllamar o invocar a la funcion
let argA = 5, argB = 7;
let resultado = sumar(argA,argB);

console.log(`Resultado suma: ${resultado}`);