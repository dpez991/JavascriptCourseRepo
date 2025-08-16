'use strict' // desactiva el concepto de hoisting

// Hoisting (podemos usar una variable y despues declararla)
//var x; // 1. declarar la variable
x = 10; // 2. inicializamos la variable
//y = 5; // al usar let no aplica el concepto de hoisting

console.log(x);

var x;
let y;

// el concepto de hoisting solamente funciona con var y no con let
/* aun asi no se recomienda usar var, ya que es recomendable que la declaracion de  
las variable este siempre al inicio y posteriormente usarlas */
