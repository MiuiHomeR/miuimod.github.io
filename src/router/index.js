import Vue from 'vue'
import VueRouter from 'vue-router'
import MiuiHomeR from '../miuihomer/MiuiHomeR.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MiuiHomeR,
    meta:{
      title: 'MiuiHomeR'
    }
  },
  {
    path: '/donate',
    component: () => import('../md/donate.vue'),
    meta:{
      title: '赞助'
    }
  },
  {
    path: '/qqchannel',
    component: () => import('../md/QQchannel.vue'),
    meta:{
      title: 'QQ频道'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
