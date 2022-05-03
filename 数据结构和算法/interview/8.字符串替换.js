const str = 'hello world'

const WordDictionary = function () {
  this.words = {}
}

WordDictionary.prototype.addWord = function (word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false
  }
  const len = word.length

  // 字符串中不包含 . 的话，就是普通字符串，通过 include 判断是否在字符串中存在
  if (!word.includes('.')) {
    return this.words[len].includes(word)
  }

  // 如果是正则表达式，则要先创建正则表达式对象
  const reg = new RegExp(word)
  return this.words[len].some(item => reg.test(item))
}

const wordDictionary = new WordDictionary()

wordDictionary.addWord('bad')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')

console.log(wordDictionary.search('pad'))
console.log(wordDictionary.search('bad'))
console.log(wordDictionary.search('.ad'))
console.log(wordDictionary.search('b..'))