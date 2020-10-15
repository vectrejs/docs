import { RouteConfig } from 'vue-router';

export const FormSliderRoute = {
  name: 'SliderPage',
  path: 'slider',
  component: () => import(/* webpackChunkName: "slider" */ './Slider.vue'),
  meta: {
    title: 'Slider',
  },
} as RouteConfig;
