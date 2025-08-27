// Bloque try catch finally en JS
// modo strict para que cuando usemos variables que no han sido declaradas nos tire error,
// para que podamos trabajar la sintaxis de manejo de errores
"use strict"

try{
    let x = 10;
    //miFuncion();
}
catch(error){
    console.log(error);
}
finally{
    console.log("termina la revision de errores");
}

console.log("continuamos...");