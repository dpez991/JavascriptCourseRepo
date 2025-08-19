// Agregar y Eliminar Propiedades de un Objeto
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

// Tener cuidado con la redaccion para agregar una nueva propiedad o modificar una ya existente
persona.tel = "9596-6477";
persona.tel = "9596-7467";

// Se agrega la nueva propiedad al imprimir todo el objeto
console.log(persona);

// Eliminar una propiedad, se borra tanto la propiedad como el valor asignado
delete persona.tel;

// Imprimir con los cambios actualizados
console.log(persona);

// En un navegador web podriamos no tener el mismo resultado que solo con console.log como con Quokka
// Podria solo mostrarse [object Object], lo cual no serviria para ver sus valores y propiedades, sus detalles
// Distintas formas de imprimir un objeto

// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

// For in para iterar todos los valores
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Object.values
let personaArray = Object.values(persona);
console.log(personaArray);

// Cadena con JSON
let personaString = JSON.stringify(persona);
console.log(personaString);