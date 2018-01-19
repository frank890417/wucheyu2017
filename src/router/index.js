import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pages/pageIndex'
import pageProject from '@/components/pages/pageProject'
import pageProjectEdit from '@/components/pages/pageProjectEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: pageIndex
    }, {
      path: '/project/edit',
      name: 'project_edit',
      component: pageProjectEdit
    }, {
      path: '/project/:id',
      name: 'project',
      component: pageProject
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      }, 500)
    })

  }
})
