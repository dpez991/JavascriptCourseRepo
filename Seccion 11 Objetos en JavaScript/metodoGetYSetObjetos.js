// Metodo Get y Set trabajando con objetos
// Son mejores practicas para acceder y modificar los valores de las propiedades de nuestros objetos
// Get nos permite acceder a los valores de nuestras propiedades
let persona = {
    nombre: "David",
    apellido: "Borjas",
    email: "dpez991@gmail.com",
    edad: 19,
    // Uso de get y set combinados
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang) {
        this.idioma = lang.toUpperCase();
    },
    // Agregar un metodo para imprimir el nombre completo, concatenacion, es como una propiedad mas del objeto
    // Con get se simplifica la sintaxis
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

// Ya no es necesario los () despues de la propiedad ya que no es una propiedad ya si no un metodo get
console.log(persona.nombreCompleto);

console.log(persona.lang);

// Se manda a llamar el metodo set por el =
persona.lang = "en";
console.log(persona.lang); // Se llama metodo get lang
console.log(persona.idioma);

// Get y Set nos da mas seguridad y verificacion/validacion