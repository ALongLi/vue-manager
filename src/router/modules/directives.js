/** When your routing table is too long, you can split it into small modules **/

const _import = require("../_import_" + process.env.NODE_ENV);

import Layout from "@/components/Layout/Layout.vue";

const directivesRouter = {
  path: "/directives",
  component: Layout,
  meta: { title: "指令" },
  redirect: "",
  children: [
    {
      path: "drag-dialog",
      component: _import("directives-demo/drag-dialog"),
      name: "DragDialogDemo",
      meta: { title: "DragDialogDemo" }
    },
    {
      path: "click-outside",
      component: _import("directives-demo/click-outside"),
      name: "clickOutsideDemo",
      meta: { title: "clickOutside" }
    },
    {
      path: "debounce",
      component: _import("directives-demo/debounce"),
      name: "debounce",
      meta: { title: "debounce" }
    }
  ]
};

export default directivesRouter;
