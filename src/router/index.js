import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Test Runner Home'
    }
  },
  {
    path: '/start/:id',
    name: 'Start',
    component: Start,
    meta: {
      title: 'Start Collection Page'
    }
  },
  {
    path: '/test/:id',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (test.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "test" */ '../views/TestRunner.vue'),
    meta: {
      title: 'Test Runner'
    }
  }
]

// Make this work when deployed to a /testrunner/ folder in production
const publicPath = process.env.NODE_ENV === 'production'
    ? '/testrunner/'
    : '/'

const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Test Runner Home'
  next()
});

export default router
