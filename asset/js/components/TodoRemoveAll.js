import { checkDom, isNew } from '../utils/validateData.js'

function TodoRemoveAll({ todoListParentDom, removeAllBtnDOM, onClickRemoveAll }) {
  if (isNew(new.target)) {
    const event = new CustomEvent('removeAll', {
      detail: {
        message: 'sample message',
      },
    })

    checkDom(todoListParentDom)

    removeAllBtnDOM.addEventListener('click', (e) => {
      todoListParentDom.addEventListener('removeAll', onClickRemoveAll)
      todoListParentDom.dispatchEvent(event)
    })
  }
}

export default TodoRemoveAll
