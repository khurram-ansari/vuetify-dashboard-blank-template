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
        name: 'dash.home',
        component: () => import(/* webpackChunkName: "user.home" */ '@/views/UserDashboardHome'),

      },
      {
        path: 'employee',
        name: 'dash.employee',
        component: () => import(/* webpackChunkName: "user.account" */ '@/views/UserDashboardAllEmployees'),

      }
    ]
  },


]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
