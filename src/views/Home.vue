<template>
  <div class="home">
    主页
    <img alt="Vue logo" src="../assets/logo.png" />
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div
      class="box"
      style="width:300px;"
    >超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略超出省略</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="scss" scoped>
.box {
  // @include ellipsis(3);
  @extend %ellipsis;
}
</style>
