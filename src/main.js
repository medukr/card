import Vue from 'vue'
import App from './App.vue'


import {router} from './router'

import 'bootstrap/dist/js/bootstrap'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
