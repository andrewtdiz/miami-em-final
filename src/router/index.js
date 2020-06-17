import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Residents from '../views/Residents.vue'
import Faculty from '../views/Faculty.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clinicalsites',
    name: 'Sites',
    // route level code-splitting
    // this generates a separate chunk (Sites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Sites" */ '../views/Sites.vue')
  },
  {
    path: '/alumni',
    name: 'Alumni',
    // route level code-splitting
    // this generates a separate chunk (Sites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Sites" */ '../views/Alumni.vue')
  },
  {
    path: '/faculty',
    name: 'Faculty',
    // route level code-splitting
    // this generates a separate chunk (Sites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Sites" */ '../views/Faculty.vue')
  },
  {
    path: '/residentlife',
    name: 'Resident Life',
    // route level code-splitting
    // this generates a separate chunk (Sites.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Sites" */ '../views/Life.vue')
  },
  { path: '/:id', component: Residents },
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})

export default router
