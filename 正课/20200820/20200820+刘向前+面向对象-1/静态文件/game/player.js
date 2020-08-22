/*
 * @Descripttion: 暗号: 中国
 * @version:
 * @Author: 刘向前
 * @Date: 2020-08-21 09:04:49
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-08-21 09:36:51
 */
import Yase from './heroes/Yase.js'
import Luban from './heroes/Lunban.js'

export default class Player {
  constructor(name) {
    this.name = name
    this.heroes = [new Yase(), new Luban()]
  }
}
