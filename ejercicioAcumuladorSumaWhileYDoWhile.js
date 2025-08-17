// Sumar los primeros 5 numeros (while y do while)
// Realizar la suma de los primeros 5 numeros utilizando un ciclo while y un ciclo do while
// 1 + 2 + 3 + 4 + 5 = 15

//Intento propio ciclo while
console.log("Intento Propio While");
let suma = 0, num = 1;

while(num <= 5){
    console.log(suma + " + " + num);
    suma += num;
    num++;
    console.log(suma);
};

console.log(suma);

// Intento propio ciclo do while
console.log("Intento Propio Do While");
let suma1 = 0, num1= 1;

do{
    console.log(suma1 + " + " + num1);
    suma1 += num1;
    num1++;
    console.log(suma1);
}while(num1 <= 5);

console.log(suma1);

// Soluciuon del curso while
console.log("Solucion del Curso While");
let numero = 1, maximo = 5, acumuladorSuma = 0;

while(numero <= maximo){
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma} + ${numero}`);

    // Realizamos la suma parcial
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
};
console.log(acumuladorSuma);

// Solucion del curso while
console.log("Solucion del Curso Do While");
let numero1 = 1, maximo1 = 5, acumuladorSuma1 = 0;
do{
    // Imprimimos lo que va a sumar
    console.log(`${acumuladorSuma1} + ${numero1}`);

    // Realizamos la suma parcial
    acumuladorSuma1 += numero1;
    console.log(acumuladorSuma1);
    numero1++;
}while(numero1 <= maximo1);
console.log(acumuladorSuma1);