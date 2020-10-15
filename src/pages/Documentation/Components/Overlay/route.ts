import { RouteConfig } from 'vue-router';

export const OverlayRoute = {
  name: 'OverlayPage',
  path: 'overlay',
  component: () => import(/* webpackChunkName: "overlay-component" */ './Overlay.vue'),
  meta: {
    title: 'Overlay',
  },
} as RouteConfig;
