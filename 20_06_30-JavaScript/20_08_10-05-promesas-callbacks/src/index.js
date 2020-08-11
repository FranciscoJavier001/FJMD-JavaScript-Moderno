
import './styles.css';

const heroeId = 'capi'; // Este es el primer argumento, y el segundo argumento es una funcion conocida como vallback

buscarHeroe(heroeId, () => { // Esto manda una funcion como argumento
    console.log('Callback llamado!');
}); 