import { RouteConfig } from 'vue-router';

export const PanelRoute = {
  name: 'PanelPage',
  path: 'panel',
  component: () => import(/* webpackChunkName: "panel" */ './Panel.vue'),
  meta: {
    title: 'Panels',
  },
} as RouteConfig;
