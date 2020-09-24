import { RouteConfig } from 'vue-router';

export const FormValidationRoute = {
  name: 'ValidationPage',
  path: 'validations',
  component: () => import(/* webpackChunkName: "validation" */ './Validation.vue'),
  meta: {
    title: 'Validation',
  },
} as RouteConfig;
