// Operadores Incremento / Decremento
let a, b, c;
a = 0;

// Pre-incremento
++a;
console.log(a);

// Post-incremento
a++;
console.log(a);

// Pre-decremento
--a;
console.log(a);

// Post-decremento
a--;
console.log(a);

// Post hace el cambio para la proxima vez despues de la linea que se vuelva a usar
// Pre los hace en el mismo momento

// Ejemplo
a = 5;
b = 2;
c = ++a * b--; /* 6 * 2 = 12, desde un inicio se incrementa a, pero b 
utiliza el valor actual de la variable para la operacion y despues lo decrementa para la siguiente vez que se vaya a usar*/
console.log(c);
console.log(a);
console.log(b);