import Vue from 'vue'
import Home from '@/components/HomePage.vue'
import Birthday from '@/components/Birthday.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import Photography from '@/components/Photography.vue'
import Friends from '@/components/Friends.vue'
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
      path: '/happy-birthday',
      name: 'Birthday',
      component: Birthday
    },
    // {
    //   path: '/about',
    //   name: 'HeaderBar',
    //   component: HeaderBar
    // },
    {
      path: '/photos',
      name: 'Photography',
      component: Photography
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    }
  ],
  mode:'history',
})