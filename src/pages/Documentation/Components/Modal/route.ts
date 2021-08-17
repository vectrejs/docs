import { RouteRecordRaw } from 'vue-router';

export const ModalRoute: RouteRecordRaw = {
  name: 'ModalPage',
  path: 'modal',
  component: () => import(/* webpackChunkName: "modal" */ './Modal.vue'),
  meta: {
    title: 'Modals',
  },
};
