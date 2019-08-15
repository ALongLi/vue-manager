import Vue from "vue";
const _import = require("./_import_" + process.env.NODE_ENV);

import Router from "vue-router";
import Layout from "@/components/Layout/Layout.vue";
// import about from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/redirect",
      component: Layout,
      hidden: true,
      children: [
        {
          path: "/redirect/:path*",
          component: _import("redirect/index")
        }
      ]
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
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/404",
          name: "404",
          component: _import("404")
        },
        {
          path: "/home",
          component: _import("Home"),
          name: "home"
        },
        {
          path: "/appAnalysis",
          component: _import("Home"),
          name: "appAnalysis"
        }
      ]
    },
    {
      path: "/user",
      component: Layout,
      // redirect: "",
      children: [
        {
          path: "userAnalysis",
          component: _import("Home2"),
          name: "userAnalysis"
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: _import("Login")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
