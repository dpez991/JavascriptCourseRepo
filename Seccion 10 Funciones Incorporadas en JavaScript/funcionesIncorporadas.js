// Funciones Incorporadas en JS

// Obtener el largo de una cadena
let cadena1 = "Hola";
console.log(cadena1.length);

// No podemos modificiar una cadena en JS
// Las cadenas son inmutables
cadena1[0] = "x"; // No se puede
console.log(cadena1);

// Si podemos asignar una nueva cadena
cadena1 = "Adios";
console.log(cadena1);

// Recorrer cada caracter
for(i = 0; i < cadena1.length; i++){
    console.log(`${i} - ${cadena1[i]}`);
};