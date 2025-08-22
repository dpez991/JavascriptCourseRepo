// Ejercicio de Herencia en JS
class Persona{ 
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
        console.log("Se incrementa contador de Personas: " + Persona.contadorPersonas);
    }
    get idPersona(){
        return this._idPersona;
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
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return this._idPersona + ": " + this._nombre + " " + this._apellido + ", " + this._edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
        console.log("Se incrementa contador de Empleados: " + Empleado.contadorEmpleados);
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ", sueldo:" + this._sueldo + ", id empleado: " + this.idEmpleado;
        // o imprimiendo el id de empleado en lugar del de persona en general, usando sobreescritura
        //return this._idEmpleado + ": " + this._nombre + " " + this._apellido + ", " + this._edad + ", sueldo: " + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        // Si no se pasa una fecha, asignar la fecha actual
        if (fechaRegistro) {
            this._fechaRegistro = new Date(fechaRegistro);
        } else {
            this._fechaRegistro = new Date(); // Asignar la fecha actual
        }
        this._idCliente = ++Cliente.contadorClientes;
        console.log("Se incrementa contador de Clientes: " + Cliente.contadorClientes);
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ", fecha de registro: " + this._fechaRegistro.toLocaleDateString() + ", id cliente: " + this.idCliente;
        // o imprimiendo el id de cliente en lugar del de persona en general, usando sobreescritura
        //return this._idCliente + ": " + this._nombre + " " + this._apellido + ", " + this._edad + ", fecha de registro:" + this._fechaRegistro;
    }
}

persona1 = new Persona("David", "Borjas", 19);
console.log(persona1.toString());

empleado1 = new Empleado("Valeria", "Marriaga", 18, 18500);
console.log(empleado1.toString());

cliente1 = new Cliente("Daniel", "Lopez", "25", "8/19/2025"); // fecha manual
console.log(cliente1.toString());
cliente2 = new Cliente("Iris", "Borjas", "48"); // fecha automatica de hoy
console.log(cliente2.toString());