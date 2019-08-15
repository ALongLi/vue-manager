<template>
  <div class="wrapper" :class="classObj">
    <Sidebar></Sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <Header class="header"></Header>
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
export default {
  data() {
    return {
      tagsList: ["basetable"]
      //   collapse: true
    };
  },
  components: {
    Header,
    Sidebar
  },
  computed: {
    classObj() {
      return {
        hideSidebar: this.$store.state.collapse,
        openSidebar: !this.$store.state.collapse
      };
    },
    collapse() {
      return this.$store.state.collapse;
    }
  },

  created() {},
  mounted() {
    this.$bus.$on("toggleSidebar", function(isCollapse) {
      this.collapse = isCollapse;
    });
  }
};
</script>

<style scoped>
#app {
  color: #000;
}
.header {
  background-color: #fff;
}
</style>
