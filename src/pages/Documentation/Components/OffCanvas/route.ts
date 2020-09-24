import { RouteConfig } from 'vue-router';

export const OffCanvasRoute: RouteConfig = {
  name: 'OffCanvasPage',
  path: 'offcanvas',
  component: () => import(/* webpackChunkName: "off-canvas" */ './OffCanvas.vue'),
  meta: {
    title: 'Off-canvas',
  },
};
