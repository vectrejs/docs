import { RouteRecordRaw } from 'vue-router';

export const FormOverviewRoute: RouteRecordRaw = {
  name: 'FormOverviewPage',
  path: 'overview',
  component: () => import(/* webpackChunkName: "overview" */ './Overview.vue'),
  meta: {
    title: 'Overview',
  },
};
