import { RouteConfig } from 'vue-router';

export const TabsRoute = {
  name: 'TabsPage',
  path: 'tabs',
  component: () => import(/* webpackChunkName: "tabs" */ './Tabs.vue'),
  meta: {
    title: 'Tabs',
  },
} as RouteConfig;
