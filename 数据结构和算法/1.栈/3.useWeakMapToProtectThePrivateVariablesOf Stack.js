/*
 * @Author       : your name
 * @Date         : 2020-11-01 21:35:33
 * @LastEditTime : 2020-11-01 21:52:25
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\数据结构和算法\1.栈\3.useWeakMapToProtectThePrivateVariablesOf Stack.js
 */
const _items = new WeakMap()
class Stack {
  constructor() {
    _items.set(this, [])
  }

  /**
   * @description: 入栈
   * @param {*} item
   * @return {*}
   */
  push(item) {
    const items = _items.get(this)
    items.push(item)
  }
  /**
   * @description: 出栈
   * @param {*}
   * @return {*}
   */
  pop() {
    const items = _items.get(this)
    return items.pop()
  }
  /**
   * @description: 返回栈顶元素
   * @param {*}
   * @return {*}
   */
  peek() {
    const items = _items.get(this)
    if (items.length > 0) {
      return items[items.length - 1]
    }
    return null
  }
  /**
   * @description: 如果栈中没有任何元素就返回true
   * @param {*}
   * @return {*}
   */
  isEmpty() {
    const items = _items.get(this)
    return items.length === 0
  }
  /**
   * @description: 移除栈里的所有元素
   * @param {*}
   * @return {*}
   */
  clear() {
    let items = _items.get(this)
    items = []
  }
  /**
   * @description: 返回栈里的元素个数
   * @param {*}
   * @return {*}
   */
  size() {
    const items = _items.get(this)
    return items.length
  }
}

const stack = new Stack()
stack.push('hello')
stack.push('world')
stack.pop()
console.log(stack.peek())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())
console.log(stack)
