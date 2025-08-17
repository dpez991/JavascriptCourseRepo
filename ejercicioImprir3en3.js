// Imprimir los primeros 10 numeros de 3 en 3
// Resolucion propia
// 1 4 7 10
let maxpos = 10;

for(cont = 1; cont <= maxpos; cont += 3){
    console.log(cont);
};

// 1 -2 -5 -8
let maxneg = -10;

for(cont = 1; cont >= maxneg; cont -= 3){
    console.log(cont);
};

// Resolucion del curso
// 1 4 7 10
let maximo = 10, minimo = -10;
console.log("Incrementos de 3 en 3");

for(let numero = 1; numero <= maximo; numero += 3){
    console.log(numero);
};

// 1 -2 -5 -8
for(let numero = 1; numero >= minimo; numero -= 3){
    console.log(numero);
};