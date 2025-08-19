// Metodo constructor de Objetos
// Para crear mas de un objeto persona se hace mas facil utilizando un metodo constructor
// Ya que si no habria que cambiar el nombre de cada propiedad del objeto nuevo 

// los metodos constructores deberian de iniciar en Mayus
// Funcion constructor de objetos de tipo Persona
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