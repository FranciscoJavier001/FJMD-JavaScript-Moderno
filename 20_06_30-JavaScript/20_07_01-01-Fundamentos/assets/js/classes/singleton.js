class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') { //Debo recibir el nombre

        if (!!Singleton.instancia) {
            return Singleton.instancia

        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }
}

const instancia1 = new Singleton('Ironman') //Es una instancia
const instancia2 = new Singleton('Spiderman') //Es una instancia
const instancia3 = new Singleton('BlackPanther') //Es una instancia

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`);