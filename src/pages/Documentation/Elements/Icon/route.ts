import { RouteConfig } from 'vue-router';

export const route = {
  name: 'IconPage',
  path: 'icon',
  component: () => import(/* webpackChunkName: "icon" */ './Icon.vue'),
  meta: {
    title: 'Icons',
  },
} as RouteConfig;
