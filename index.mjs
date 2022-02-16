import TodoApp from './asset/js/TodoApp.js'

const todoData = JSON.parse(localStorage.getItem('todoData'))

const todoListParentDom = document.querySelector('#todo-list')
const inputDOM = document.querySelector('#todo-input')
const countDOM = document.querySelector('#todo-count')
const removeAllBtnDOM = document.querySelector('#todo-removeAll')

new TodoApp(todoData, {todoListParentDom, inputDOM, countDOM, removeAllBtnDOM})
