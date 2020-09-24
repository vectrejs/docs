import { RouteConfig } from 'vue-router';

export const ToastRoute = {
  name: 'ToastPage',
  path: 'toast',
  component: () => import(/* webpackChunkName: "toast" */ './Toast.vue'),
  meta: {
    title: 'Toast',
  },
} as RouteConfig;
