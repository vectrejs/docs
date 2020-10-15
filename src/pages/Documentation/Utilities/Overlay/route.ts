import { RouteConfig } from 'vue-router';

export const route = {
  name: 'OverlayDirectivePage',
  path: 'overlay',
  component: () => import(/* webpackChunkName: "overlay" */ './Overlay.vue'),
  meta: {
    title: 'Overlay',
  },
} as RouteConfig;
