import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'data/routes'

Vue.use(VueRouter)

export default new VueRouter({
  history: false,
  routes: routes
})
