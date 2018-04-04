import Vue from 'vue'
import Router from 'vue-router'
// 在开发环境下不使用路由懒加载，路由懒加载会让热更新变得很卡顿
const _import = require('./_import_' + process.env.NODE_ENV)
console.log(_import('index'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: _import('index')
      // component: _import('src/views/index')
      // component: () => import('@/views/index.vue')
      // component: HelloWorld
    },
    {
      path: '/t',
      name: 'test',
      component: _import('test')
      // component: _import('src/views/index')
      // component: () => import('@/views/index.vue')
      // component: HelloWorld
    }
  ]
})
