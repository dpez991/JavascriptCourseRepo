// Modo Strict en JS
// Para evitar poder usar variables antes de declararlas lo cual es una mala practica
// Se puede usar en el inicio para todo el programa
"use strict";
x = 10; // no se puede sin un let, const, o var
console.log(x);

miFuncion();

function miFuncion(){
    // Se puede usar el modo estricto para solo una funcion y no todo el programa
    "use strict";
    let y = 15; // Mismo caso, se debe declarar
    console.log(y);
}