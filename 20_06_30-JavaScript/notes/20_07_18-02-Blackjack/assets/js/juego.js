// Patron Modulo
(() => {
    const personajes = ['Ana', 'Mercy', 'Mei'];
    console.log(personajes);
})();

// Declaramos las variables
let deck = []; //Este arreglo inicia vacio
const tipos = ['C', 'D', 'H', 'S']; //Estos son los tipos de cartas
const especiales = ['A', 'J', 'Q', 'K', 'A', 'J', 'Q', 'K', 'A', 'J', 'Q', 'K', 'A', 'J', 'Q', 'K']; // Estas son las cartas especiales que se van a crear
const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let puntosJugador = 0,
    puntosComputadora = 0; // Estos puntos son let, porque van a cambiar segun las cartas del jugador

// Referencias del HTML
// Aqui los declaramos para acceder mas rapido a ellos
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Esta funcion crea un nuevo deck
const crearDeck = () => { // Funcion que no necesita ningun argumento

    // "Esta fue la formula original, pero la sustitui por la mia"
    // for (let i = 2; i <= 10; i++) { // Ciclo For
    //     for (let tipo of tipos) { // Tenemos escrito tipos porque son los que se van a crear
    //         deck.push(i + tipo); // Este push significa que se van a añadir las cartas del tipo
    //     }
    // }

    for (let tipo of tipos) { // Aqui creo los tipos de las extenciones de las cartas
        for (num of numeros) { // Aqui creo un nuevo array que conlleva todos los numeros de 4 barajas
            deck.push(num + tipo) // Aqui los agrego a la baraja.
        }
    }

    for (let tipo of tipos) { // Aqui creamos los tipos de cartas - Corazon, Espadas, Diamantes, Treboles
        for (let esp of especiales) { // Tenemos escrito especiales porque son los que se van a crear- A, K, Q, J
            deck.push(esp + tipo) // Las añadimos al Deck
        }
    }

    // Si quiero crear mas cartas para el Deck solo copio y pego otro FOR igual.

    // console.log(deck); // Aqui seguirian estando ordenadas
    deck = _.shuffle(deck); // Seleccionamos a quien le va a ocurrir, que le va a ocurrir, y donde va a surtir efecto
    console.log(deck) // Aqui deben de estar desordenadas
    return deck; // Regresamos el Deck con las cartas aleatorias
}

crearDeck(); // Aqui la llaman

// Esta funcion me permite tomar una carta
const pedirCarta = () => { //Aqui creamos la funcion pedirCarta, para que mande la funcion que esta escrita ("Callback" - Esta es una funcion de flecha)

    // Aqui nos aventamos un error, en caso que no hubiera mas cartas, es una medida de seguridad
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop() //Remueve el ultimo elemento del arreglo y lo regresa
        // console.log(carta); // Aqui vemos que la carta ya fue removida del Deck por el Pop anterior
    return carta; //Aqui manda la carta que sacamos
}

// pedirCarta();
const valorCarta = (carta) => { // valorCarta va a recibir el valor de la carta - Pero esto es para convertir el String de la carta en un valor

    // console.log(carta); // Aqui veo que carta es

    const valor = carta.substring(0, carta.length - 1); // Aqui creamos una constante que es el valor, pero de la carta tomamos todo menos el tipo
    return (isNaN(valor)) ? //Regresame si valor no es un numero, entonces
        (valor === 'A') ? 11 : 10 : //Si es una A, entonces vale 11, en caso contrario vale 10
        valor * 1; //Con esto transformamos el String en un Number
}

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <!-- <img class="carta" src="assets/cartas/2S.png" alt="" srcset=""> -->
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD`
        imgCarta.classList.add('carta'); // Agrega caracteristicas o clases al DOM
        divCartasComputadora.append(imgCarta); //apend pone en el DOM un elemento al final - (prepend inicio)

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana =(');
        } else if (puntosMinimos > 21) {
            alert('Computadora Gana =)');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana =)');
        }
    }, 100);
}

// Eventos - ¡¡AYUDA!!
btnPedir.addEventListener('click', () => { //Aqui agregamos el evento click, para que mande la funcion que esta escrita ("Callback" - Esta es una funcion de flecha)
    const carta = pedirCarta(); //la funcion carta, toma la funcion de pedir carta

    puntosJugador = puntosJugador + valorCarta(carta); //valorCarta convierte en valor en un Number
    puntosHTML[0].innerText = puntosJugador; // Aqui agregamos info al <small>=definido en el HTML

    // <!-- <img class="carta" src="assets/cartas/2S.png" alt="" srcset=""> -->
    const imgCarta = document.createElement('img'); //Esto crea la imagen al pedirla
    imgCarta.src = `assets/cartas/${carta}.png`; //Aqui agregamos la carta que salga
    imgCarta.classList.add('carta'); //Aqui la agregamos la clase para que la tome cuando salga en el DOM
    divCartasJugador.append(imgCarta); //Mostramos la carta en el DOM

    if (puntosJugador > 21) { // Te pasaste de 21
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true; //Desactivamos Botones
        btnDetener.disabled = true; //Desactivamos Botones
        turnoComputadora(puntosJugador); //Se lanza el turno de la computadora

    } else if (puntosJugador === 21) {
        console.warn('21, Genial!');
        btnPedir.disabled = true; //Desactivamos Botones
        btnDetener.disabled = true; //Desactivamos Botones
        turnoComputadora(puntosJugador); //Se lanza el turno de la computadora
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true; //Desactivamos Botones
    btnDetener.disabled = true; //Desactivamos Botones
    turnoComputadora(puntosJugador); //Se lanza el turno de la computadora
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    decl = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});