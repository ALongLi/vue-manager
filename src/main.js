import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/index.js";
import axios from "axios";
import echarts from "echarts";
import ElementUI from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "normalize.css/normalize.css"; // a modern alternative to CSS resets
import * as filters from "./filters"; // global filters

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small"
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});
// const token = Cookies.get('token');
// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, _from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  next();
});

//当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});
