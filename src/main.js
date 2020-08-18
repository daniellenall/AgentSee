import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFirestore from 'vue-firestore';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/app.scss';

Vue.use(VueFirestore, {
  key: 'id', 
  enumerable: true
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
