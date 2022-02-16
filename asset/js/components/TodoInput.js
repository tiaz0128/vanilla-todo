import { isNew, checkDom } from '../utils/validateData.js'

function TodoInput({ inputDOM, todoListParentDom, onKeyUpInput }) {
  if (isNew(new.target)) {
    checkDom(todoListParentDom)
    inputDOM.addEventListener('keyup', onKeyUpInput)
  }
}

export default TodoInput
