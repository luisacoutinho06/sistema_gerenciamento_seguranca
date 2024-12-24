import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/auth-components/login/LoginComponent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home/HomeComponent.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/auth-components/register/RegisterComponent.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../components/users/UsersComponent.vue'),
  },
  {
    path: '/inventarios',
    name: 'inventarios',
    component: () => import('../components/inventarios-itens/InventariosComponent.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/dashboard/DashboardComponenet.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// ==> Tratativa para evitar armazenamento do token no localStorage;
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// ==> Lógica referente ao NProgress
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
