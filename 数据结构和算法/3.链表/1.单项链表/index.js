/*
 * @Author       : your name
 * @Date         : 2020-12-12 19:29:58
 * @LastEditTime : 2020-12-13 17:21:30
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /re-study-web/数据结构和算法/3.链表/index.js
 */
const LinkedList = require('./linkedList')

const linkedList = new LinkedList()
linkedList.push('a')
linkedList.push('b')
linkedList.push('d')
linkedList.push('e')
linkedList.insert('c', 1)

// console.log(linkedList.getNodeAt(2), 'nodeAt')
// console.log(linkedList.remove(4))
// console.log(linkedList.indexOf('e'))
console.log(linkedList.remove('f'))
console.log(linkedList)
