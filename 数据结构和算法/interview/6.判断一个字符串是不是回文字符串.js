const str = 'heoeh'
function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('')
  return reverseStr === str
}

// console.log(isPalindrome(str))
// console.log(isPalindrome('hello'))

function isPalindrome2(str) {
  const len = str.length
  for(let i = 0; i < len / 2; i ++) {
    if (str[i] !== str[len - i - 1]) return false
  }
  return true
}

console.log(isPalindrome2(str))
console.log(isPalindrome2('hello'))