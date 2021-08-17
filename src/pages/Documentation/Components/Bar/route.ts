import { RouteRecordRaw } from 'vue-router';

export const BarRoute: RouteRecordRaw = {
  name: 'BarPage',
  path: 'bar',
  component: () => import(/* webpackChunkName: 'bar' */ './Bar.vue'),
  meta: {
    title: 'Bar',
  },
};
