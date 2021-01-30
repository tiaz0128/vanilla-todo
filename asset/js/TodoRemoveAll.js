import { isNew } from './validateData.js'

function TodoRemoveAll({ parentDOM, removeAllBtnDOM, removeAllHandler }) {
  if (isNew(new.target)) {
    const event = new CustomEvent('removeAll', {
      detail: {
        message: 'sample message',
      },
    })

    removeAllBtnDOM.addEventListener('click', (e) => {
      parentDOM.addEventListener('removeAll', removeAllHandler)
      parentDOM.dispatchEvent(event)
    })
  }
}

export default TodoRemoveAll
