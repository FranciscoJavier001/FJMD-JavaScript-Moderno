class Persona { // Todas las clases llevan el use strict por defecto

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase') { //Metodo que se va a ejecutar cuando se crea una nueva clase de persona

        this.nombre = nombre; //Retorna la instancia del objeto
        this.codigo = codigo;
        this.frase = frase;
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
console.log(spiderman);
console.log(ironman);

spiderman.miFrase(); //Asi se llama un metodo y este puede darme la info del objeto que quiero
ironman.miFrase();