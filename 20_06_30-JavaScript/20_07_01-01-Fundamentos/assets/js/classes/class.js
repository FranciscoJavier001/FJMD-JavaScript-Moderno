class Persona { // Todas las clases llevan el use strict por defecto

    // Todas las propiedades estaticas hay que definirlas dentro de la clase
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instacias';
    }

    static mensaje() { //Creamos un metodo
        console.log(this.nombre); //undefined
        console.log('Hola a todos, soy un método estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') { //Metodo que se va a ejecutar cuando se crea una nueva clase de persona

        this.nombre = nombre; //Retorna la instancia del objeto
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) { //Es como si fuera un metodo y ponerle el argumento que recibe
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nomre} es ${this.comida}`;
    }

    // Asi se crea un metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log(ironman);

spiderman.miFrase(); //Asi se llama un metodo y este puede darme la info del objeto que quiero
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May'; //Si pongo parentesis es un metodo, sin parentesis es una propiedad
// spiderman.comida = 'Duende Verde';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

// Puedo trabajar la clase como si fuera un objeto

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);