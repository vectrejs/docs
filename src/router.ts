import vue from 'vue';
import vueRouter from 'vue-router';
import { routes } from './pages';
import { PositionResult } from 'vue-router/types/router';

vue.use(vueRouter);

const router = new vueRouter({
  routes,
  scrollBehavior(to): PositionResult {
    if (to.hash) {
      return { selector: to.hash, offset: { x: 0, y: 50 } };
    }

    return { x: 0, y: 0 };
  },
});

router.beforeEach(({ meta: { title = '' } }, from, next) => {
  document.title = 'vectre' + (title ? ` - ${title}` : '');
  next();
});

export default router;

export { routes };
