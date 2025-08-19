// Uso de Call en JS
// Nos va a permitir llamar un metodo que esta definido en un objeto desde otro objeto
// Aunque se puede crear una funcion constructor y apartir de esta crear varios objetos, 
// y comparten los atributos y los metodos que hemos agregado a esta funcion constructor

// Aunque en ocasiones no tenemos este metodo constructor aun asi podemos utilizar metodos definidos
// en otros objetos y mandarlos a llamar desde otros objetos usando el metodo call
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

// Uso de call para usar el metodo persona1.nombreCompleto con los datos del de persona2
console.log(persona1.nombreCompleto("Eminencia", "9596-7467"));

// Se usa el metodo del objeto 1 pero se mandan a llamar los datos del objeto 2 como datos para la funcion
// Los parametros se pasan por separado uno por uno separados por ,
console.log(persona1.nombreCompleto.call(persona2, "Novia", "8981-9564"));