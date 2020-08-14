import { RouteConfig } from 'vue-router';

export const FormSelectRoute = {
  name: 'SelectPage',
  path: 'select',
  component: () => import(/* webpackChunkName: "select" */ './Select.vue'),
  meta: {
    title: 'Select',
  },
} as RouteConfig;
