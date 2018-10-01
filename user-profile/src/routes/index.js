import Vue from 'vue'
import Home from '@/components/HomePage.vue'
import HelloWorld from '@/components/HelloWorld.vue'
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
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode:'history',
})