<template>
  <div>
    <el-button type="primary" @click="handleClick">普通按钮</el-button>
    <Debounce>
      <el-button type="primary" @click.native="handleClick">防抖按钮</el-button>
    </Debounce>
    <input v-model="value" type="text" />
    <Debounce events="input">
      <input v-model="value" type="text" />
    </Debounce>
  </div>
</template>

<script>
// import elDragDialog from "@/directives/drag.js"; // base on element-ui
// import Debounce from "@/components/Debounce";
export default {
  name: "DebounceDemo",
  // directives: { elDragDialog },
  //   components: {
  //     Debounce
  //   },
  data() {
    return {
      isVisible: false,
      value: 1
    };
  },
  watch: {
    value: function(newval) {
      console.log(newval);
    }
  },
  methods: {
    handleClick() {
      console.log(2);
    }
  }
};
</script>
<style lang="scss" scoped></style>
