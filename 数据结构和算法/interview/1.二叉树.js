const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: null,
      right: null
    },
    right: {
      value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: null,
    right: {
      value: 'F',
      left: null,
      right: null
    }
  }
}

function preOrder(tree) {
  if (!tree) return
  console.log('当前节点的值是', tree.value)
  preOrder(tree.left)
  preOrder(tree.right)
}
// preOrder(tree)

function inOrder(tree) {
  if (!tree) return
  inOrder(tree.left)
  console.log('当前节点的值是：', tree.value)
  inOrder(tree.right)
}
// inOrder(tree)


function postOrder(tree) {
  if (!tree) return
  postOrder(tree.left)
  postOrder(tree.right)
  console.log(tree.value)
}

postOrder(tree)