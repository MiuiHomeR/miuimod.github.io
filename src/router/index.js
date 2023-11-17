import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'Home' */ '../miuihomer/MiuiHomeR.vue'),
    meta:{
      title: 'MiuiHomeR'
    }
  },
  {
    path: '/donate',
    component: () => import(/* webpackChunkName: 'donate' */ '../md/donate.vue'),
    meta:{
      title: '赞助'
    }
  },
  {
    path: '/qqchannel',
    component: () => import(/* webpackChunkName: 'qqchannel' */ '../md/QQchannel.vue'),
    meta:{
      title: 'QQ频道'
    }
  },
]

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
