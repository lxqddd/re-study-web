/*
 * @Author       : your name
 * @Date         : 2020-12-12 19:25:47
 * @LastEditTime : 2020-12-12 20:17:13
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /re-study-web/数据结构和算法/3.链表/linkedList.js
 */
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  /**
   * 新增一个节点
   * @param {any} node 任意类型节点
   */
  push(node) {
    // 当前节点
    let current
    if (node.val === null || node.val === undefined) {
      return
    }
    if (this.head === null) {
      this.head = node
      this.size += 1
    } else {
      current = this.head
      // 通过遍历找到最后一个元素
      while (current.next !== undefined) {
        current = current.next
      }
      current.next = node
      this.size += 1
    }
  }

  /**
   * 向链表中插入一个子节点
   * @param {any} node 任意类型节点
   * @param {Number} index 插入的位置
   */
  insert(node, index) {
    // ...
  }

  /**
   * 返回指定位置的元素
   * @param {Number} index 索引值
   */
  getNodeAt(index) {
    // ...
  }

  /**
   * 删除指定位置的元素
   * @param {Number} index 索引值
   */
  remove(index) {
    // ...
  }

  /**
   * 返回指定节点在链表中的索引值
   * @param {any} node 任意类型的节点
   */
  indexOf(node) {
    // ...
  }

  /**
   * 从链表中特定位置移除一个元素
   * @param {Number} index 索引值
   */
  removeAt(index) {
    // ...
  }

  // 判断当前元素是否为空
  isEmpty() {
    // ...
  }

  // 返回链表包含的元素的个数
  size() {
    return this.size
  }

  // 返回表示整个链表的字符串
  toString() {
    // ...
  }
}
module.exports = LinkedList
