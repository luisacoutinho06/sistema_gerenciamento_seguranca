import Vue from 'vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

import MenuComponent from './components/Menu/MenuComponent.vue';

Vue.use(Vuelidate);

Vue.component('MenuComponent', MenuComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
