import { RouteRecordRaw } from 'vue-router';

export const route: RouteRecordRaw = {
  name: 'IconPage',
  path: 'icon',
  component: () => import(/* webpackChunkName: "icon" */ './Icon.vue'),
  meta: {
    title: 'Icons',
  },
};
