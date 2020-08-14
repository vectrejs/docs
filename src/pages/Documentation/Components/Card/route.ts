import { RouteConfig } from 'vue-router';

export const CardRoute = {
  name: 'CardPage',
  path: 'card',
  component: () => import(/* webpackChunkName: "card" */ './Card.vue'),
  meta: {
    title: 'Cards',
  },
} as RouteConfig;
