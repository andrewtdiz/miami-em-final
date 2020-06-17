import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo, {
  offset: -15,
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
