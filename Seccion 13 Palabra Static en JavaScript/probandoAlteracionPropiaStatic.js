// Modificacion propia del archivo original de static.js
// Ahora se usa sobreescritura para que si es un empleado el metodo static imprima tambien su departamento
// Sin uso de if o instanceof
class Persona { 
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
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde metodo static");
    }
    static saludar2(persona){
        // Devolver el mensaje en lugar de solo imprimirlo
        return `Buenas ${persona.nombre} ${persona.apellido}, el método static te manda saludos`;
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
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;
    }

    // Sobrescribimos el metodo saludar2 en Empleado
    static saludar2(persona){
        // Usamos super para llamar al saludar2 de Persona, ahora devuelve el mensaje
        let saludo = super.saludar2(persona); 
        // Concatenamos el departamento al mensaje y lo retornamos
        return saludo + ` desde el departamento de: ${persona.departamento}`;
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

Persona.saludar();
console.log(Persona.saludar2(persona1));

Empleado.saludar();
console.log(Empleado.saludar2(empleado1));