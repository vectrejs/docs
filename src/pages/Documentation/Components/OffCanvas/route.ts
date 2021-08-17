import { RouteRecordRaw } from 'vue-router';

export const OffCanvasRoute: RouteRecordRaw = {
  name: 'OffCanvasPage',
  path: 'offcanvas',
  component: () => import(/* webpackChunkName: "off-canvas" */ './OffCanvas.vue'),
  meta: {
    title: 'Off-canvas',
  },
};
