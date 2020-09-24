import { RouteConfig } from 'vue-router';

export const NavRoute = {
  name: 'NavigationPage',
  path: 'navigation',
  component: () => import(/* webpackChunkName: "nav" */ './Nav.vue'),
  meta: {
    title: 'Navigation',
  },
} as RouteConfig;
