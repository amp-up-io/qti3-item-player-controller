import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// Get app configuration
Vue.prototype.$VUE_APP_CONFIGURATION = window?.appConfiguration || null

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
