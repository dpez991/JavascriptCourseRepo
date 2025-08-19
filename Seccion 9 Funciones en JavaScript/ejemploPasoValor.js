// Paso Valor en JS
// Pasando informacion de tipo primitivo (numberm bool, string)

function cambiarValor(parametro){
    parametro = 20;
};

let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

// Solamente se manda una copia del valor de argumento, por lo cual la funcion no cambia el valor 
// en el programa principal, si no que solamente dentro de la funciona