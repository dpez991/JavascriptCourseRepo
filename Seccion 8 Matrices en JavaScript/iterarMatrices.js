// Matrices en JS
// Una matriz es un arreglo de 2 dimensiones

// Declaracion de una matriz
let matriz = [[100,200,300],[400,500,600]];

// No. Renglones en nuestra matriz
console.log(matriz.length);
// No. Columnas (depende del renglon seleccionado) en nuestra matriz
console.log(matriz[0].length);
console.log(matriz[1].length);

// Leer los valores
// For Externo Lee Renglones
for(ren = 0; ren < matriz.length; ren++){
    // For Interno Lee Columnas
    for(col = 0; col < matriz[ren].length; col++){
        console.log(`Elemento[${ren}][${col}] = ${matriz[ren][col]}`);
    };
};
