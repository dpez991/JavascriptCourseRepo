// Get y Set en Clases en JS
// No es posible crear objetos antes de declarar la clase
// No se aplica el concepto de hoisting
//let persona2 = new Persona("Valeria", "Marriaga");

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

let persona1 = new Persona("David", "Borjas");
persona1.nombre = "David Alejandro"; // set nombre("David Alejandro")
console.log(persona1.nombre); // get nombre

let persona2 = new Persona("Valeria", "Marriaga");
console.log(persona2);