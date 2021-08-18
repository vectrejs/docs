import { RouteRecordRaw } from 'vue-router';

export const TabsRoute: RouteRecordRaw = {
  name: 'TabsPage',
  path: 'tabs',
  component: () => import(/* webpackChunkName: "tabs" */ './Tabs.vue'),
  meta: {
    title: 'Tabs',
  },
};
