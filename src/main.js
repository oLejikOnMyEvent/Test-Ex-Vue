import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueFriendlyIframe from 'vue-friendly-iframe';
import store from './store'

Vue.component('vue-friendly-iframe', VueFriendlyIframe);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
