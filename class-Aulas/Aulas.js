//Creamos la clase Aula con los atributos que nos señala el diagrama
class Aula{
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
    }
    //Creamos el método para presentar materiales
    presentarMateriales() {
        return `Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`;
    }
}
//Creamos la clase Música que hereda de Aula los atributos y el método y añadimos otro atributo
class Musica extends Aula{
    constructor(numero, capacidad, instrumento) {
        super(numero, capacidad);
        this.instrumento = instrumento;
    }
    //Sobreescribimos el método heredado para que se ajuste a la clase Música
     presentarMateriales() {
        return `Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas `;
    }

}
//Creamos la clase Tecnología que hereda de la clase Aula los atributos y el método y añadimos otro atributo 
class Tecnologia extends Aula{
    constructor(numero, capacidad, cantidadOrdenadores) {
        super(numero, capacidad);
        this.cantidadOrdenadores = cantidadOrdenadores;
    }
     //Sobreescribimos el método heredado para que se ajuste a la clase Tecnología
     presentarMateriales() {
        return `Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad `;
    }

}

//Creamos un objeto por cada clase he imprimimos el método ajustandose a las necesidades del enunciado
let aula1 = new Aula(1, 20);
console.log(aula1.presentarMateriales());

let musica1 = new Musica(2, 10, "saxofón");
console.log(musica1.presentarMateriales());

let tecnologia1 = new Tecnologia(3, 30, 20);
console.log(tecnologia1.presentarMateriales());

console.log("¿Cómo se llama la característica de la POO que permite sobrescribir los métodos en herencia?")
console.log("POLIFORMISMO")