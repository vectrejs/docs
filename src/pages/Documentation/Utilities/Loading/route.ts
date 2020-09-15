import { RouteConfig } from 'vue-router';

export const route = {
  name: 'LoadingPage',
  path: 'loading',
  component: () => import(/* webpackChunkName: "loading" */ './Loading.vue'),
  meta: {
    title: 'Loading',
  },
} as RouteConfig;
