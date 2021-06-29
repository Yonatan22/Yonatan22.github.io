import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Archive from "../views/Archive.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Assignments",
    name: "Home",
    component: Home,
  },
  {
    path: "/archive",
    name: "archive",
    component: Archive,
  }
];

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production'
      ? '/dist/index/'
      : '/',
  routes,
});

export default router;
