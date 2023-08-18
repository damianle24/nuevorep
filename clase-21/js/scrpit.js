//estructura de control de flujos

//¿ que nos permite hacer? mantene y controlar el flujo de datos ingresados por nuestros users


//validacion de edad para ingresar a la discoteca
//let edad = parseInt(prompt("ingrese su edad"))

//if (edad>= 18){
//    console.log("eres mayor de edad")
//}else{
    //console.log("eres menor de edad") //
//}//

//validadcion de posibilidad de votar
//let edadpermitida = parseInt(prompt("que edad tiene usted"))
//if((edad permitidad >=16)){
//    alert("usted se encuentra en rango para votar")
//}else {alert ("usted no puede votar")}

//comparacion de numero, si es par o impar
//let numero = parseFloat(prompt("ingrese un numero"))
//if (numero %2==){
//    console.log("el numero es par")
//}else{
//    console.log("el numero es impar")
//}

//si la nota es mayor a 7 aprobado si es menor desaprobado

//let calificacion = parseInt(prompt("ingrese su calificacion"))
//if (calificacion>= 7){
    //console.log ("aprobado")
//}else{ console.log("desaprobado")}


//evaluacion de contraseña



////verificacion de dia de la semana
//let dia = prompt("ingrese dia de la semana")
//if(  dia == "sabado" || dia === "domingo"){
    //console.log("hoy es", dia + " osea fin de semana")
//}else{
    //console.log("es dia de semana")
//}

//validacion multicondicionale o control de flujos con multicondionales

//clasificaccion de notas
// let nota = parseFloat(prompt("ingrese nota"))
// if(nota >=90){
//     console.log("tu nota es A")
// }else if(nota >=80){
//     console.log("tu nota es B")
// }else if( nota >= 70){
//     console.log("tu nota es C")
// }else if( nota >= 60){
//     console.log("tu nota es D")
// }else {
//     console.log("tu nota es F")
// }

//elecion de medio de transporte segun distancia y clima

// let distancia = parseFloat(prompt("ingrese su distancia"))
// let estalloviendo =true

// if(distancia <=5){
//     console.log("camina o usa bicicleta")
//     }else if(distancia <=10 && !estalloviendo){
//         console.log("toma el autobus")
//     }else if(distancia <=20){
//         console.log("usa el auto")
//     }else{
//         console.log("considera otras opciones de transporte")
//     }


//Elecion de comida segun preferencia y hora del dia

// let esvegetariano = true;
// let hora = parseFloat(prompt("ingrese hora"))
// if(esvegetariano && hora >= 12 && hora <18){
//     console.log("opciones vegetarianas para el almuerzo")
// }else if(hora >= 18){
//     console.log("cena variada para todos los gustos")
// }else{
//     console.log("menu estandar para el desayuno")
// }

//calcular el valor de la tarifa segun el dia de la semana
// let diasemana =prompt("ingres dia")
// let tarifabase = 10;
// if (diasemana === "sabado" || diasemana === "domingo"){
//     console.log("tarifa con descuento: $" + (tarifabase -5))
// }else{
//     console.log("tarifa estandar: $" + tarifabase)
// }

// let diasemana =prompt("ingres dia")
// let tarifabase= parseFloat(prompt("ingrese tarifa"))
// if (diasemana === "sabado" || diasemana === "domingo"){
//     console.log("tarifa con descuento por ser: $" + (tarifabase -5))
// }else{
//     console.log("tarifa estandar: $" + tarifabase)
// }

//hacer un algoritmo de eleccion de regalos segun ocasion y presupuestos
// 1) el presupuesto debe ser dinamico entre 1000$ y 2000$
// 2) la ocasion pueden ser cumpleaño, aniversario, findecurso
// 3) debe tener un minimo de 3 validaciones con diferentes rangos de presupuestos 


// let presupuesto= parseFloat(prompt("ingrese su presupuesto"))
// if (presupuesto >=1200){
//     console.log("cumpleaño")
// }else if(presupuesto >= 1900){
//     console.log ("aniversario")
// }else {
//     console.log ("findecurso")
// }

//como lo hizo el profe
let ocasion =prompt("ingrese ocasion")
let presupuesto = parseFloat(prompt("ingrese presupuesto"))

if(ocasion === "cumpleaños" && presupuesto>=2000) {
    console.log("comprar un regalo especial")
}else if(ocasion === "aniversario" && presupuesto < 2000){
    console.log("organiza una cena romantica")
}else if (ocasion === "findecurso" && presupuesto >= 1000){
    console.log("organiza salida al cine")
}else{
    console.log("nos pedimos una pizza en casa")
}
