import { RouteConfig } from 'vue-router';

export const FormGroupRoute = {
  name: 'GroupPage',
  path: 'group',
  component: () => import(/* webpackChunkName: "group" */ './Group.vue'),
  meta: {
    title: 'Group',
  },
} as RouteConfig;
