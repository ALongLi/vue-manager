import Vue from "vue";
const _import = require("./_import_" + process.env.NODE_ENV);

import Router from "vue-router";
import Home from "@/views/Home.vue";
// import about from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
      // component: resolve => require(["./views/About.vue"], resolve)
      component: _import("About")
      // component: () => import("./views/About.vue")
    },
    {
      path: "/404",
      component: _import("404")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
