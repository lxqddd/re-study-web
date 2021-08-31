// 要理解递归，首先要理解递归
function understandRecursion(doIUnderstandRecursion) {
  const recursionAnswer = confirm(`Do you understand Recursion?`)
  if (recursionAnswer === true) {
    return true
  }
  understandRecursion(recursionAnswer)
}
