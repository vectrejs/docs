import { RouteConfig } from 'vue-router';

export const FormInputRoute = {
  name: 'InputPage',
  path: 'input',
  component: () => import(/* webpackChunkName: "input" */ './Input.vue'),
  meta: {
    title: 'Input',
  },
} as RouteConfig;
