import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/repair',
    name: 'Repairs',
    // route level code-splitting
    // this generates a separate chunk (repair.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "repair" */ '../views/Repair')
  },
    {
      path: '/get-quote',
      component: () => import(/* webpackChunkName: "quote" */ '../views/GetQuote'),
      children :[
        {
          path: '',
          name: 'Get a Quote',
          // route level code-splitting
          // this generates a separate chunk (quote.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "quote" */ '../components/quotes/ChooseServices'),
        },
        {
          path: 'service-summary',
          name: 'Service Summary',
          // route level code-splitting
          // this generates a separate chunk (summary.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "summary" */ '../components/quotes/ServiceSummary')
        },
        {
          path: 'request-form',
          name: 'Your Request',
          // route level code-splitting
          // this generates a separate chunk (req_form.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "req_form" */ '../components/quotes/RequestForm')
        }
      ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
