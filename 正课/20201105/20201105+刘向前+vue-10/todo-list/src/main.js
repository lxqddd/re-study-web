/*
 * @Author       : your name
 * @Date         : 2020-11-06 21:35:59
 * @LastEditTime : 2020-11-06 21:48:18
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201105\20201105+刘向前+vue-10\todo-list\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Element3 from "element3";
import "element3/lib/theme-chalk/button.css";

createApp(App)
  .use(store)
  .use(Element3)
  .mount("#app");
