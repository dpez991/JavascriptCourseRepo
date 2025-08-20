// Clase Object, Metodo toString, Sobreescritura y Polimorfismo en JS
// Se hace automaticamente si no se especifica un extends, 
// un extends Object que es la clase padre de todas las clases en JS
// Hay algunos metodos propios de prototype no directamente de la clase Object, donde esta el toString
// Prototype nos permite agregar atributos o metodos de manera dinamica a nuestras clases
//Es buena practica agregar el uso del metodo toString a nuestras clases en JS
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
    // Sobreescribimos el metodo toString para que no salga "Object object" 
    // si no se muestre correctamente en navegadores web
    // Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        // Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        // El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
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

let empleado1 = new Empleado("Valeria", "Marriaga", "Dyson");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

// Con la sobreescritura ahora muestra correctamente los valores el metodo toString
// Lo cual haria que se muestren en navegadores web correctamente
// Debido a que toString manda a llamar a nombreCompleto, y se muestra el departamento
// esto implica que se esta mandando a llamar el metodo definido en la clase hija, tambien llamada polimorfismo
// Polimorfismo desde un objeto vamos a poder mandar a llamar un metodo definido en la clase padre o en la clase hija
// Pero esto va a depender del tipo de objeto con el que estemos trabajando
// Si estamos trabajando con una referencia de un objeto de la clase hija 
// entonces el metodo que se manda a ejecutar es el metodo de la clase hija
console.log(empleado1.toString());

// Pero cuando estemos trabajando con un objeto de la clase padre como persona1, se manda a llamar indirectamente 
// en el metodo toString definido en la clase padre es el metodo de nombreCompleto pero definido en la clase padre, 
// por eso solo se ve el nombre y el apellido y no el departamento, ya que es una referencia a la clase padre
console.log(persona1.toString());