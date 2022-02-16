import { isNew } from '../utils/validateData.js'

function TodoRemoveAll({ todoListParentDom, removeAllBtnDOM, removeAllHandler }) {
  if (isNew(new.target)) {
    const event = new CustomEvent('removeAll', {
      detail: {
        message: 'sample message',
      },
    })

    removeAllBtnDOM.addEventListener('click', (e) => {
      todoListParentDom.addEventListener('removeAll', removeAllHandler)
      todoListParentDom.dispatchEvent(event)
    })
  }
}

export default TodoRemoveAll
