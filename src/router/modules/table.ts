const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/table",
  component: Layout,
  redirect: "/table/index",
  meta: {
    icon: "ep:histogram",
    title: "表格",
    rank: 10
  },
  children: [
    {
      path: "/table/index",
      name: "Table",
      component: () => import("@/views/table/index.vue"),
      meta: {
        title: "表格",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
