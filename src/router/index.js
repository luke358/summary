import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sync from '../views/01-.sync使用/Father'
import Task from '../views/02-task-menu'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sync',
    name: 'Sync',
    component: Sync
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
