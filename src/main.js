import Vue from 'vue'
import App from './App.vue'

import vueAxios from 'vue-axios'
import axios from 'axios'

import './assets/all.scss'

Vue.use(vueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
