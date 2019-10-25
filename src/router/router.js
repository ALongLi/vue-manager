import Vue from "vue";
// 区分开发与生产路由加载方式
const _import = require("./_import_" + process.env.NODE_ENV);

import Router from "vue-router";
import Layout from "@/components/Layout/Layout.vue";
import nestedRouter from "./modules/nested";
import componentsRouter from "./modules/components";
import directiveRouter from "./modules/directives";
import settingRouter from "./modules/setting";
import mockRouter from "./modules/mock";

Vue.use(Router);

export const authRoutes = [
  // 权限路由
  nestedRouter,
  componentsRouter,
  directiveRouter,
  settingRouter
];

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
      path: "/",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          component: _import("Home"),
          name: "home"
        }
      ]
    },

    // nestedRouter,
    // componentsRouter,
    // settingRouter,
    mockRouter,
    {
      path: "/404",
      name: "404",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/404.vue")
      // component: resolve => require(["./views/404.vue"], resolve)
      // component: () => import("./views/404.vue")
      component: _import("404"),
      meta: {
        title: "404"
      }
    },
    {
      path: "/login",
      name: "login",
      component: _import("Login")
    }
    // {
    //   path: "*",
    //   redirect: "/404"
    // }
  ]
});
