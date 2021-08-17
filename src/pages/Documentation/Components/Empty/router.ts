import { RouteRecordRaw } from 'vue-router';

export const EmptyRoute: RouteRecordRaw = {
  name: 'EmptyPage',
  path: 'empty',
  component: () => import(/* webpackChunkName: "empty" */ './Empty.vue'),
  meta: {
    title: 'Empty States',
  },
};
