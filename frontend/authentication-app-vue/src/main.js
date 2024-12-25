import Vue from 'vue';
import Vuelidate from 'vuelidate';

// eslint-disable-next-line import/no-extraneous-dependencies
import Echarts from 'vue-echarts';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'echarts/lib/component/title';

Vue.use(Vuelidate);
Vue.component('v-chart', Echarts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
