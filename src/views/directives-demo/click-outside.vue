<template>
  <div class="components-container" v-click-outside="close">
    <el-button type="primary" @click="isVisible = !isVisible">
      show pannel
    </el-button>
    <div v-show="isVisible" class="bc"></div>
  </div>
</template>

<script>
// import elDragDialog from "@/directives/drag.js"; // base on element-ui

export default {
  name: "DragDialogDemo",
  // directives: { elDragDialog },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    close() {
      // 关闭pannel
      this.isVisible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.bc {
  background-color: $blue;
  height: 200px;
}
</style>
