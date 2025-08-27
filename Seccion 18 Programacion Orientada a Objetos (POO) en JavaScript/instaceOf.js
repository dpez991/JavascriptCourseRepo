// Palabra instanceof en JS
// instaceof si referencia de hijo a padre, es decir que al poner empleado primero ambos clasificarian para el if como 
// objeto de tipo gerente, pero si ponemos primero gerente el empleado no se clasifica como gerente al ser la clase hija
// y no se imprime el mensaje
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

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    // Primero se pone la clase de menor jerarquia
    if(tipo instanceof Gerente){
        console.log(`Es un objeto de tipo Gerente`);
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado){
        console.log(`Es un objeto de tipo Empleado`);
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object){
        console.log(`Es un tipo Object`);
    }
}

let empleado1 = new Empleado("Valeria", "15000");
let gerente1 = new Gerente("David", 18000, "Sistemas");

determinarTipo(empleado1); // Se ejecuta el metodo de la clase padre
determinarTipo(gerente1); // Se ejecuta el metodo de la clase hija
// Responde verdadero para ambos tipos, e incluso para un tercero, el tipo object que es la clase padre de empleado
// Pero con el uso de else if se responde solamente al mismo tipo