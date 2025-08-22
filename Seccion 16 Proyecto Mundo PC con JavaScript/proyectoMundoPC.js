// Proyecto Mundo PC en JS
// 1. DipositivoEntrada
// 2. Raton
// 3. Teclado
// 4. Monitor
// 5. Computadora
// 6. Orden

class DipositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntradal;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DipositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, Tipo de Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

class Teclado extends DipositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, Tipo de Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, size){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._size = size;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, Marca: ${this.marca}, Tamaño: ${this.size}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
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
        for(let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton("USB", "Razer");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth", "Corsair");
console.log(raton2.toString());
let raton3 = new Raton("USB", "Dareu");

let teclado1 = new Teclado("USB", "Aula");
console.log(teclado1.toString());
let teclado2 = new Teclado("Bluetooth", "Red Dragon");
console.log(teclado2.toString());
let teclado3 = new Teclado("USB", "Razer");


let monitor1 = new Monitor("Sceptre", "28pulg")
console.log(monitor1.toString());
let monitor2 = new Monitor("Samsung", "32 pulg");
console.log(monitor2.toString());
let monitor3 = new Monitor("LG", "35pulg");

let computadora1 = new Computadora("MSI", monitor1, raton1, teclado1);
console.log(`${computadora1}`);
let computadora2 = new Computadora("AlienWare", monitor2, raton2, teclado2);
console.log(`${computadora2}`);
let computadora3 = new Computadora("Armada", monitor3, raton3, teclado3);
console.log(`${computadora3}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora3);
orden2.mostrarOrden();