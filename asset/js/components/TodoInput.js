import { isNew, checkDom } from '../utils/validateData.js'

function TodoInput({ inputDOM, todoListParentDom, inputHandler }) {
  if (isNew(new.target)) {
    checkDom(todoListParentDom)
    inputDOM.addEventListener('keyup', inputHandler)
  }

  // this.render = () => {
  //   todoListParentDom.appendChild()
  // }

  // this.render()
}

export default TodoInput
