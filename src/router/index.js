import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboardRoutes from './dashboard.routes'

Vue.use(VueRouter)

const routes = [
  {
    ...dashboardRoutes
  },


]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
