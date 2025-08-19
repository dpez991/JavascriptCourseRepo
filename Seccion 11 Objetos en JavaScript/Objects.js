// Objetos en JS
// no funciona ya que es tipo primitivo, no tienen propiedades ni metodos
let x = 10;
console.log(x.length);

// Crear un objeto en memoria con varias propiedades
let persona = {
    nombre: "David",
    apellido: "Borjas",
    email: "dpez991@gmail.com",
    edad: 19,
    // Agregar un metodo para imprimir el nombre completo, concatenacion, es como una propiedad mas del objeto
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

// Imprimir todos los datos individualmente
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

// Imprimir todos los datos a la vez
console.log(persona);

// Imprimir el metodo del objeto persona, se pone () ya que se manda a llamar una funcion
console.log(persona.nombreCompleto());

// Crear nuevo objeto usando new, se crea un espacio en memoria con el uso de new
let persona2 = new Object();
persona2.nombre = "Valeria";
persona2.direccion = "Res. Lomas de Maria Auxiliadora";
persona2.tel = "8981-9564";

// Imprimir datos de este nuevo objeto creado con new
console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.tel);