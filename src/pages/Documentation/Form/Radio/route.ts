import { RouteRecordRaw } from 'vue-router';

export const FormRadioRoute: RouteRecordRaw = {
  name: 'RadioPage',
  path: 'radio',
  component: () => import(/* webpackChunkName: "radio" */ './Radio.vue'),
  meta: {
    title: 'Radio',
  },
};
