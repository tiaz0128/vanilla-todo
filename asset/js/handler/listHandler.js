function listHandler(e) {
  const { todoList, todoCount } = this
  const targetIdx = parseInt(e.target.parentNode.getAttribute('data-idx'), 10)

  switch (e.target.className) {
    case 'todo-checkbox':
    case 'todo-checkbox checked':
      this.todoData = this.todoData.map(({ text, isCompleted }, idx) => {
        return idx === targetIdx ? { text, isCompleted: !isCompleted } : { text, isCompleted }
      })
      localStorage.setItem('todoData', JSON.stringify(this.todoData))

      todoList.setState(this.todoData)
      todoCount.setState(this.todoData)
      break

    case 'del-btn':
      this.todoData = this.todoData.filter((todo, idx) => {
        return idx !== targetIdx
      })
      localStorage.setItem('todoData', JSON.stringify(this.todoData))

      todoList.setState(this.todoData)
      todoCount.setState(this.todoData)
      break

    default:
      break
  }
}

export default listHandler
