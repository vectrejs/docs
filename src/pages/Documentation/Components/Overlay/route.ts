import { RouteRecordRaw } from 'vue-router';

export const OverlayRoute: RouteRecordRaw = {
  name: 'OverlayPage',
  path: 'overlay',
  component: () => import(/* webpackChunkName: "overlay-component" */ './Overlay.vue'),
  meta: {
    title: 'Overlay',
  },
};
