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
    path: '/blog',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (repair.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Blog')
  },
  {
    path: '/garage',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (repair.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Garage')
  },
  {
    path: '/account',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (repair.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Account')
  },
  {
    path: '/service-history',
    name: '',
    // route level code-splitting
    // this generates a separate chunk (repair.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ServiceHistory')
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
      },
      {
        path: 'your-estimate',
        name: 'Service Summary',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/quotes/YourEstimate')
      },
      {
        path: 'schedule-appointment',
        name: 'Schedule Appointment',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/quotes/ScheduleAppointment')
      },
      {
        path: 'arrival',
        name: 'Schedule Appointment',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/quotes/Arrival')
      },
      {
        path: 'confirmation',
        name: '',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/quotes/Confirmation')
      },
      {
        path: '/sign-in',
        name: 'Sign in',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/signIn/SignIn')
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
        // route level code-splitting
        // this generates a separate chunk (req_form.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "req_form" */ '../components/forgotPassword/ForgotPassword')
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
