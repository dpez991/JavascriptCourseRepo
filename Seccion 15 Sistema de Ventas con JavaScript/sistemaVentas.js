// Proyecto Sistema de Ventas en JS
class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0; // de momento no la usamos ya que no usamos la 2da opcion para agregarProducto
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; // 2da opcion, haciendo uso del contador
        }
        else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        // for simplificado que recorre nuestro arreglo
        for(let producto of this._productos){
            totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    // mostrarOrden() del curso, pequeño error en el salto de linea, se muestra \n
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += "\n{" + producto.toString() + "}";
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
    /* Para mostrarlo correctamente en quokka el salto de linea
        mostrarOrden() {
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}`);
        this._productos.forEach(producto => console.log(`{${producto.toString()}}`));
    }
    */
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Cinturon", 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2); // No se agrega un 6xto producto debido a la restriccion
orden2.mostrarOrden();