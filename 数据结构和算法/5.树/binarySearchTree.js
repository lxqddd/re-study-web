const Node = require('./node')

class BinarySearchTree {
  constructor() {
    this.root = null
    this.searchResult = null
  }

  insert(key) {
    // 向树中插入一个新的键
    if (this.root === null) {
      // 当前树上啥也没有
      this.root = new Node(key)
    } else {
      // 已经有了根节点
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
    this.#postOrderTraverseNode(this.root, callback)
  }

  #postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.#postOrderTraverseNode(node.left, callback)
      this.#postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min() {
    if (this.root === null) {
      return false
    }
    // 返回树中最小的键值
    return this.#minNode(this.root)
  }

  #minNode(node) {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  max() {
    // 返回树中最大的键值
    if (this.root === null) {
      return false
    }
    return this.#maxNode(this.root)
  }

  #maxNode(node) {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  search(key) {
    // 在树中查找一个键，如果节点存在，返回true；否则，返回false
    return this.#searchNode(this.root, key)
  }

  #searchNode(node, key) {
    if (node === null) {
      return false
    }

    if (node.key === key) {
      this.searchResult = node
    }
    if (node !== null && node.key > key) {
      return this.#searchNode(node.left, key)
    } else if (node !== null && node.key < key) {
      return this.#searchNode(node.right, key)
    }
    return this.searchResult
  }

  remove(key) {
    // 从树中移除某个键
    return this.#removeNode(this.root, key)
  }

  #removeNode(node, key) {
    if (node === null) {
      return null
    }
    if (node.key > key) {
      // 要删除的节点在左子树
      node.left = this.#removeNode(node.left, key)
      return node
    } else if (node.key < key) {
      // 要删除的节点在右子树
      node.right = this.#removeNode(node.right, key)
      return node
    } else {
      // 当前节点就是要删除的节点
      if (!node.left && !node.right) {
        node = null
        return node
      }
      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      }
      const aux = this.#minNode(node.right)
      // 将目标节点右子树节点值最小的节点的值赋值给当前目标节点，用来继承当前目标节点的位置
      node.key = aux.key
      // 删除目标节点右子树上最小的节点
      node.right = this.#removeNode(node.right, aux.key)
      return node
    }
  }
}

module.exports = BinarySearchTree
