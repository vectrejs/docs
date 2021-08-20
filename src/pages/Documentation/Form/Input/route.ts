import { RouteRecordRaw } from 'vue-router';

export const FormInputRoute: RouteRecordRaw = {
  name: 'InputPage',
  path: 'input',
  component: () => import(/* webpackChunkName: "input" */ './Input.vue'),
  meta: {
    title: 'Input',
  },
};
