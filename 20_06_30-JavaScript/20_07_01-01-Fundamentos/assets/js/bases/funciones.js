function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Francisco', 40, true, 'Costa Rica'); //1

// saludar2('Fernando');

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b;

// function getAleatorio() {
//     return Math.random();
// }

// En una funcion de flecha, que no tenga llaves
// const getAleatorio2 = getAleatorio => (Math.random()); - Esta fue la mia
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());