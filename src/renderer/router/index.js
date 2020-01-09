import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/Index').default,
      children: [{
        path: '/music',
        name: 'music',
        component: require('@/components/music').default
      },{
        path: '/video',
        name: 'video',
        component: require('@/components/video').default
      }]
    },
    {
      path: '*',
      redirect: '/music'
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/Login').default
    }
  ]
})
