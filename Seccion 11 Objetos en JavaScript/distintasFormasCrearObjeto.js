// Distintas formas de crear un objeto
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

// Creando objetos con el metodo constructor Persona
let madre = new Persona("Iris", "Borjas", "iborjas188@gmail.com");
console.log(madre);

let hijo = new Persona("David", "Borjas", "dpez991@gmail.com");
console.log(hijo);

let novia = new Persona("Valeria", "Marriaga", "valem20@gmail.com");
console.log(novia);

// Modificando un objeto del metodo constructor Persona
novia.email = "valemarriaga20@gmail.com";
console.log(novia);
console.log(hijo);
console.log(madre);
// Solamente se hacen los cambios al objeto especificado

// Accediendo a un metodo del metodo constructor para un objeto
console.log(madre.nombreCompleto());
console.log(hijo.nombreCompleto());
console.log(novia.nombreCompleto());

// Crear nuevos objetos
let miObjeto = new Object(); // uso de new, mas formal, objetos
let miObjeto2 = {}; // mas breve, mas recomendada, primitivos

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array(1,2,3);
let miArreglo2 = [1,2,3];

let miFuncion = new Function();
let miFuncion2 = function(){};
