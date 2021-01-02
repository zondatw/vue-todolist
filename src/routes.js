import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'

export const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    path: '*',
    redirect: '/',
  }
]
