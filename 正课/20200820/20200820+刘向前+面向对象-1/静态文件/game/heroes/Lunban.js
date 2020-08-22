/*
 * @Descripttion: 暗号: 中国
 * @version:
 * @Author: 刘向前
 * @Date: 2020-08-21 09:09:46
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-08-21 09:37:33
 */
import S11210 from './../skills/S11210.js'
import S11220 from './../skills/S11220.js'
import S11230 from './../skills/S11230.js'
export default class Luban {
  constructor() {
    this.name = '鲁班'
    this.ico = './sources/heros/luban1.png'
    this.skills = [new S11210(), new S11220(), new S11230()]
  }
}
