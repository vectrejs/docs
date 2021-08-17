import { RouteRecordRaw } from 'vue-router';

export const ChipRoute: RouteRecordRaw = {
  name: 'ChipPage',
  path: 'chip',
  component: () => import(/* webpackChunkName: "chip" */ './Chip.vue'),
  meta: {
    title: 'Chips',
  },
};
