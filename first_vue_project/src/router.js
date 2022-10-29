import { createWebHistory, createRouter } from "vue-router";
import Login from './components/login/Login.vue'
import Dashboard from './components/dashboard/Dashboard.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;