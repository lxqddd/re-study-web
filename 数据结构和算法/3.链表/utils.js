/*
 * @Author       : your name
 * @Date         : 2020-12-12 19:51:06
 * @LastEditTime : 2020-12-12 20:07:13
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /re-study-web/数据结构和算法/3.链表/utils.js
 */
const defaultEquals = (a, b) => {
  const IS_OBJECT_EQUAL = !!(
    a !== null &&
    b !== null &&
    typeof a === 'object' &&
    typeof b === 'object'
  )
  if (IS_OBJECT_EQUAL) {
    const aProps = Object.getOwnPropertyNames(a)
    const bProps = Object.getOwnPropertyNames(b)
    if (aProps.length != bProps.length) {
      // 元素个数不相同
      return false
    }
    for (let i = 0; i < aProps.length; i++) {
      let propName = aProps[i]

      let propA = a[propName]
      let propB = b[propName]
      // 故先判断两边都有相同键名
      if (!b.hasOwnProperty(propName)) return false
      if (typeof propA === 'object') {
        if (this.isObjectValueEqual(propA, propB)) {
          // return true     这里不能return ,后面的对象还没判断
        } else {
          return false
        }
      } else if (propA !== propB) {
        return false
      } else {
      }
    }
    return true
  }
  return a === b
}

module.exports = { defaultEquals }
