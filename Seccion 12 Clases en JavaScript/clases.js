// Clases en JS
// Una clase es una plantilla, posee un nombre, posee atributos y metodos, 
// Un objeto es una instancia de una clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona("David", "Borjas");
console.log(persona1);

let persona2 = new Persona("Valeria", "Marriaga");
console.log(persona2);