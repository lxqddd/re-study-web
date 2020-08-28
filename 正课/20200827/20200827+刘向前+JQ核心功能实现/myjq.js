class Jq {
  constructor(arg, root) {
    // this.cssNumber = []
    // 获取选择的元素；
    //  let ele = document.querySelector(arg);
    // let eles = document.querySelectorAll(arg);
    // // this.ele = ele;
    // // this.eles = []
    // //  this[0] = ele;
    // for (let i = 0; i < eles.length; i++) {
    //     this[i] = eles[i];
    // }
    // this.length = eles.length;
    // 保存上次操作的节点；
    if (typeof root === 'undefined') {
      this['preventObj'] = [document]
    } else {
      this['preventObj'] = root
    }

    // 函数
    if (typeof arg === 'function') {
      // 方式一；
      // dom加载完毕；
      window.addEventListener('DOMContentLoaded', arg)
    } else if (typeof arg === 'string') {
      // id、类名、标签名
      let eles = document.querySelectorAll(arg)
      for (let i = 0; i < eles.length; i++) {
        this[i] = eles[i]
      }
      this.length = eles.length
    } else {
      // 对象；
      console.log('原生dom对象')
      // 对象 有没有length；
      if (typeof arg.length === 'undefined') {
        // 一个对象；
        this[0] = arg
        this.length = 1
      } else {
        // 多个对象 类数组；
        console.log(arg)
        for (let i = 0; i < arg.length; i++) {
          this[i] = arg[i]
        }
        this.length = arg.length
      }
    }
  }
  click(fn) {
    // console.log("click");
    // fn();
    // console.log(this[0])
    // 一个元素
    // this[0].addEventListener("click", fn);
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener('click', fn)
    }
    // 让click方法支持链式操作；
    return this
  }

  eq(index) {
    // return this[index];
    // 链式操作1. return this；
    // return this;
    // 2.返还对象；jq对象 ；---》链式操作；
    return new Jq(this[index], this)
  }
  end() {
    // 返还上次保存的节点；
    return this['preventObj']
  }
  on(eventName, fn) {
    let eventArr = eventName.split(' ')
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventArr.length; j++) {
        this[i].addEventListener(eventArr[j], fn)
      }
    }
  }
  css(...args) {
    // 不定参数；
    // arguments  关键字
    // console.log(arguments)
    // console.log(args);
    // 判断长度；
    if (args.length === 1) {
      // 一个参数处理；
      if (typeof args[0] === 'string') {
        // 字符串  1获取css样式；
        return this.getStyle(this[0], args[0])
      } else {
        //对象；  3设置样式二；
        // 多个节点设置多个样式；
        // 循环节点
        for (let i = 0; i < this.length; i++) {
          // 循环样式；
          for (let j in args[0]) {
            this.setStyle(this[i], j, args[0][j])
          }
        }
      }
    } else {
      // 2个参数  2设置样式一；
      for (let i = 0; i < this.length; i++) {
        this.setStyle(this[i], args[0], args[1])
      }
    }
    return this
  }

  getStyle(ele, styleName) {
    if (styleName in $.cssHooks) {
      $.cssHooks[styleName].get(ele)
    }
    return window.getComputedStyle(ele, null)[styleName]
  }
  setStyle(ele, styleName, styleValue) {
    if (styleName in $.cssHooks) {
      $.cssHooks[styleName].set(ele, styleValue)
    }
    if (typeof styleValue === 'number' && !$.cssNumber[styleName]) {
      styleValue = styleValue + 'px'
    }
    ele.style[styleName] = styleValue
  }

  // 暗号： 充电器
  animate(obj) {
    // animate动画
    console.log(this)
  }
}

function $(arg) {
  // console.log(arg);
  return new Jq(arg)
}

$.cssNumber = {
  animationIterationCount: true,
  columnCount: true,
  fillOpacity: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  gridArea: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
}
$.cssHooks = {}
// 作业 ：在老师代码基础上 实现 jq、 animate方法,具体内部实现方法不限；
// 效果 通过调用 $(".box").animate({width:"200px"});实现动画；
$('.box').animate()
