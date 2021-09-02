import Node from './node'

console.log(Node)

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    // 向树中插入一个新的键
    if (this.root === null) {
      this.root = new Node()
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {}

  search(key) {
    // 在树中查找一个键，如果节点存在，返回true；否则，返回false
  }

  inOrderTraverse() {
    // 通过中序遍历所有节点
  }

  preOrderTraverse() {
    // 通过先序遍历所有节点
  }

  postOrderTraverse() {
    // 通过后序遍历所有节点
  }

  min() {
    // 返回树中最小的键值
  }

  max() {
    // 返回树中最大的键值
  }

  remove() {
    // 从树中移除某个键
  }
}

export default BinarySearchTree
