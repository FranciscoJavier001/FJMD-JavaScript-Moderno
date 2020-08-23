import {buscarHeroe} from './js/callbacks';
import './styles.css';

const heroeId1 = 'capi'; // Este es el primer argumento, y el segundo argumento es una funcion conocida como callback
const heroeId2 = 'spider'; 

buscarHeroe(heroeId1, (err, heroe1) => { // Esto manda una funcion como argumento
    if(err){return console.error(err); }

    buscarHeroe(heroeId2, (err, heroe2) => {
        if(err) {return console.error(err);}

        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision `);
    });
}); 

console.log('Fin de programa');