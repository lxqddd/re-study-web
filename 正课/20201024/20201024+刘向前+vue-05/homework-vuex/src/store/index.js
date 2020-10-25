/*
 * @Author       : your name
 * @Date         : 2020-10-25 09:19:45
 * @LastEditTime : 2020-10-25 09:40:07
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201024\20201024+刘向前+vue-05\homework-vuex\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 暗号：刀妹吃豆腐脑
  state: {
    num: 1
  },
  mutations: {
    numAdd(state, payload) {
      const { num } = payload
      state.num = num
    },
    numSub(state, payload) {
      const { num } = payload
      state.num = num
    }
  },
  actions: {},
  modules: {}
})
