// Metodo Apply en JS
let persona1 = {
    nombre: "David",
    apellido: "Borjas",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre: "Valeria",
    apellido: "Marriaga"
}

// Uso de apply para usar el metodo persona1.nombreCompleto con los datos del de persona2
console.log(persona1.nombreCompleto("Eminencia", "9596-7467"));

// Se usa el metodo del objeto 1 pero se mandan a llamar los datos del objeto 2 como datos para la funcion
// Con apply se pasa un arreglo con los valores de los argumentos que queremos mandar al metodo
let arreglo = ["Novia", "8981-9564"];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
// O se podria hacer directamente sin el uso de una variable
console.log(persona1.nombreCompleto.apply(persona2, ["Novia", "8981-9564"]));