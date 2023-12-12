//Guardamos en un array todas las fechas 
const arrows = document.querySelectorAll('.arrow');

//Por cada una de las flechas agregamos un evento de click
arrows.forEach(arrow => {
    arrow.addEventListener('click', function () {
        //Seleccionamos primero el elemento padre y luego el siguiente elemento al padre que es el que nos interesa
        const subMenu = this.parentElement.nextElementSibling;

        //Añadimos a la clase show y la clase rotate-arrow si no la tiene para que se ejecute el código de css
        subMenu.classList.toggle('show');
        this.classList.toggle('rotate-arrow');

    });
});

