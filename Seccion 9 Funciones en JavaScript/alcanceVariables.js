// Alcance de Variables en JS

let variableGlobal = 5;

// Modificar el valor
variableGlobal = 10;

// Definicion funcion
function miFuncion(variableLocal){
    console.log(variableLocal);
    // Modificamos la variable global
    variableGlobal = 20;
    // No podemos redefinir una variable global (let)
    //let variableGlobal = 30; // Con var si se podria redifinir, lo cual pasaria a una variable local
};

// Llamamos la funcion
miFuncion(variableGlobal);
console.log(variableGlobal);