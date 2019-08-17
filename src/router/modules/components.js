/** When your routing table is too long, you can split it into small modules **/

const _import = require("../_import_" + process.env.NODE_ENV);

import Layout from "@/components/Layout/Layout.vue";

const componentsRouter = {
  path: "/components",
  component: Layout,
  meta: { title: "组件" },
  redirect: "",
  children: [
    {
      path: "drag-dialog",
      component: _import("components-demo/drag-dialog"),
      name: "DragDialogDemo",
      meta: { title: "DragDialogDemo" }
    },
    {
      path: "click-outside",
      component: _import("components-demo/click-outside"),
      name: "clickOutsideDemo",
      meta: { title: "clickOutside" }
    }
  ]
};

export default componentsRouter;
