// import GameEvent from './gameEvent.js';
// 封装组件；
export default class Dialog extends EventTarget {
  constructor(opts) {
    super()
    //作业：合并配置，用老师之外的方法合并配置，外部有配置传入以 外部配置为准，如果没有配置传入就调用默认配置；
    // this.opts = opts;
    // this.opts = Object.assign({
    //     width: "30%",
    //     height: "250px",
    //     title: "测试标题",
    //     content: "测试内容",
    //     dragable: true, //是否可拖拽
    //     maskable: true, //是否有遮罩
    //     isCancel:false, //是否有取消
    //     success(){},
    //     cancel(){}
    // },opts)

    // 暗号: 哈士奇
    this.opts = {
      width: '30%',
      height: '250px',
      title: '测试标题',
      content: '测试内容',
      dragable: true, //是否可拖拽
      maskable: true, //是否有遮罩
      isCancel: false, //是否有取消
      success() {},
      cancel() {},
      ...opts
    }
    console.log(this.opts)
    this.init()
  }
  init() {
    this.createHtml()
    if (!this.opts.maskable) {
      console.log(this.dialogEle)
      this.dialogEle.querySelector('.k-wrapper').style.display = 'none'
    }
    // 绑定自定义事件
    // this.addEvent("success",this.opts.success);
    this.addEventListener('success', this.opts.success)

    // 绑定事件
    this.dialogEle.querySelector('.k-dialog').addEventListener('click', e => {
      console.log(e.target.className)
      switch (e.target.className) {
        case 'k-close':
          this.close()
          break
        case 'k-primary':
          this.close()
          // this.opts.success();
          this.confirm()
          break
        case 'k-cancel':
          this.close()
          this.opts.cancel()
          break
      }
    })
    if (this.opts.dragable) {
      this.dragable()
    }
  }
  confirm(value) {
    // this.trigger("success");
    this.dispatchEvent(
      new CustomEvent('success', {
        detail: value
      })
    )
  }
  open() {
    // console.log("open");
    // document.querySelector(".k-dialog");
    this.dialogEle.style.display = 'block'
  }
  close() {
    this.dialogEle.style.display = 'none'
  }
  createHtml() {
    let dialogEle = document.createElement('div')
    dialogEle.style.display = 'none'
    dialogEle.innerHTML = `<div class="k-wrapper"></div>
        <div class="k-dialog" style="width:${this.opts.width};height:${this.opts.height}">
            <div class="k-header">
                <span class="k-title">${this.opts.title}</span><span class="k-close">X</span>
            </div>
            <div class="k-body">
                <span>${this.opts.content}</span>
            </div>
            <div class="k-footer">
                ${this.opts.isCancel ? '<span class="k-cancel">取消</span>' : ''}
                <span class="k-primary">确定</span>
            </div>
        </div>`
    document.body.appendChild(dialogEle)
    this.dialogEle = dialogEle
  }
  dragable() {
    let kDialog = this.dialogEle.querySelector('.k-dialog')
    kDialog.onmousedown = function (e) {
      console.log(11)
      let x = e.clientX - kDialog.offsetLeft
      let y = e.clientY - kDialog.offsetTop
      kDialog.onmousemove = function (e) {
        let xx = e.clientX
        let yy = e.clientY
        kDialog.style.left = xx - x + 'px'
        kDialog.style.top = yy - y + 'px'
      }
      kDialog.onmouseup = function () {
        kDialog.onmousemove = ''
      }
    }
  }
}

export class InputDialog extends Dialog {
  constructor(opts) {
    super(opts)
    this.createInput()
  }
  createInput() {
    let myInput = document.createElement('input')
    myInput.type = 'text'
    myInput.classList.add('input-inner')
    this.dialogEle.querySelector('.k-body').appendChild(myInput)
    this.myInput = myInput
  }
  confirm() {
    // console.log("点击了确定子类");
    let value = this.myInput.value
    // console.log(value);
    super.confirm(value)
  }
}

class MyDialog extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<button>${this.innerText}</button>`
    // this.title = this.getAttribute("tittle")
    let dialog = new Dialog({
      // 配置
      title: this.title,
      content: this.content,
      success: e => {
        this.dispatchEvent(
          new CustomEvent('success', {
            detail: e.detail
          })
        )
      }
    })
    this.onclick = function () {
      dialog.open()
    }
  }
  get title() {
    // 处理默认参数；
    return this.getAttribute('title') ?? '默认标题'
  }
  get content() {
    return this.getAttribute('content') ?? '默认内容'
  }
}
customElements.define('my-dialog', MyDialog)
