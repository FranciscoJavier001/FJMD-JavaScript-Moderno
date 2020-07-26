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

class Heroe extends Persona {
    clan = 'Sin Clan';

    constructor(nombre, codigo, frase) { // Quiero crear una nueva instancia de Heroe, pero si tengo un cosntructor me obligo a hacer un trabajo y uso Super
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();

console.log(spiderman);

spiderman.quienSoy(); //Asi se llama al metodo