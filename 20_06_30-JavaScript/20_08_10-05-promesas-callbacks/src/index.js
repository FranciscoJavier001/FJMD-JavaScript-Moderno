import {buscarHeroe} from './js/callbacks';
import './styles.css';

const heroeId = 'capi2'; // Este es el primer argumento, y el segundo argumento es una funcion conocida como callback

buscarHeroe(heroeId, (err, heroe) => { // Esto manda una funcion como argumento
    if(err){
        console.error(err);
    } else {
        console.info(heroe);
    }
}); 
8heroeId
eliminarHeroe