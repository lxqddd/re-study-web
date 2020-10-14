/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-14 22:23:59
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-14 22:52:34
 */
import KKB from './KKB'
import path from 'path'

const app = new KKB({
  port: 9999,
  controllerDir: path.resolve(__dirname, 'controllers/**/*')
})
//

app.start()
