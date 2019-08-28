import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/components/homepage') // 按需加载
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/components/city/city')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/components/detail/detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0, y: 0
    }
  }
})
