import { RouteRecordRaw } from 'vue-router';

export const ToastRoute: RouteRecordRaw = {
  name: 'ToastPage',
  path: 'toast',
  component: () => import(/* webpackChunkName: "toast" */ './Toast.vue'),
  meta: {
    title: 'Toast',
  },
};
