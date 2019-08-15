<template>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <Header></Header>
      <!-- <v-tags></v-tags> -->
      <Tags></Tags>
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
import Tags from "./components/Tags.vue";
export default {
  data() {
    return {
      tagsList: ["basetable"],
      collapse: false
    };
  },
  components: {
    Header,
    Sidebar,
    Tags
  },
  created() {}
};
</script>

<style scoped>
#app {
  color: #000;
}
</style>
