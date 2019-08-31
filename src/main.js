import Vue from "vue";
require("babel-polyfill");
// import "babel-polyfill";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/index.js";
import echarts from "echarts";
// import _ from "lodash";
import ElementUI from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import "./assets/font/iconfont.css";
import "./assets/css/icon.css";
import * as filters from "./filters"; // global filters

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small"
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
[[1]].flatten();
[(2, 3, 4)].flatMap(x => [x, x * 2]);

const context = require.context("./directives", true, /^((?!demo\.js).)+\.js$/);
try {
  context.keys().forEach(path => {
    let res = context(path);
    // 导出指令对象，并且存在指令名称，全局注册，否则不注册，自行引入注册
    if (res.default.name) {
      Vue.directive(res.default.name, res.default);
    }
  });
} catch (e) {
  // console.log(e);
}
Vue.prototype.$bus = new Vue();
Vue.prototype.$echarts = echarts;

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});
// 使用钩子函数对路由进行权限跳转
router.beforeEach(async (to, _from, next) => {
  if (!store.state.hasPermission) {
    // 如果没权限 需要获取权限
    // 获取需要添加的路由
    let newRoutes = await store.dispatch("getNewRoute");
    // 动态添加路由
    // 404在这添加不然刷新页面会到404
    newRoutes.push({
      path: "*",
      redirect: "/404"
    });
    router.addRoutes(newRoutes); // 动态添加我需要的路由
    next({ ...to }, { replace: true }); // replaceState
  } else {
    // 每次切换页面时，调用进度条
    NProgress.start();
    next();
  }
  // next();
});
//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
