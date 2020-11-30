import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  { path: '/', redirect: '/tasks' },

  {
    path: '/tasks',
    name: 'Tasks',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/TasksView.vue')
  },
  {
  	path: '/:nickname',
  	name: 'Profile',
  	component: () => import('../views/ProfileView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
