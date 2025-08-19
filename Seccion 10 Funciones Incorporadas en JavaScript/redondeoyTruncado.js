// Redondeo y Truncado en JS

let numero = 8.5, redondeo, truncado;

// Redondeo
// Math.round() redondea al valor entero mas cercano
// .5 o superior, redondea al valor entero superior mas cercano, si es menor redondea al valor entero inferior mas cercano
redondeo = Math.round(numero);
console.log(redondeo);

// Truncado
// Math.trunc() elimina la parte flotante (decimmal)
truncado = Math.trunc(numero);
console.log(truncado);