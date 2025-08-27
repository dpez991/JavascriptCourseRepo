// Polimorfismo en JS
// Multiples formas
class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles()); // Polimorfismo, una sola linea puede ejecutar el metodo de la clase padre o clase hija
}

let empleado1 = new Empleado("Valeria", "15000");
let gerente1 = new Gerente("David", 18000, "Sistemas");

imprimir(empleado1); // Se ejecuta el metodo de la clase padre
imprimir(gerente1); // Se ejecuta el metodo de la clase hija