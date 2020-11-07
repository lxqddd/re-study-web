/*
 * @Author       : your name
 * @Date         : 2020-11-06 21:35:59
 * @LastEditTime : 2020-11-07 10:09:45
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201105\20201105+刘向前+vue-10\todo-list\src\store\index.js
 */
import { createStore } from 'vuex'

export default createStore({
  // 天天向上
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.unshift({
        ...todo
      })
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1)
    },
    completeTodo(state, index) {
      state.todos[index].status = 'complete'
    }
  },
  actions: {},
  modules: {}
})
