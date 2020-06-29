import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { MdField, MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
Vue.config.productionTip = true

Vue.use(MdField)
Vue.use(MdButton)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
