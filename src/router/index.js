import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import test from '@/pages/test'
import index from '@/pages/index'
import document from '@/pages/document'
import start from '@/pages/start'

import setting from '@/pages/setting'
import settinglist from '@/pages/settinglist'
import filedInfo from '@/pages/filedInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/document',
      name: 'document',
      component: document
    }, {
      path: '/start',
      name: 'start',
      component: start
    }, {
      path: '/setting',
      name: 'setting',
      component: setting
    }, {
      path: '/settinglist',
      name: 'settinglist',
      component: settinglist
    }, {
      path: '/filedInfo',
      name: 'filedInfo',
      component: filedInfo
    }
  ]
})
