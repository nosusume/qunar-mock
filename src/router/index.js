import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage'
import City from '@/components/city/city'
import Detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
