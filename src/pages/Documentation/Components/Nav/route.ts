import { RouteRecordRaw } from 'vue-router';

export const NavRoute: RouteRecordRaw = {
  name: 'NavigationPage',
  path: 'navigation',
  component: () => import(/* webpackChunkName: "nav" */ './Nav.vue'),
  meta: {
    title: 'Navigation',
  },
};
