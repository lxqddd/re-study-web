/*
 * @Author       : 夜殇
 * @Date         : 2020-12-14 21:19:30
 * @LastEditTime : 2020-12-16 21:58:59
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : /re-study-web/数据结构和算法/3.链表/2.双向链表/index.js
 */
const DoubleLinkedList = require('./doubleLinkedList')
const doubleLinkedList = new DoubleLinkedList()

doubleLinkedList.push('a')
doubleLinkedList.push('b')
doubleLinkedList.push('c')
doubleLinkedList.push('d')

console.log(doubleLinkedList.head.next.next)
