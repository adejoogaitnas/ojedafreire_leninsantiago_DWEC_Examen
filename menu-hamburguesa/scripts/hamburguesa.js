//Seleccionamos la clase hamburger y la guardamos en una variable
const hamburger = document.querySelector('.hamburger');
//Seleccionamos la clase nav-links y la guardamos en una variable
const navlinks = document.querySelector('.nav-links');

//Creamos una función para añadir la clase active
function callback() {
    navlinks.classList.toggle('active');
}

//Añadimos el evento de click a la clase hamburger para que realice la función cuando le damos al click
hamburger.addEventListener('click', callback);
