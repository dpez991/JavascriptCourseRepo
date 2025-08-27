// Palabra Async con Promesas en JS
// Async nos permite facilitar el uso de promesas, al poner la palabra Async antes de la definicion de un metodo, 
// significa que ese metodo esta obligado a regresar una promesa, lo cual simplifica el uso de promesas
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
    //console.log("inicio promesa");
    setTimeout(() => resolver("saludos con promesa y timeout"), 3000); // Proceso asincrono
    //console.log("fin promesa");
});

//promesa.then(valor => console.log(valor));

// async indica que una funcion regresa una promesa
// Una funcion se convierte en promesa con el uso de la palabra async
async function miFuncionConPromesa() {
    return "saludos con promesa y async";
}

// Y entonces lo que retorne lo podemos consumir por medio de la funcion then, 
// y mandando a llamar nuestra funcion que regresa una promesa
miFuncionConPromesa().then(valor => console.log(valor));