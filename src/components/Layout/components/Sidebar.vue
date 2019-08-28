<template>
  <div class="sidebar-container has-logo">
    <div class="logo-container">
      <router-link key="collapse" class="sidebar-logo-link" to="/">
        <img src="@/assets/logo.png" class="sidebar-logo" />
        <h1 class="sidebar-title">后台管理系统</h1>
      </router-link>
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse="isCollapse"
        unique-opened
      >
        <!-- router -->
        <template v-for="(item, index) in menuList">
          <sidebar-item :key="index" :item="item" />
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import variables from "@/assets/css/_variable.scss";
import SidebarItem from "./SidebarItem.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      variables
    };
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapState({
      isCollapse: state => state.collapse,
      menuList: state => state.menuList
    }),
    onRoutes() {
      return this.$route.fullPath;
    }
    // isCollapse() {
    //   return this.$store.state.collapse;
    // },
    // menuList() {
    //   return this.$store.state.menuList;
    // }
  },
  mounted() {
    // this.$bus.$on("toggleSidebar", function(isCollapse) {
    //   this.isCollapse = isCollapse;
    // });
  }
};
</script>

<style lang="scss" scope>
.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  background-color: $menuBg;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;

  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
  .logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    overflow: hidden;
    img {
      width: 32px;
      vertical-align: middle;
      margin-right: 15px;
    }
    h1 {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
    }
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }

  .el-scrollbar {
    height: 100%;
  }

  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }

  .is-horizontal {
    display: none;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .svg-icon {
    margin-right: 16px;
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }

  // menu hover
  .submenu-title-noDropdown,
  .el-submenu__title {
    &:hover {
      background-color: $menuHover !important;
    }
  }

  .is-active > .el-submenu__title {
    color: $subMenuActiveText !important;
  }
  .el-submenu__title,
  .el-menu-item {
    & i {
      color: inherit;
    }
  }
  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
    background-color: $subMenuBg !important;

    &:hover {
      background-color: $subMenuHover !important;
    }
  }
}

.hideSidebar {
  .sidebar-container {
    width: 64px !important;
  }

  .main-container {
    margin-left: 64px;
  }
}
</style>
