import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapse: true
  },
  mutations: {
    collapse(state) {
      state.collapse = !state.collapse;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit("collapse");
    }
  }
});
