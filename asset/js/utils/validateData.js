import { ERROR_MSG } from '../constants/ERROR_MSG.js'

/**
 * 데이터의 유효성을 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 * @returns {object} 대상 오브젝트를 다시 리턴
 */
function validateData(data) {
  // array가 아닌 형태
  isArray(data)

  // data.text 타입체크
  isCorretType(data, 'text', 'string')

  // data.isCompleted 타입체크
  isCorretType(data, 'isCompleted', 'boolean')

  return data
}

/**
 * new 연산자를 사용 여부를 검사하는 함수
 * @param {new.target} target new.target 을 파라미터로 받는다.
 */
export function isNew(target) {
  // 미검증인 경우를 위해 undefined 만 검증
  if (target === undefined) throw new Error(ERROR_MSG.IS_NOT_NEW)
  return true
}

/**
 * 대상 data 가 falsy 한 값인지 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 * @returns {object} 대상 오브젝트를 다시 리턴
 */
function isFalsy(data) {
  if (!data) throw new Error(ERROR_MSG.INCORRECT_DATA)
  return true
}

/**
 * 대상 DOM 객체가 존재하는지 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 * @returns {object} data 대상 오브젝트를 다시 리턴
 */
export function checkDom(targetDom) {
  if (!targetDom) throw new Error(ERROR_MSG.DOM_NOT_EXIST)
  return targetDom
}

/**
 * 데이터가 배열 인지 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 */
function isArray(data) {
  if (!Array.isArray(data)) throw new Error(ERROR_MSG.IS_NOT_ARRAY)
  return true
}

/**
 * 데이터의 타입을 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 * @param {string} name 검사할 프로퍼티 key값
 * @param {string} type 검증할 데이터 타입
 */
function isCorretType(data, name, type) {
  data.forEach((item) => {
    if (typeof item[name] !== type) throw new Error(ERROR_MSG.INCORRECT_DATA)
  })
}

export default validateData
