import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    redirect: '/',
  }
]
