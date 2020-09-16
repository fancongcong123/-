import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'
import Home from '@/views/Home.vue'
import Register from '@/views/register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "HomePage",
    component: Home
  },

  {
    path: '/login',
    name: "LoginPage",
    component: Login
  },
  {
    path: '/register',
    name: "RegisterPage",
    component: Register
  },
]



const router = new VueRouter({
  routes
})



export default router
