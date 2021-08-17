import { RouteRecordRaw } from 'vue-router';

export const PanelRoute: RouteRecordRaw = {
  name: 'PanelPage',
  path: 'panel',
  component: () => import(/* webpackChunkName: "panel" */ './Panel.vue'),
  meta: {
    title: 'Panels',
  },
};
