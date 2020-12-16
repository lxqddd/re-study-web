/*
 * @Author       : 夜殇
 * @Date         : 2020-12-14 21:19:25
 * @LastEditTime : 2020-12-16 21:57:13
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
    if (this.head === undefined) {
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
      node.prev = current
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
    if (index < 0 || index >= this.count || nodeVal === null || nodeVal === undefined) {
      return false
    }
    const node = new Node(nodeVal)
    if (this.count === 0 && index === 0) {
      this.head = node
      this.count += 1
      return true
    }
    const current = this.head
    for (let i = 1; i < this.count; i++) {
      if (index === i) {
        node.prev = current
        node.next = current.next
        current.next.prev = node
        current.next = node
        this.count += 1
        return true
      }
      current = current.next
    }
    return false
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
    if (index < 0 || index >= this.count) {
      return false
    }
    const current = this.head
    if (index === 0) {
      this.head = this.head.next
      this.head.prev = undefined
      this.count -= 1
      return current
    }
    for (let i = 1; i < this.count; i++) {
      let temp = current.next
      if (index === i) {
        current.next = current.next.next
        current.next.next.prev = current
        this.count -= 1
        return temp
      }
      current = current.next
    }
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
