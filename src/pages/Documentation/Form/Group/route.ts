import { RouteRecordRaw } from 'vue-router';

export const FormGroupRoute: RouteRecordRaw = {
  name: 'GroupPage',
  path: 'group',
  component: () => import(/* webpackChunkName: "group" */ './Group.vue'),
  meta: {
    title: 'Group',
  },
};
