import { ITask } from './interfaces/Task';
import { Status } from './enums/Status';

const inputElement = document.querySelector('#todo') as HTMLInputElement;
const buttonElement = document.querySelector('.add-button') as HTMLButtonElement;
const errorMessage = document.querySelector('.error-message') as HTMLDivElement;
const todoList = document.querySelector('.todos-list') as HTMLUListElement;

function showTodoList(todos: []) {
    todos.map((todo: ITask) => {
        const item = document.createElement('li');
        const div = document.createElement('div');
        const title = document.createElement('h3');

        item.appendChild(div);
        div.appendChild(title);
        
        title.textContent = todo.title;
        todoList.appendChild(item);
    })
}

const storage = localStorage.getItem('todos');
const todos = storage ? JSON.parse(storage) : [];

let taskTitle = "";


inputElement.addEventListener('input', handleChange);
buttonElement.addEventListener('click', handleClick);


function handleChange(event: any) {
  taskTitle = event.target.value.trim();
}

function handleClick(event: any) {
    event.preventDefault();

    if (inputElement.value === "") {
        errorMessage.textContent = "Task cannot be empty"
        return;
    }

    const createTask: ITask = {
        id: todos.length,
        title: taskTitle,
        status: Status.Todo,
    }

    todos.push(createTask);

    localStorage.setItem('todos', JSON.stringify(todos));

    inputElement.value = "";
    errorMessage.textContent = "";

    todoList.innerHTML = "";
    showTodoList(todos)
}

showTodoList(todos)