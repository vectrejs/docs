import { RouteConfig } from 'vue-router';

export const FormSwitchRoute = {
  name: 'SwitchPage',
  path: 'switch',
  component: () => import(/* webpackChunkName: "switch" */ './Switch.vue'),
  meta: {
    title: 'Switch',
  },
} as RouteConfig;
