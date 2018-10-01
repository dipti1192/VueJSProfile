import Vue from 'vue'
import Home from '@/components/HomePage.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HeaderBar',
      component: HeaderBar
    }
  ],
  mode:'history',
})