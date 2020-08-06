


export class TodoList {

    constructor() {
        // this.todos = [];
        this.crgarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    crgarLocalStorage() {
        // if (localStorage.getItem('todo')) {// Verificar si el objeto existe
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        //     console.log('cargarLocal:', this.todos);
        //     console.log(typeof this.todos);

        // } else {
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo')) // Operador Ternario de la Funcion de arriba - Verifica si el objeto existe entonces
            ? JSON.parse(localStorage.getItem('todo')) // Imprime lo que tienes en el localStorage
            : []; // En caso contrario imprime un arreglo vacio

    }
}