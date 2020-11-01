/*
 * @Author       : 刘向前
 * @Date         : 2020-10-28 22:22:53
 * @LastEditTime : 2020-11-01 21:20:19
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\数据结构和算法\1.栈\2.创建一个基于对象的栈.js
 */
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  /**
   * @description: 入栈
   * @param {*} item
   * @return {*}
   */
  push(item) {
    this.items[this.count] = item
    this.count++
  }
  /**
   * @description: 出栈
   * @param {*}
   * @return {*}
   */
  pop() {
    let temp = this.items[this.count - 1]
    delete this.items[this.count - 1]
    this.count--
    return temp
  }
  /**
   * @description: 返回栈顶元素
   * @param {*}
   * @return {*}
   */
  peek() {
    if (this.count > 0) {
      return this.items[this.count - 1]
    }
    return null
  }
  /**
   * @description: 如果栈中没有任何元素就返回true
   * @param {*}
   * @return {*}
   */
  isEmpty() {
    return this.count === 0
  }
  /**
   * @description: 移除栈里的所有元素
   * @param {*}
   * @return {*}
   */
  clear() {
    this.count = 0
    this.items = {}
  }
  /**
   * @description: 返回栈里的元素个数
   * @param {*}
   * @return {*}
   */
  size() {
    return this.count
  }
  /**
   * @description: 将栈中的值以字符串的形式输出
   * @return {string}
   */
  toString() {
    let str = ''
    const temp = []
    if (!this.count) {
      return (str = '')
    }
    for (let i = 0; i < this.count; i++) {
      temp.push(this.items[i])
    }
    str = temp.join(',')
    return str
  }
}

const stack = new Stack()
stack.push('hello')
stack.push('world')
stack.push('!')
console.log(stack.toString())
stack.pop()
console.log(stack.peek())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())
console.log(stack)
