function removeAllHandler(e) {
  const { todoList, todoCount } = this

  this.todoData = []

  todoList.setState(this.todoData)
  todoCount.setState(this.todoData)
}

export default removeAllHandler
