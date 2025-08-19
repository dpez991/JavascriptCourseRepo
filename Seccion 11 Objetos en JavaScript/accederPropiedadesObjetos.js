// Objetos en JS

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

// Tambien se puede recorrer todo el objeto con un ciclo for con una sintaxis un poco distinta
// for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
