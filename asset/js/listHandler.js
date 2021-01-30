function listHandler(e) {
  const { todoList, todoCount } = this
  const targetIdx = parseInt(e.target.parentNode.getAttribute('data-idx'))

  switch (e.target.className) {
    case 'todo-checkbox':
    case 'todo-checkbox checked':
      this.todoData = this.todoData.map(({ text, isCompleted }, idx) => {
        return idx === targetIdx ? { text, isCompleted: !isCompleted } : { text, isCompleted }
      })

      todoList.setState(this.todoData)
      break

    case 'del-btn':
      this.todoData = this.todoData.filter((todo, idx) => {
        return idx !== targetIdx
      })
      todoList.setState(this.todoData)
      todoCount.setState(this.todoData)
      break
  }
}

export default listHandler
