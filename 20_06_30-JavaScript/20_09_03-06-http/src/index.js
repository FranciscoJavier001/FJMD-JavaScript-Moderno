// import  { init } from "./js/chistes-page";
// import {init} from './js/usuarios-page';

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Francisco',
    job: 'Developer'
}).then(console.log);