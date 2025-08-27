// Funcion setTimeout y Promesas en JS
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("Resolvio correcto");
    }
    else{
        rechazar("Se produjo un error");
    }
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
// Forma correcta con uso de catch, otra sintaxis, se maneja el error con catch en lugar de como otro argumento
//miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    console.log("inicio promesa");
    setTimeout(() => resolver("saludos con promesa y timeout"), 3000); // Proceso asincrono
    console.log("fin promesa");
});

promesa.then(valor => console.log(valor));