const heroes = {
    capi: { // Esto es un objeto
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: { // Esto es un objeto
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: { // Esto es un objeto
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    },
}

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        if(heroe){
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}