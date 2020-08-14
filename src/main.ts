import vue, { VNode } from 'vue';
import AppVue from './App.vue';

if (process.env.NODE_ENV === 'production') {
  vue.config.devtools = false;
  vue.config.silent = true;
} else {
  vue.config.devtools = true;
  vue.config.performance = true;
}

export default new vue({
  el: '#app',
  render: (h): VNode => h(AppVue),
});
