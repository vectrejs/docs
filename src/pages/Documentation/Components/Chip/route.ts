import { RouteConfig } from 'vue-router';

export const ChipRoute = {
  name: 'ChipPage',
  path: 'chip',
  component: () => import(/* webpackChunkName: "chip" */ './Chip.vue'),
  meta: {
    title: 'Chips',
  },
} as RouteConfig;
