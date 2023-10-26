import Vue from 'vue'
import VueRouter from 'vue-router'

const MiuiHomeR = () => import('../miuihomer/MiuiHomeR.vue')

const Donate = () => import('../md/donate.vue')

const QQchannel = () => import('../md/QQchannel.vue')



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
    path: '/dist/donate',
    component: Donate,
    meta:{
      title: '赞助'
    }
  },
  {
    path: '/dist/qqchannel',
    component: QQchannel,
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
