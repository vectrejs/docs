import { RouteConfig } from 'vue-router';

export const BarRoute = {
  name: 'BarPage',
  path: 'bar',
  component: () => import(/* webpackChunkName: 'bar' */ './Bar.vue'),
  meta: {
    title: 'Bar',
  },
} as RouteConfig;
