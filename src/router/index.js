import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDashboardIndex from "@/components/UserDashboardIndex.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: UserDashboardIndex,
    children: [
      {
        path: '',
        name: 'user.home',
        component: () => import(/* webpackChunkName: "user.home" */ '@/views/UserDashboardHome'),

      },
      {
        path: 'account',
        name: 'user.account',
        component: () => import(/* webpackChunkName: "user.account" */ '@/views/UserDashboardAccount'),

      }
    ]
  },


]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
