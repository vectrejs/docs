import { RouteRecordRaw } from 'vue-router';

export const VerticalMenuRoute: RouteRecordRaw = {
  name: 'VerticalMenuPage',
  path: 'menu',
  component: () => import(/* webpackChunkName: "verticalmenu" */ './VerticalMenu.vue'),
  meta: {
    title: 'Vertical Menu',
  },
};
