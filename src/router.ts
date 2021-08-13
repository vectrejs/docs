import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './pages';

const router = createRouter({
  history: createWebHashHistory('/docs/'),
  routes,
  async scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, left: 0, top: 50, behavior: 'smooth' };
    }

    return { left: 0, top: 0 };
  },
});

router.beforeEach(({ meta: { title = '' } }, from, next) => {
  document.title = 'vectre' + (title ? ` - ${title}` : '');
  next();
});

export default router;

export { routes };
