import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

import vueAxios from 'vue-axios'
import axios from 'axios'

import './assets/all.scss'

Vue.use(vueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  let apiToken = localStorage.getItem('apiToken')
  if (apiToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`
    next()
  } else {
    if( to.path !== '/login')
      next('/login')
    else
      next()
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
