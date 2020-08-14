import { RouteConfig } from 'vue-router';

export const route = {
  path: 'loading',
  component: () => import(/* webpackChunkName: "loading" */ './Loading.vue'),
  meta: {
    title: 'Loading',
  },
} as RouteConfig;
