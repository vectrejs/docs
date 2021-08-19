import { RouteRecordRaw } from 'vue-router';

export const FormSliderRoute: RouteRecordRaw = {
  name: 'SliderPage',
  path: 'slider',
  component: () => import(/* webpackChunkName: "slider" */ './Slider.vue'),
  meta: {
    title: 'Slider',
  },
};
