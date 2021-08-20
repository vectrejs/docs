import { RouteRecordRaw } from 'vue-router';

export const FormCheckboxRoute: RouteRecordRaw = {
  name: 'CheckboxPage',
  path: 'checkbox',
  component: () => import(/* webpackChunkName: "checkbox" */ './Checkbox.vue'),
  meta: {
    title: 'Checkbox',
  },
};
