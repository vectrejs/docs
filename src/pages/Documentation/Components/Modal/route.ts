import { RouteConfig } from 'vue-router';

export const ModalRoute = {
  name: 'ModalPage',
  path: 'modal',
  component: () => import(/* webpackChunkName: "modal" */ './Modal.vue'),
  meta: {
    title: 'Modals',
  },
} as RouteConfig;
