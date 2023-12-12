//Guardamos en una variable cada uno de los datos que le solicitamos al usuario por una ventana emergente 
let nombre = prompt("NOMBRE:");
let apellidos = prompt("APELLIDOS:");
let edad = prompt("EDAD:");
let ciclo = prompt("CICLO FORMATIVO:", "DAW");

//Imprimimos en la página web los datos solicitados por al usuario
document.write(`NOMBRE : ${nombre}<br>APELLIDOS : ${apellidos}<br>EDAD : ${edad}<br>CICLO FORMATIVO : ${ciclo}`);

