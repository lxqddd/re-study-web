const BinarySearchTree = require('./binarySearchTree')

const tree = new BinarySearchTree()

tree.insert(8)
tree.insert(3)
tree.insert(2)
tree.insert(6)
tree.insert(7)
tree.insert(9)
// tree.insert(10)
// tree.insert(12)
// tree.insert(1)

const print = key => {
  console.log(key)
}

// tree.inOrderTraverse(print)

// tree.preOrderTraverse(print)

// tree.postOrderTraverse(print)

tree.remove(3)
const searchResult = tree.search(7)

console.log(searchResult)

console.log(tree.root.left)
