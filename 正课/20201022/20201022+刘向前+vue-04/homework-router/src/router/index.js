import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";

// 暗号：赵信吃蟹黄包

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
