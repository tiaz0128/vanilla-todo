import TodoList from './components/TodList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoRemoveAll from './components/TodoRemoveAll.js'
import validateData from './utils/validateData.js'

/**
 *
 * @param {{todo: string, iscomplete: boolean}[]} todoData
 * @param {{[key: string]: HTMLElement}} targetDoms
 */
function TodoApp(initData, targetDoms) {
  this.todoData = initData || []

  const { todoListParentDom, inputDOM, countDOM, removeAllBtnDOM } = targetDoms

  const onClickTodoList = (e) => {
    const targetIdx = parseInt(e.target.parentNode.getAttribute('data-idx'), 10)
    let nextState = []

    switch (e.target.className) {
      case 'todo-checkbox':
      case 'todo-checkbox checked':
        nextState = this.todoData.map(({ text, isCompleted }, idx) => {
          return idx === targetIdx ? { text, isCompleted: !isCompleted } : { text, isCompleted }
        })

        this.setState(nextState)
        break

      case 'del-btn':
        nextState = this.todoData.filter((todo, idx) => {
          return idx !== targetIdx
        })

        this.setState(nextState)
        break

      default:
        break
    }
  }

  const onKeyUpInput = (e) => {
    const textArr = inputDOM.value.split(/;/).filter((text) => text.trim() !== '')

    if (e.key === 'Enter') {
      const temp = textArr.map((text) => {
        return { text, isCompleted: false }
      })

      const nextState = [...this.todoData, ...temp]
      this.setState(nextState)
      inputDOM.value = null
    }
  }

  const onClickRemoveAll = () => {
    this.setState([])
  }

  this.todoList = new TodoList({ initData: this.todoData, todoListParentDom, onClickTodoList })
  this.todoInput = new TodoInput({ inputDOM, todoListParentDom, onKeyUpInput })
  this.todoCount = new TodoCount({ initData: this.todoData, countDOM })
  this.todoRemoveAll = new TodoRemoveAll({ todoListParentDom, removeAllBtnDOM, onClickRemoveAll })

  this.setState = (nextState) => {
    this.todoData = validateData(nextState)
    this.todoList.setState(this.todoData)
    this.todoCount.setState(this.todoData)

    localStorage.setItem('todoData', JSON.stringify(this.todoData))

    this.render()
  }

  this.render = () => {
    this.todoList.render()
    this.todoCount.render()
  }
}

export default TodoApp
