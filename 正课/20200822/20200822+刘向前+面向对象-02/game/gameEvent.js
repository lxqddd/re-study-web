/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-08-23 08:37:34
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-08-23 09:33:34
 */
export default class GameEvent {
  constructor() {
    this.handles = []
  }
  // 注册事件
  addEvent(eventName, fn) {
    // handles['myevent'] = [fn1,fn2];
    if (typeof this.handles[eventName] === 'undefined') {
      this.handles[eventName] = []
    }
    this.handles[eventName].push(fn)
  }
  // 触发事件
  trigger(eventName) {
    if (typeof this.handles[eventName] === 'undefined') {
      return
    }
    this.handles[eventName].forEach(fn => {
      fn()
    })
  }
  // 删除指定自定义事件；
  removeEvent(eventName, fn) {
    if (this.handles[eventName] === 'undefined') {
      return
    }
    this.handles[eventName].forEach((item, index) => {
      if (item === fn) {
        this.handles[eventName].splice(index, 1)
      }
    })
  }
}

// 作业：实现removeEvent方法； removeEvent 删除指定的自定义事件名称下的方法； 注意不是删除所有事件；

// function fn1(){
//     console.log("fn1");
// }
// function fn2(){
//     console.log("fn2");
// }
// let myEvent =  new GameEvent();
// myEvent.addEvent("myevent",fn1);
// myEvent.addEvent("myevent",fn2);
// myEvent.removeEvent("myevent",fn1);
// myEvent.trigger("myevent");
