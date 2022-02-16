import inputHandler from './handler/inputHandler.js'
import listHandler from './handler/listHandler.js'
import removeAllHandler from './handler/removeAllHandler.js'

import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRemoveAll from './components/TodoRemoveAll.js'

/**
 *
 * @param {{todo: string, iscomplete: boolean}[]} todoData
 * @param {{[key: string]: HTMLElement}} targetDoms
 */
function TodoApp(todoData, { todoListParentDom, inputDOM, countDOM, removeAllBtnDOM }) {
  this.todoData = todoData || []

  this.todoListParentDom = todoListParentDom
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

  this.render = () => {
    this.todoList.setState(this.todoData)
    this.todoCount.setState(this.todoData)
  }
}

export default TodoApp
