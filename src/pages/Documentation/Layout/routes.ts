import { RouteRecordRaw } from 'vue-router';

const LayoutRoute = {
  name: 'LayoutPage',
  path: 'layout',
  component: () => import(/* webpackChunkName: "layout" */ './Layout.vue'),
  meta: {
    title: 'Layout',
  },
  anchors: {
    'Flexbox grid': 'flex',
    Responsive: 'responsive',
  },
} as RouteRecordRaw;

export { LayoutRoute };
