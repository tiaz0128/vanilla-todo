import validateData, { isNew } from '../utils/validateData.js'

function TodoCount({ initData, countDOM }) {
  if (isNew(new.target)) this.todoData = validateData(initData)

  this.setState = (nextState) => {
    this.todoData = nextState
    this.render()
  }

  this.render = () => {
    countDOM.innerHTML = `<p>${this.todoData.filter((todo) => todo.isCompleted).length} / ${this.todoData.length}</p>`
  }

  this.render()
}

export default TodoCount
