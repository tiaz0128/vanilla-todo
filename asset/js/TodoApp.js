import inputHandler from './inputHandler.js'
import listHandler from './listHandler.js'
import removeAllHandler from './removeAllHandler.js'

import TodoList from './TodList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import TodoRemoveAll from './TodoRemoveAll.js'

function TodoApp(todoData, parentDOM, inputDOM, countDOM, removeAllBtnDOM) {
  this.todoData = todoData

  this.parentDOM = parentDOM
  this.inputDOM = inputDOM
  this.countDOM = countDOM
  this.removeAllBtnDOM = removeAllBtnDOM

  this.listHandler = listHandler.bind(this)
  this.inputHandler = inputHandler.bind(this)
  this.removeAllHandler = removeAllHandler.bind(this)

  this.todoList = new TodoList(this)
  this.todoInput = new TodoInput(this)
  this.todoCount = new TodoCount(this)
  this.todoRemoveAll = new TodoRemoveAll(this)

  // this.render = () => {
  //   this.todoList.setState(this.todoData)
  //   this.todoCount.setState(this.todoData)
  // }
}

export default TodoApp
