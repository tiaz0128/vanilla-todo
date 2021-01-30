function inputHandler(e) {
  const { inputDOM, todoList, todoCount } = this
  const textArr = inputDOM.value.split(/;/).filter((text) => text.trim() !== '')

  if (e.key === 'Enter') {
    const temp = textArr.map((text) => {
      return { text, isCompleted: false }
    })

    this.todoData = [...this.todoData, ...temp]
    inputDOM.value = null

    todoList.setState(this.todoData)
    todoCount.setState(this.todoData)
    //render()
  }
}

export default inputHandler
