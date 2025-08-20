// Palabra Reservada static en JS
// Podemos agregar metodos que se asocien con nuestra clase exclusivamente y no los objetos que se creen de esta clase 
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
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    // Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(`Buenas ${persona.nombre} ${persona.apellido} el metodo static te manda saludos`);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
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
console.log(persona1.toString());

let empleado1 = new Empleado("Valeria", "Marriaga", "Dyson");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// Este objeto persona1 no puede ejecutar los metodos static de Persona
// Se asocia con una clase pero no con los objetos
//persona1.saludar(); // No es posible llamar un metodo static desde un objeto
// Quokka no nos muestra directamente la salida como en los metodos no static
// Con los metodos static solo se puede ver la salida en nuestra consola
Persona.saludar();
Persona.saludar2(persona1);

// Tambien funciona desde la clase hija
Empleado.saludar();
Empleado.saludar2(empleado1);