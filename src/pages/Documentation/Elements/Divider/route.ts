import { RouteConfig } from 'vue-router';

export const route = {
  name: 'DividerPage',
  path: 'divider',
  component: () => import(/* webpackChunkName: "divider" */ './Divider.vue'),
  meta: {
    title: 'Divider',
  },
} as RouteConfig;
