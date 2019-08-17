/** When your routing table is too long, you can split it into small modules **/

const _import = require("../_import_" + process.env.NODE_ENV);

import Layout from "@/components/Layout/Layout.vue";

const mockRouter = {
  path: "/mock",
  component: Layout,
  name: "mock",
  redirect: "",
  meta: {
    title: "mock数据"
  },
  children: [
    {
      path: "table",
      component: _import("mock-demo/mock-table"),
      name: "user",
      meta: {
        title: "表格"
      }
    }
  ]
};
export default mockRouter;
