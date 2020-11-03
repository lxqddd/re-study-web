import { createApp } from "./runtime-canvas";
import App from "./App.vue";
import { createRootContainer } from "./game";

// pixi.js = canvas
// pixi.js 是基于 canvas 封装的游戏引擎框架
// 渲染平台
// 1. dom 浏览器
// 2. canvas  ios  安卓 桌面

createApp(App).mount(createRootContainer());
