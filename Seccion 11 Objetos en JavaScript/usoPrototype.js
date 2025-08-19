// Uso de Prototype
// Permite añadir nuevas propiedades a todos los objetos fuera del metodo constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

// Agregando una nueva propiedad para todos los objetos, fuera del metodo constructor
Persona.prototype.tel = "0000-0000";

// Creando objetos con el metodo constructor Persona
let madre = new Persona("Iris", "Borjas", "iborjas188@gmail.com");
madre.tel = "9460-2404"; // Modificiando la nueva propiedad agregada individualmente
console.log(madre);
console.log(madre.tel); // Se muestra el cambio del valor predeterminado

let hijo = new Persona("David", "Borjas", "dpez991@gmail.com");
hijo.tel = "9596-7467"; // Modificiando la nueva propiedad agregada individualmente
console.log(hijo);
console.log(hijo.tel); // Se muestra el cambio del valor predeterminado

let novia = new Persona("Valeria", "Marriaga", "valem20@gmail.com");
novia.tel = "8981-9564"; // Modificiando la nueva propiedad agregada individualmente
console.log(novia);
console.log(novia.tel); // Se muestra el cambio del valor predeterminado