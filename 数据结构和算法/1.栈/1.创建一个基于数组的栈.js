/*
 * @Author       : your name
 * @Date         : 2020-10-28 22:02:17
 * @LastEditTime : 2020-10-28 22:18:34
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\数据结构和算法\1.栈\1.创建一个基于数组的栈.js
 */
class Stack {
  constructor() {
    this.items = []
  }

  /**
   * @description: 入栈
   * @param {*} item
   * @return {*}
   */
  push(item) {
    this.items.push(item)
  }
  /**
   * @description: 出栈
   * @param {*}
   * @return {*}
   */
  pop() {
    return this.items.pop()
  }
  /**
   * @description: 返回栈顶元素
   * @param {*}
   * @return {*}
   */
  peek() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1]
    }
    return null
  }
  /**
   * @description: 如果栈中没有任何元素就返回true
   * @param {*}
   * @return {*}
   */
  isEmpty() {
    return this.items.length === 0
  }
  /**
   * @description: 移除栈里的所有元素
   * @param {*}
   * @return {*}
   */
  clear() {
    this.items = []
  }
  /**
   * @description: 返回栈里的元素个数
   * @param {*}
   * @return {*}
   */
  size() {
    return this.items.length
  }
}

const stack = new Stack()
stack.push('hello')
stack.push('world')
stack.push('!')
stack.pop()
console.log(stack.peek())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())
console.log(stack)
