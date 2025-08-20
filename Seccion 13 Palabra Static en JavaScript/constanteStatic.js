// Constantes Static en JS
class Persona{ 
    static contadorPersonas = 0; // atributo de nuestra clase

    // Funciona como un atributo de tipo estatico sin necesidad de declararlo como variable, 
    // ya que le estamos asignando un valor
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log("Se han superado el máximo de objetos permitidos");
        }
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

// Impresion de la constante, no se usa () gracias a get
console.log(Persona.MAX_OBJ);
console.log(Empleado.MAX_OBJ);

// Sin poner un set antes no se actualiza el valor que cambiamos
// Cumpliendo la funcionalidad de constante con uso de static
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let empleado2 = new Empleado("Iris", "Borjas", "Auditorias");
console.log(empleado2.toString());
console.log(Empleado.contadorPersonas);

let persona3 = new Persona("Eduardo", "Corrales");
console.log(persona3.toString());
console.log(Persona.contadorPersonas);

// Se muestra el mensaje de que se han superado el maximo de objetos permiditos
// Y si lo tratamos de imprimir se muestra pero el id deja de avanzar, se muestra undefined
// Con uso de exceptions en un futuro se puede evitar la creacion de mas objetos y no solo la restriccion del id
let empleado3 = new Empleado("Diego", "Gallardo", "Industrial");
console.log(empleado3.toString());
console.log(Empleado.contadorPersonas); // El id no avanza a mas de 5, 
// ya que no se asigno uno nuevo al 6xto debido al limite