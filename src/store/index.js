import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { authRoutes } from "../router/router.js";

Vue.use(Vuex);

const formatList = (authRoutes, menuNameList) => {
  return authRoutes.filter(route => {
    if (menuNameList.includes(route.meta.title)) {
      if (route.children) {
        route.children = formatList(route.children, menuNameList);
      }
      return true;
    }
  });
};
const getMenuLabel = (menuList, menuNameList) => {
  return menuList.forEach(menuItem => {
    menuNameList.push(menuItem.label);
    if (menuItem.children && menuItem.children.length) {
      getMenuLabel(menuItem.children, menuNameList);
    }
  });
};
export default new Vuex.Store({
  state: {
    collapse: false,
    hasPermission: false,
    menuList: []
  },
  mutations: {
    collapse(state) {
      state.collapse = !state.collapse;
    },
    setMenuList(state, menu) {
      state.menuList = menu;
    },
    setPermission(state) {
      state.hasPermission = true;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit("collapse");
    },
    async getNewRoute({ commit }) {
      // 发起请求 请求后端数据
      // 获取权限
      let { data } = await axios.get("menuList");
      let menuNameList = [];
      getMenuLabel(data, menuNameList);
      commit("setMenuList", data);
      let needRoutes = formatList(authRoutes, menuNameList);
      commit("setPermission");
      return needRoutes;
    }
  }
});
