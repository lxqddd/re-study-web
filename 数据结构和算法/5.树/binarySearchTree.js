const Node = require('./node')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(key) {
    // 向树中插入一个新的键
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.#insertNode(this.root, key)
    }
  }

  #insertNode(node, key) {
    // 如果要插入的节点值小于当前节点，则作为左子树
    if (node.key > key) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.#insertNode(node.left, key)
      }
    } else {
      // 否则作为右子树
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.#insertNode(node.right, key)
      }
    }
  }

  search(key) {
    // 在树中查找一个键，如果节点存在，返回true；否则，返回false
  }

  /**
   * 中序遍历
   * @param { Function } callback 回调函数
   * 操作定义：
   *    若二叉树为空，则执行空操作, 否则
   *    1. 访问左子树
   *    2. 访问根节点
   *    3. 访问右子树
   */
  inOrderTraverse(callback) {
    // 通过中序遍历所有节点
    this.#inOrderTraverseNode(this.root, callback)
  }

  #inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.#inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.#inOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 先序遍历
   * @param { Function } callback 回调函数
   * 操作定义：
   *    若二叉树为空，则执行空操作, 否则
   *    1. 访问根节点
   *    2. 访问左子树
   *    3. 访问右子树
   */
  preOrderTraverse(callback) {
    // 通过先序遍历所有节点
    this.#preOrderTraverseNode(this.root, callback)
  }

  #preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.#preOrderTraverseNode(node.left, callback)
      this.#preOrderTraverseNode(node.right, callback)
    }
  }

  /**
   * 后序遍历
   * @param { Function } callback 回调函数
   * 操作定义：
   *    若二叉树为空，则执行空操作, 否则
   *    1. 访问左子树
   *    2. 访问右子树
   *    3. 访问根节点
   */
  postOrderTraverse(callback) {
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

module.exports = BinarySearchTree
