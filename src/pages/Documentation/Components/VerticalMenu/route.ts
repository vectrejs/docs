import { RouteConfig } from 'vue-router';

export const VerticalMenuRoute = {
  name: 'VerticalMenuPage',
  path: 'menu',
  component: () => import(/* webpackChunkName: "verticalmenu" */ './VerticalMenu.vue'),
  meta: {
    title: 'Vertical Menu',
  },
} as RouteConfig;
