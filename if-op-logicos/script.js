// Creamos la funcion siguiendo los criterios del enunciado
function saludarSegunHora(hora) {
    if (hora >= 5 && hora <= 12) {
        return "Buenos días";
    }
    else if (hora > 12 && hora <= 18) {
        return "Buenas tardes";
    }
    else {
        return "Buenas noches";
    }
}
//Extraemos la hora local y la guardamos en una variable
let horaLocal = new Date();
//Extraemos la hora unicamente de la hora local y la guardamos en una variable
let horaActual = horaLocal.getHours();

//Implementaremos el resultado en el documento HTML siguiento las instrucciones del enunciado
document.write(`<p>${saludarSegunHora(horaActual)}</p>`);


