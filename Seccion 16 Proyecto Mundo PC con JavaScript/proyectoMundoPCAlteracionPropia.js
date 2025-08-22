// Clase DispositivoEntrada
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
}

// Clase Raton
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// Clase Teclado
class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    toString() {
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

// Clase Computadora
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._perifericos = []; // Array para almacenar periféricos
        this._monitores = 0; // Contador de monitores (solo permite hasta 3)
        this._raton = null;  // Solo un ratón
        this._teclado = null; // Solo un teclado
    }

    // Método para agregar periféricos (monitor, ratón, teclado)
    agregarPeriferico(periferico) {
        if (periferico._idMonitor && this._monitores < 3) { // Si es un monitor y no hemos superado el límite
            this._perifericos.push(periferico);
            this._monitores++; // Aumentamos el contador de monitores
        } else if (periferico._idRaton && !this._raton) { // Si es un ratón y no tenemos uno
            this._perifericos.push(periferico);
            this._raton = periferico; // Solo un ratón
        } else if (periferico._idTeclado && !this._teclado) { // Si es un teclado y no tenemos uno
            this._perifericos.push(periferico);
            this._teclado = periferico; // Solo un teclado
        } else {
            console.log("No se pueden agregar más monitores, ratones o teclados.");
        }
    }
    /*
    // Forma mas recomendada y mejor a futuro aunque sea mas avanzada
    agregarPeriferico(periferico) {
        // Verificamos que el periférico tiene el atributo esperado
        if (periferico instanceof Monitor && this._monitores < 3) {
            this._perifericos.push(periferico);
            this._monitores++; // Aumentamos el contador de monitores
        } else if (periferico instanceof Raton && !this._raton) {
            this._perifericos.push(periferico);
            this._raton = periferico; // Solo un ratón
        } else if (periferico instanceof Teclado && !this._teclado) {
            this._perifericos.push(periferico);
            this._teclado = periferico; // Solo un teclado
        } else {
            console.log("No se pueden agregar más monitores, ratones o teclados.");
        }
    }
    */

    toString() {
        let perifericosInfo = this._perifericos.map(periferico => periferico.toString()).join("\n");
        return `Computadora ${this._idComputadora}: ${this._nombre}\n${perifericosInfo}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton("USB", "Razer");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth", "Corsair");
console.log(raton2.toString());

let teclado1 = new Teclado("USB", "Aula");
console.log(teclado1.toString());
let teclado2 = new Teclado("Bluetooth", "Red Dragon");
console.log(teclado2.toString());


let monitor1 = new Monitor("Sceptre", "28pulg")
console.log(monitor1.toString());
let monitor2 = new Monitor("Samsung", "32 pulg");
console.log(monitor2.toString());
let monitor3 = new Monitor('Dell', 32);
console.log(monitor3.toString());
let monitor4 = new Monitor('Acer', 24);
console.log(monitor4.toString());

let computadora1 = new Computadora('HP');
// Agregar periféricos a la computadora
computadora1.agregarPeriferico(monitor1);
computadora1.agregarPeriferico(monitor2);  // Se agrega el segundo monitor
computadora1.agregarPeriferico(monitor3);  // Se agrega el tercer monitor
computadora1.agregarPeriferico(monitor4);  // Este no se debe agregar (supera el límite de monitores)
computadora1.agregarPeriferico(raton1);
computadora1.agregarPeriferico(teclado1);
computadora1.agregarPeriferico(teclado2);

let computadora2 = new Computadora('AlienWare');
// Agregar periféricos a la computadora
computadora2.agregarPeriferico(monitor1);
computadora2.agregarPeriferico(monitor2);  // Se agrega el segundo monitor
computadora2.agregarPeriferico(monitor3);  // Se agrega el tercer monitor
computadora2.agregarPeriferico(monitor4);  // Este no se debe agregar (supera el límite de monitores)
computadora2.agregarPeriferico(raton1);
computadora2.agregarPeriferico(teclado1);
computadora2.agregarPeriferico(teclado2);

let computadora3 = new Computadora('Armada');
// Agregar periféricos a la computadora
computadora3.agregarPeriferico(monitor1);
computadora3.agregarPeriferico(monitor2);  // Se agrega el segundo monitor
computadora3.agregarPeriferico(monitor3);  // Se agrega el tercer monitor
computadora3.agregarPeriferico(monitor4);  // Este no se debe agregar (supera el límite de monitores)
computadora3.agregarPeriferico(raton1);
computadora3.agregarPeriferico(teclado1);
computadora3.agregarPeriferico(teclado2);


// Mostrar la computadora con los periféricos
console.log(computadora1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora3);
orden2.mostrarOrden();