import { RouteConfig } from 'vue-router';

export const FormRadioRoute = {
  name: 'RadioPage',
  path: 'radio',
  component: () => import(/* webpackChunkName: "radio" */ './Radio.vue'),
  meta: {
    title: 'Radio',
  },
} as RouteConfig;
