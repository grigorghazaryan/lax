import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
Vue.config.productionTip = true


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
