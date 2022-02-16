import { isNew } from '../utils/validateData.js'

function TodoCount({ todoData, countDOM }) {
  if (isNew(new.target)) this.todoData = todoData

  this.setState = (todoData) => {
    this.todoData = todoData
    this.render()
  }

  this.render = () => {
    countDOM.innerHTML = `<p>${this.todoData.filter((todo) => todo.isCompleted).length} / ${this.todoData.length}</p>`
  }

  this.render()
}

export default TodoCount
