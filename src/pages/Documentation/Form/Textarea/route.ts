import { RouteRecordRaw } from 'vue-router';

export const route: RouteRecordRaw = {
  name: 'TextareaPage',
  path: 'textarea',
  component: () => import(/* webpackChunkName: "textarea" */ './Textarea.vue'),
  meta: {
    title: 'Textarea',
  },
};
