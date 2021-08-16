import { RouteRecordRaw } from 'vue-router';

export const CardRoute: RouteRecordRaw = {
  name: 'CardPage',
  path: 'card',
  component: () => import(/* webpackChunkName: "card" */ './Card.vue'),
  meta: {
    title: 'Cards',
  },
};
