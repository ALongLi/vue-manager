<template>
  <div class="components-container">
    <el-button type="primary" @click="dialogTableVisible = true">open a Drag Dialog</el-button>
    <el-dialog v-el-drag-dialog :visible.sync="dialogTableVisible" title="Shipping address"></el-dialog>
    <div id="pink" style="height:100px; background-color:pink"></div>
  </div>
</template>

<script>
// import elDragDialog from "@/directives/drag.js"; // base on element-ui

export default {
  name: "DragDialogDemo",
  // directives: { elDragDialog },
  data() {
    return {
      dialogTableVisible: false
    };
  },
  methods: {}
};
</script>
