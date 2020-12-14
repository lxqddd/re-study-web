/*
 * @Author       : 夜殇
 * @Date         : 2020-12-14 21:19:25
 * @LastEditTime : 2020-12-14 21:27:06
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /re-study-web/数据结构和算法/3.链表/2.双向链表/doubleLinkedList.js
 */
const Node = require('./node')
const { defaultEquals } = require('./utils')
class DoubleLinkedList {
  constructor(equalFn = defaultEquals) {
    this.head = undefined
    this.count = 0
    this.equalFn = equalFn
  }

  /**
   * 新增一个节点
   * @param {any} node 任意类型节点
   */
  push(nodeVal) {
    let node = new Node(nodeVal)
    // 当前节点
    let current
    if (node.val === null || node.val === undefined) {
      return false
    }
    if (this.head === null) {
      this.head = node
      this.count += 1
      return true
    } else {
      current = this.head
      // 通过遍历找到最后一个元素
      while (current.next !== undefined) {
        current = current.next
      }
      current.next = node
      this.count += 1
      return true
    }
  }

  /**
   * 向链表中插入一个子节点
   * @param {any} node 任意类型节点
   * @param {Number} index 插入的位置
   */
  insert(nodeVal, index) {
    // ...
  }

  /**
   * 返回指定位置的元素
   * @param {Number} index 索引值
   */
  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      return false
    }
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (index === i) {
        return current
      }
      current = current.next
    }
    return false
  }

  /**
   * 删除指定位置的元素
   * @param {Number} index 索引值
   */
  removeAt(index) {
    // ...
  }

  /**
   * 返回指定节点在链表中的索引值
   * @param {any} node 任意类型的节点
   */
  indexOf(nodeVal) {
    if (this.count === 0) {
      return false
    }
    let current = this.head
    for (let i = 0; i < this.count; i++) {
      if (this.equalFn(current.val, nodeVal)) {
        return i
      }
      current = current.next
    }
    return false
  }

  /**
   * 从链表中移除指定的元素
   * @param {Number} index 索引值
   */
  remove(nodeVal) {
    const index = this.indexOf(nodeVal)
    const node = this.removeAt(index)
    return node
  }

  // 判断当前链表是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 获取链表的第一个元素
  getHead() {
    return this.head
  }

  // 返回链表包含的元素的个数
  size() {
    return this.count
  }
}

module.exports = DoubleLinkedList
