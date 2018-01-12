import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pages/pageIndex'
import pageProject from '@/components/pages/pageProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageIndex
    }, {
      path: '/project/:id',
      name: 'project',
      component: pageProject
    }
  ]
})
