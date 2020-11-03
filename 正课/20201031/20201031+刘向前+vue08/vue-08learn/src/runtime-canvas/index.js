/*
 * @Author       : your name
 * @Date         : 2020-11-01 16:48:42
 * @LastEditTime : 2020-11-01 20:41:07
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201031\20201031+刘向前+vue08\vue-08\src\runtime-canvas\index.js
 */
import { createRenderer } from 'vue';
import { Container, Texture, Graphics } from 'pixi.js';
// 自定义渲染器 api
const renderer = createRenderer({
  // 渲染api
  // 渲染接口 -》 实现一些接口 -》 函数
  createElement(type) {
    //创建一个圆形
    let element;
    switch (type) {
      case 'container':
        // 容器
        element = new Container();
        break;
      case 'circle':
        element = new Graphics();
        element.beginFill(0xffff00);
        element.drawCircle(0, 300, 50);
        element.endFill();
        break;
      default:
        break;
    }
    return element;
  },
  insert(el, parent) {
    // 把 元素 添加到容器内
    // parent -》 #app
    // pixi -> addChild
    if (el && parent) {
      parent.addChild(el);
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    // console.log(key);
    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextValue);
        break;
      case 'onClick':
        el.on('pointertap', nextValue);
        break;
      default:
        el[key] = nextValue;
        break;
    }
  },
  // 获取父级容器
  parentNode(node) {
    return node.parent;
  },
  // 删除元素时调用
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  // 创建一个文本的时候调用
  createText(text) {
    return new Text(text);
  },
  // 无需实现
  nextSibling() {},
  createComment() {}
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
