/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-11 08:00:26
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-11 08:25:00
 */
// 类型标注
export default class Drag {
  // ts 中类的属性必须单独定义
  el: HTMLElement
  x: number
  y: number
  isDrag: boolean

  constructor(el) {
    this.el = el
    this.x = 0
    this.y = 0
    this.isDrag = false

    this.down()
    this.move()
    this.up()
  }

  down() {
    this.el.addEventListener('mousedown', e => {
      this.isDrag = true

      this.x = e.clientX - this.el.offsetLeft
      this.y = e.clientY - this.el.offsetTop
    })
  }

  move() {
    document.addEventListener('mousemove', e => {
      if (this.isDrag) {
        this.el.style.left = e.clientX - this.x + 'px'
        this.el.style.top = e.clientY - this.y + 'px'
      }
    })
  }

  up() {
    document.addEventListener('mouseup', e => {
      this.isDrag = false
    })
  }
}
