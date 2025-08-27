// Funcion setInterval en JS
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

// Asincrona
setInterval(reloj, 1000); // 1 seg
