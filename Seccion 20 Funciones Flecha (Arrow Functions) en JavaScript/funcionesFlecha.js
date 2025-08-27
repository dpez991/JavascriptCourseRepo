// Funciones Flecha (Arrow Functions) en JS
// Funcion normal
let miFuncion = function (){
    console.log("Saludos desde mi funcion");
}

// Con las funciones flecha no se aplica el concepto de Hoisting
// Funcion flecha, se puede con const o let
// Debido a que estamos trabajando con funciones lo mas comun es que no volvamos a modificar su referencia, 
// por lo cual usamos const

// const miFuncionFlecha = () => {
//     console.log("Saludos desde mi funcion flecha");
// }

//const miFuncionFlecha = () => console.log("Saludos desde mi funcion flecha");

// miFuncionFlecha();

// const saludar = () => {
//     return "Saludos desde funcion flecha";
// }

const saludar = () => "Saludos desde funcion flecha";

console.log(saludar());

const regresaObjeto = () => ({nombre: "David", apellido: "Borjas"});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

// const funcionConParametros = (mensaje) => console.log(mensaje);
// Sintaxis simplificada = nombre, parametros, cuerpo de nuestra funcion
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros("saludos con parametros");

// const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(3,5));