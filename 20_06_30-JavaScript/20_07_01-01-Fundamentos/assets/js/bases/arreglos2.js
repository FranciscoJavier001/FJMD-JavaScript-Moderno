let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// console.log('Largo:', juegos.length);

// let primero = juegos[2 - 2]; /** porque es el arreglo 0 */
// let ultimo = juegos[juegos.length - 1] /** Se va al ultimo */

// console.log({ primero, ultimo });

// juegos.forEach((elemento, indice, arr) => { /** Estos son como salen, esos son los primeros 3 del arreglo, el nombre es lo de menos */
//     console.log({ elemento, indice, arr });
// });

// let nuevaLongitud = juegos.push('F-Zero'); /** Agrega un nuevo juego y me muestra el tamaño del nuevo arreglo, luego me da el valor de cada array*/
// console.log({ nuevaLongitud, juegos });

// nuevaLongitud = juegos.unshift('Fire Emblem'); /** Se agregan al principio */
// console.log({ nuevaLongitud, juegos }); /** Lo que migue y los juevos ordenados por numero */

// let juegoBorrado = juegos.pop()/** Borro el ultimo */
// console.log({ juegoBorrado, juegos }); 

let pos = 1;

console.log(juegos)
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// let metroidIndex = juegos.indexOf('Metroid'); //CaseSensitive
// console.log(metroidIndex);

// TODO: Referencia