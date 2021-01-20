import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '../views/PageHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/forum/:id',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "forum" */ '../views/PageForum.vue'),
    props: true
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hreadshow" */ '../views/PageThreadShow.vue'),
    props: true
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
