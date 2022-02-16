import validateData, { isNew, checkDom } from '../utils/validateData.js'

function renderTodo({ text, isCompleted }, idx) {
  return `<div class="todo-text" data-idx=${idx}>
            ${isCompleted ? `<div class="todo-checkbox checked"></div><p class="strket-text">${text}</p>` : `<div class="todo-checkbox"></div><p>${text}</p>`}
            <div class="del-btn"></div>
          </div>`
}

/**
 * todoList 의 fucntion contructor
 * @param {array} todoData 배열로 내부에는 {string text, boolean isCompleted} 프로퍼티로 구성된 오브젝트가 존재
 * @param {string} todoListParentDom todoList 의 대상 부모 DOM객체
 */
function TodoList({ todoData, todoListParentDom, listHandler }) {
  // new 호출된 여부 확인
  if (isNew(new.target)) {
    if (todoData.length !== 0) validateData(todoData)
    checkDom(todoListParentDom)
    todoListParentDom.addEventListener('click', listHandler)
  }

  /**
   * todoList 를 대상 DOM 객체에 innerHTML 로 할당하는 함수
   */
  this.render = () => {
    // validateData(todoData)
    todoListParentDom.innerHTML = todoData.map(renderTodo).join('')
  }

  /**
   * todoList 의 데이터를 변경하는 함수
   * @param {array} nextData 배열로 내부에는 {string text, boolean isCompleted} 프로퍼티로 구성된 오브젝트가 존재
   */
  this.setState = (nextData) => {
    // 데이터만 변경되므로 new 호출여부는 미검사
    todoData = validateData(nextData)
    localStorage.setItem('todoData', JSON.stringify(todoData))

    this.render()
  }

  this.render()
}

export default TodoList
