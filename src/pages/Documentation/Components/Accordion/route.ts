import { RouteRecordRaw } from 'vue-router';

export const AccordionRoute: RouteRecordRaw = {
  name: 'AccordionPage',
  path: 'accordion',
  component: () => import(/* webpackChunkName: "accordion" */ './Accordion.vue'),
  meta: {
    title: 'Accordion',
  },
};
