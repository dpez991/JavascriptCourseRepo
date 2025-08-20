// Ejemplo Static
class Persona{ 
    static contadorPersonas = 0; // atributo de nuestra clase

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
        return this.idPersona + " " + this._nombre + " " + this._apellido;
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
console.log(persona1.toString());

let empleado1 = new Empleado("Valeria", "Marriaga", "Dyson");
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona("Hector", "Lopez");
console.log(persona2.toString());
console.log(Persona.contadorPersonas);