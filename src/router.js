import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timer from './views/Timer.vue'
import Timer2 from './views/Timer2.vue'
import Maps from './views/Map.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timer',
      name: 'timer',
      component: Timer
    },
    {
      path: '/timer2',
      name: 'timer2',
      component: Timer2
    },
    {
      path: '/map',
      name: 'maps',
      component: Maps
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
