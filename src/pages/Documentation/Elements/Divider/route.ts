import { RouteRecordRaw } from 'vue-router';

export const route: RouteRecordRaw = {
  name: 'DividerPage',
  path: 'divider',
  component: () => import(/* webpackChunkName: "divider" */ './Divider.vue'),
  meta: {
    title: 'Divider',
  },
};
