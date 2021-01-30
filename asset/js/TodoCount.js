import { isNew } from './validateData.js'

function TodoCount({ todoData, countDOM }) {
  if (isNew(new.target)) this.todoData = todoData.length

  this.setState = (todoData) => {
    this.todoData = todoData.length
    this.render()
  }

  this.render = () => {
    countDOM.innerHTML = `<p> TOTOAL : ${this.todoData}</p>`
  }

  this.render()
}

export default TodoCount
