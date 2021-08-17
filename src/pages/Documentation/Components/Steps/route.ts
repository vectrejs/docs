import { RouteRecordRaw } from 'vue-router';

export const StepsRoute: RouteRecordRaw = {
  name: 'StepsPage',
  path: 'steps',
  component: () => import(/* webpackChunkName: "steps" */ './Steps.vue'),
  meta: {
    title: 'Steps',
  },
};
