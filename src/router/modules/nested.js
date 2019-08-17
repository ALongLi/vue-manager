/** When your routing table is too long, you can split it into small modules **/

const _import = require("../_import_" + process.env.NODE_ENV);

import Layout from "@/components/Layout/Layout.vue";

const nestedRouter = {
  path: "/nested",
  component: Layout,
  redirect: "/nested/menu1/menu1-1",
  name: "Nested",
  meta: {
    title: "多级菜单",
    icon: "nested"
  },
  children: [
    {
      path: "menu1",
      component: _import("nested/menu1/index"), // Parent router-view
      name: "Menu1",
      meta: { title: "菜单1" },
      redirect: "/nested/menu1/menu1-1",
      children: [
        {
          path: "menu1-1",
          component: _import("nested/menu1/menu1-1/index"),
          name: "Menu1-1",
          meta: { title: "菜单1-1" }
        },
        {
          path: "menu1-2",
          component: _import("nested/menu1/menu1-2/index"),
          name: "Menu1-2",
          redirect: "/nested/menu1/menu1-2/menu1-2-1",
          meta: { title: "菜单1-2" },
          children: [
            {
              path: "menu1-2-1",
              component: _import("nested/menu1/menu1-2/menu1-2-1/index"),
              name: "Menu1-2-1",
              meta: { title: "菜单1-2-1" }
            },
            {
              path: "menu1-2-2",
              component: _import("nested/menu1/menu1-2/menu1-2-2/index"),
              name: "Menu1-2-2",
              meta: { title: "菜单1-2-2" }
            }
          ]
        }
      ]
    },
    {
      path: "menu2",
      name: "Menu2",
      component: _import("nested/menu2/index"),
      meta: { title: "菜单2" }
    }
  ]
};

export default nestedRouter;
