import { ITask } from './interfaces/Task';
import { Status } from './enums/Status';

const inputElement = document.querySelector('#todo') as HTMLInputElement;
const buttonElement = document.querySelector('.add-button') as HTMLButtonElement;
const errorMessage = document.querySelector('.error-message') as HTMLDivElement;

let taskTitle = ""

inputElement.addEventListener('input', function (event: any) {
    taskTitle = event.target.value.trim();
});

buttonElement.addEventListener('click', function (event: any) {
    event.preventDefault();
    
    const storage = localStorage.getItem('todos');
    const todos = storage ? JSON.parse(storage) : [];

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

    console.log('add todo: ', todos);
    inputElement.value = "";
    errorMessage.textContent = "";
});
