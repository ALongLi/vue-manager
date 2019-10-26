<template>
  <div class="components-container">
    <el-button type="primary" @click="handClick">show pannel</el-button>
    <button v-debounce:click.300="handClick" type="primary">show pannel</button>
    <el-button type="primary" v-debounce:click.300="handClick2"
      >el-button</el-button
    >
    <button v-throttle:click.3000="handClick">节流button</button>
    <input type="text" v-throttle:input.3000="handInput" v-model="value" />
    {{ value }}
    <el-input
      v-throttle:input.3000="handInput"
      v-model="value"
      placeholder
    ></el-input>
  </div>
</template>

<script>
// import elDragDialog from "@/directives/drag.js"; // base on element-ui

export default {
  name: "DebounceDemo",
  // directives: { elDragDialog },
  data() {
    return {
      value: 1
    };
  },
  methods: {
    handClick() {
      console.log(111);
    },
    handInput(val) {
      val.target.value;
      console.log(val.target.value + "input");
    },
    handClick2() {
      console.log(221);
    }
  }
};
</script>
<style lang="scss" scoped></style>
