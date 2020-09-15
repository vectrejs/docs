import { RouteConfig } from 'vue-router';

export const route = {
  name: 'TooltipPage',
  path: 'tooltip',
  component: () => import(/* webpackChunkName: "loading" */ './Tooltip.vue'),
  meta: {
    title: 'Tooltip',
  },
} as RouteConfig;
