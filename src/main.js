import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from '@/store'

import AppDate from '@/components/AppDate'
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDxZLLqHUVKsBagOZmRRQ3jaXJnUVNKbZk",
  authDomain: "vue-school-forum-c9c0c.firebaseapp.com",
  projectId: "vue-school-forum-c9c0c",
  storageBucket: "vue-school-forum-c9c0c.appspot.com",
  messagingSenderId: "669332920229",
  appId: "1:669332920229:web:6fce09b6dc57d8d915ba4c"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
