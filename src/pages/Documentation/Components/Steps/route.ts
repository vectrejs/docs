import { RouteConfig } from 'vue-router';

export const StepsRoute = {
  name: 'StepsPage',
  path: 'steps',
  component: () => import(/* webpackChunkName: "steps" */ './Steps.vue'),
  meta: {
    title: 'Steps',
  },
} as RouteConfig;
