import { RouteConfig } from 'vue-router';

export const FormCheckboxRoute = {
  name: 'CheckboxPage',
  path: 'checkbox',
  component: () => import(/* webpackChunkName: "checkbox" */ './Checkbox.vue'),
  meta: {
    title: 'Checkbox',
  },
} as RouteConfig;
