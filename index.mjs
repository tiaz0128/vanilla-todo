import TodoApp from './asset/js/TodoApp.js'

const todoData = JSON.parse(localStorage.getItem('todoData'))
new TodoApp(todoData, document.querySelector('#todo-list'), document.querySelector('#todo-input'), document.querySelector('#todo-count'), document.querySelector('#todo-removeAll'))
