import Vue from 'vue';
import App from './app.vue';
import router from './router/index';

Vue.use(router);

new Vue({
  el: '#app',
  router,
  render: c => c(App)
})