import { createApp } from 'vue';
import Prism from './component/Prism';
import AppVue from './App.vue';
import router from './router';

const app = createApp(AppVue);

app.use(router);
app.component('prism', Prism);

app.mount('#app');
