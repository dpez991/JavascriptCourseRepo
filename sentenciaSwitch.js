// Dia de la semana (switch)
let diaSemana = 2;

switch(diaSemana){
    case 1: // diaSemana == 1
        console.log(`El dia numero ${diaSemana} de la semana es el Lunes`)
        break;
    case 2: // diaSemana == 2
        console.log(`El dia numero ${diaSemana} de la semana es el Martes`)
        break;
    case 3: // diaSemana == 3
        console.log(`El dia numero ${diaSemana} de la semana es el Miercoles`)
        break;
    case 4: // diaSemana == 4
        console.log(`El dia numero ${diaSemana} de la semana es el Jueves`)
        break;
    case 5: // diaSemana == 5
        console.log(`El dia numero ${diaSemana} de la semana es el Viernes`)
        break;
    case 6: // diaSemana == 6
        console.log(`El dia numero ${diaSemana} de la semana es el Sabado`)
        break;
    case 7: // diaSemana == 7
        console.log(`El dia numero ${diaSemana} de la semana es el Domingo`)
        break;
    default: // diaSemana erroneo
        console.log(`El dia numero ${diaSemana} es un valor erroneo, no es un dia de la semana`)
        break;
}
