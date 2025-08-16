// Precedencia Operadores

// 1. Parentesis y Corchetes
// 2. Operadores unarios, como -, ++, --, !
// 3. Aritmeticos *, / y %
// 4. Arimeticos + y -
// 5. Relacionales <, <=, > y >=
// 6. Igualdad == y !=
// 7. Logicos && y ||
// Asignacion =, +=, -=, *=, etc

// Ej. Se revisa de izq a der
let a = 12 / 3 + 2 * 3 - 1;
// Paso 1. Divison 12 / 3 = 4
// Paso 2. Multiplicacion 2 * 3 = 6
// Paso 3. Suma 4 + 6 = 10
// Paso 4. Resta 10 - 1 = 9
// Los parentesis cambiarian el orden totalmente como a = 12 / (3 + 2) * 3 - 1; 
// primero se sumaria y luego se haria la primera division de izq a der
console.log(a);
