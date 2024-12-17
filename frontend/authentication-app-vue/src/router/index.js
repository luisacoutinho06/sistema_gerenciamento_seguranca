import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/auth-components/login/LoginComponent.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home/HomeComponent.vue'),
  },
  {
    path: '/',
    name: 'register',
    component: () => import('../components/auth-components/register/RegisterComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
