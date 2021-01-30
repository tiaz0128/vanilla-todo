import TodoApp from './asset/js/TodoApp.js'

const todoData = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
]

new TodoApp(todoData, document.querySelector('#todo-list'), document.querySelector('#todo-input'), document.querySelector('#todo-count'), document.querySelector('#todo-removeAll'))
