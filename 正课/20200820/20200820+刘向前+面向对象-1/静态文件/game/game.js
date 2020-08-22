/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-08-21 09:04:49
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-08-21 09:31:09
 */
import Player from './player.js'
export default class Game {
  constructor() {
    this.player = null
  }
  login(name) {
    this.player = new Player(name)
  }
}
