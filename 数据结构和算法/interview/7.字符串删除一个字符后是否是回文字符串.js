/**
 * 给定一个字符串，如果不是一个回文字符串
 * 判断删除其中一个字符后，能否构成回文字符串
 */
const str = 'heoeh'

function isPalindromePlus (str) {
  function isPalindrome(str) {
    const temp = str.split('').reverse().join('')
    return temp === str
  }

  if (isPalindrome(str)) return true

  const len = str.length
  for(let i = 0; i < len - 1; i ++) {
    const tempArr = str.split('')
    tempArr.splice(i, 1)
    const temp = tempArr.join('')
    if (isPalindrome(temp)) return true
  }
  return false
}

console.log(isPalindromePlus(str))
console.log(isPalindromePlus('hello'))


function isPalindromePlus2(str) {
  const len = str.length
  let i = 0
  let j = len - 1

  while(i < j && str[i] === str[j]) {
    i ++
    j --
  }

  if (isPalindrome(i + 1, j) || isPalindrome(i, j - 1)) return true

  function isPalindrome (st, end) {
    while(st < end) {
      if (str[st] !== str[end]) return false
      st ++
      end --
    }
    return true
  }
  return false
}
console.log(isPalindromePlus2(str))
console.log(isPalindromePlus2('hello'))
