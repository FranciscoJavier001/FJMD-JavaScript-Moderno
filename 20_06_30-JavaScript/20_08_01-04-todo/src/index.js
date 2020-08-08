import './styles.css';

import {Todo, TodoList} from './classes' //Aqui importamos la clase para poder tener un control de ella
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!'); //Aqui creamos una nueva tarea, en el constructor Todo y recibe un parametro que es Aprender JavaScript
// todoList.nuevoTodo(tarea); //Aqui ya me daba los metodos (osea "nuevoTodo")

// console.log(todoList); 

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500)

todoList.todos.forEach(crearTodoHtml); // Mandamos llamar este procedimiento para ver los Todos