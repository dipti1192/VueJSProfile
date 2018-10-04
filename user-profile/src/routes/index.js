import Vue from 'vue'
import WishCard from '@/components/WishCard.vue'
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
      name: 'Birthday',
      component: Birthday
    },
    // {
    //   path: '/home',
    //   name: 'Home',
    //   component: HomePage
    // },
    {
      path: '/happy-birthday',
      name: 'happy-birthday',
      component: WishCard
    },
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