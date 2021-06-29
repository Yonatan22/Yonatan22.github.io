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
  routes,
});

export default router;
