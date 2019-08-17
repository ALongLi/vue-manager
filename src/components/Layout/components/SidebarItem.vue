<template>
  <el-submenu v-if="item.children.length" :index="item.funcId">
    <template slot="title">
      <i v-if="item.icon" class="icon iconfont el-icon-" :class="item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </template>
    <template v-for="(m, i) in item.children">
      <sidebar-item :key="i" :item="m" class="nest-menu" />
    </template>
  </el-submenu>
  <el-menu-item :index="item.href" v-else @click="clickRouter(item)">
    <i v-if="item.icon" class="icon iconfont el-icon-" :class="item.icon"></i>
    <span slot="title">{{ item.label }}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    clickRouter(item) {
      const { fullPath } = this.$route;
      if (item.href == fullPath) {
        this.$router.replace({
          path: "/redirect" + fullPath
        });
      } else {
        this.$router.push({
          path: item.href
        });
      }

      // alert(item);
    }
  }
};
</script>
