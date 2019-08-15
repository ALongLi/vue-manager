import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/index.js";
import axios from "axios";
import echarts from "echarts";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "normalize.css/normalize.css"; // a modern alternative to CSS resets

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  size: "small"
});
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
