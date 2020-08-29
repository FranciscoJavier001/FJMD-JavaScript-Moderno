import { buscarHeroeAsync } from "./promesas";
// import { buscarHeroeAsync } from './promesas';
import { buscarHeroe } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async() => {
    return await Promise.all(heroesIds.map(buscarHeroe));
};