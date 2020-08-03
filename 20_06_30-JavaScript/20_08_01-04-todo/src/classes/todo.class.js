


export class Todo { //Esto es un constructor 

    constructor(tarea){ //Estos son los atributos que la tarea tiene
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}