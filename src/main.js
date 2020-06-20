import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
var VueScrollTo = require('vue-scrollto');
import VueTilt from 'vue-tilt.js'

Vue.use(VueTilt)
Vue.use(VueScrollTo, {
  offset: -15,
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
