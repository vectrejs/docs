import { RouteConfig } from 'vue-router';

export const EmptyRoute = {
  name: 'EmptyPage',
  path: 'empty',
  component: () => import(/* webpackChunkName: "empty" */ './Empty.vue'),
  meta: {
    title: 'Empty States',
  },
} as RouteConfig;
