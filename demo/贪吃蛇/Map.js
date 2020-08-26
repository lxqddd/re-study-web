/*
 * @Descripttion: 食物类
 * @version:
 * @Author: 刘向前
 * @Data: 2020-08-23 10:09:05
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-08-23 17:17:28
 */
export default class Map {
  constructor(el, rect = 10) {
    this.rect = rect
    this.el = el
    this.row = Math.ceil(Map.getStyle(this.el, 'height') / rect)
    this.cells = Math.ceil(Map.getStyle(this.el, 'width') / rect)
    this.data = [
      {
        x: 4,
        y: 2,
        color: 'blue'
      }
    ]
    Map.setStyle(el, 'height', this.row * rect)
    Map.setStyle(el, 'width', this.cells * rect)
  }
  static getStyle(el, attr) {
    return parseFloat(getComputedStyle(el)[attr])
  }
  /**
   * 该方法主要用来修改元素的样式
   * @param {*} el 要修改样式的元素
   * @param {*} attr 要修改的样式属性
   * @param {*} val 要修该的样式值
   */
  static setStyle(el, attr, val) {
    let styleAttrArr = ['height', 'width', 'top', 'left', 'bottom', 'right']
    if (styleAttrArr.includes(attr)) {
      return (el.style[attr] = val + 'px')
    }
    return (el.style[attr] = val)
  }
  /**
   * 当小蛇吃到食物后,添加一个新的对象到小蛇的数组中
   * @param {*} newData 新的蛇身
   */
  setData(newData) {
    this.data.push(newData)
  }
  clearData() {}
  render() {
    this.el.innerHTML = this.data
      .map(
        item =>
          `<span style='position: absolute; top: ${item.y * this.rect}px; left: ${
            item.x * this.rect
          }px; width:${this.rect}px; height: ${this.rect}px; background-color: ${
            item.color
          };'></span>`
      )
      .join('')
  }
}

let map = document.querySelector('#map')
let gameMap = new Map(map, 20)
gameMap.render()
