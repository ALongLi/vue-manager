/** When your routing table is too long, you can split it into small modules **/

const _import = require("../_import_" + process.env.NODE_ENV);

import Layout from "@/components/Layout/Layout.vue";

const settingRouter = {
  path: "/setting",
  component: Layout,
  name: "setting",
  redirect: "",
  meta: {
    title: "系统设置"
  },
  children: [
    {
      path: "user",
      component: _import("User"),
      name: "user",
      meta: {
        title: "用户设置"
      }
    }
  ]
};
export default settingRouter;
