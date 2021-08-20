import { RouteRecordRaw } from 'vue-router';

export const FormSwitchRoute: RouteRecordRaw = {
  name: 'SwitchPage',
  path: 'switch',
  component: () => import(/* webpackChunkName: "switch" */ './Switch.vue'),
  meta: {
    title: 'Switch',
  },
};
