const str = 'heoeh'
function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('')
  return reverseStr === str
}

console.log(isPalindrome(str))
console.log(isPalindrome('hello'))