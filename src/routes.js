import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
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
