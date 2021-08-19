import { RouteRecordRaw } from 'vue-router';

export const FormSelectRoute: RouteRecordRaw = {
  name: 'SelectPage',
  path: 'select',
  component: () => import(/* webpackChunkName: "select" */ './Select.vue'),
  meta: {
    title: 'Select',
  },
};
