import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
