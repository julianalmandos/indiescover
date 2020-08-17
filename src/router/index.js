import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import DashboardHome from '../views/DashboardHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: DashboardHome,
      }
    ]
  },
  {
    path: '*',
    redirect: '/' //We should change this with an error page
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
