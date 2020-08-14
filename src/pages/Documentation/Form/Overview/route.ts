import { RouteConfig } from 'vue-router';

export const FormOverviewRoute = {
  name: 'FormOverviewPage',
  path: 'overview',
  component: () => import(/* webpackChunkName: "overview" */ './Overview.vue'),
  meta: {
    title: 'Overview',
  },
} as RouteConfig;
