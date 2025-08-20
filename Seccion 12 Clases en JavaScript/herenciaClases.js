// Herencia de Clases en JS + Sobreescritura
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
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    // Tambien se pueden heredar metodos/funciones
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura
    nombreCompleto(){
        // uso de super para reutilizar el codigo de la clase padre
        return super.nombreCompleto() + ", " + this._departamento;
    }
}

let persona1 = new Persona("David", "Borjas");
console.log(persona1);

let empleado1 = new Empleado("Valeria", "Marriaga", "Dyson");
console.log(empleado1);
console.log(empleado1.nombre); // Se puede acceder a los metodos definidos de la clase padre
// Se aplica la sobreescritura del metodo en la clase hija a la hora de imprimir
console.log(empleado1.nombreCompleto()); // Metodo de la clase padre usando la clase hija