// Ejercicio Acumulador Suma
// Realizar la suma de los primeros 5 numeros utilizando un ciclo for
// 1 + 2 + 3 + 4 + 5 = 15

// Primer intento aka logica de neandertal, no se podria usar el valor de la suma final fuera del ciclo for
// No inicia en 1 si no en 3
/*
let suma = 2; 

for(num = 1; suma <= 5; suma++){ 
    num += suma; console.log(num); 
};
*/

// Segundo intento
console.log("Intento Propio");
let suma = 0;

for(num = 1; num <= 5; num ++){
    // Agregado posteriormente por sugerencia del curso pero con logica propia
    console.log(suma + " + " + num); 
    suma += num;
    console.log(suma);
};

// Resolucion del curso
// Sumar los primeros 5 numeros (for)
console.log("Solucion del curso");
let maximo = 5, acumuladorSuma = 0;

for(let numero = 1; numero <= maximo; numero++){
    //Imprimimos lo que se va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);
    // Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
};
console.log(acumuladorSuma);

