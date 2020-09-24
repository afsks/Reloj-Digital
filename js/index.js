function actual() {
    fecha = new Date(); //Actualizar fecha
    hora = fecha.getHours(); //Hora actual
    minuto = fecha.getMinutes(); //Minuto actual
    segundo = fecha.getSeconds(); //Segundo actual

console.log(hora);

    if (hora < 10) { //Dos cifras para la hora
        hora = "0" + hora;
    }
    if (minuto < 10 ) { //Dos cifras para el minuto
        minuto = "0" + minuto;
    }
    if (segundo < 10 ) { //Dos cifras para el segundo
        segundo = "0" + segundo
    }
    // Devolucion de datos
    miReloj = hora + " : " + minuto + " : " + segundo;
    return miReloj;
}
function actualizar() { //función del temporizador
   mihora=actual(); //recoger hora actual
   mireloj=document.getElementById("reloj"); //buscar elemento reloj
   mireloj.innerHTML=mihora; //incluir hora en elemento
}


setInterval(actualizar,1000); //iniciar temporizador