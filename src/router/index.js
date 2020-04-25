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
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/usercenter/UserLogin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/usercenter/UserRegister.vue')
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: () => import('../components/common/ImageCarousel.vue')
  },
  {
    path: '/listNews',
    name: 'ListNews',
    component: () => import('../views/newsCenter/listNews.vue')
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: () => import('../views/newsCenter/newsDetail.vue')
  },
  {
    path: '/jointRecruit',
    name: 'JointRecruit',
    component: () => import('../views/recruitCenter/jointRecruit.vue')
  },
  {
    path: '/jobFair',
    name: 'JobFair',
    component: () => import('../views/recruitCenter/jobFair.vue')
  },
  {
    path: '/companyTrain',
    name: 'CompanyTrain',
    component: () => import('../views/trainCenter/companyTrain.vue')
  },
  {
    path: '/spaceInfo',
    name: 'SpaceInfo',
    component: () => import('../views/spaceManage/spaceInfo.vue')
  },
  {
    path: '/practiseJob',
    name: 'PractiseJob',
    component: () => import('../views/practiseCenter/practiseJob.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
