// Operadores Relacionales (Comparacion)
let a = 5;
let b = '5';
console.log(a);
console.log(b);

// Operadores igualdad ==
// (solo compara valores, y hace una conversion si es necesario)
console.log("a == b --> ", a == b)
// String interpolation
console.log(`${a} == ${b} --> `, a == b)

// Operador igualdad estricta o exacto ===
// se compara el valor y el tipo de dato
console.log("a === b --> ", a === b)
// String interpolation
console.log(`${a} === ${b} --> `, a === b)

// Operador distintos
// compara valor y convierte el tipo de dato si es necesario
console.log(`${a} != ${b} --> `, a != b)

// Operador distintos estricta o exacto !==
// compara valor y el tipo de dato
console.log(`${a} !== ${b} --> `, a !== b)

//Operadores comparacion mayor o menor, todos hacen la conversion necesario de tipo de dato
// Operador menor que
console.log(`${a} < ${b} --> `, a < b)

// Operador menor igual que
console.log(`${a} <= ${b} --> `, a <= b)

// Operador mayor
console.log(`${a} > ${b} --> `, a > b)

// Operador mayor o igual que
console.log(`${a} >= ${b} --> `, a >= b)