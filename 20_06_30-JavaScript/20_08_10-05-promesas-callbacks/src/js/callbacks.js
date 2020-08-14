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

// callback retorna...
export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];
    if(heroe){
        callback(null, heroe);
    }else{
        // Un error
        callback(`No existe un heroe con el id ${id}`);
    }
    // callback(heroe);
}