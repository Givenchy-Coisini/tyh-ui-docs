import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/hone.vue'),
      },
      {
        path: '/component',
        redirect: '/component/install',
        component: () => import('@/views/component.vue'),
        children: [
          {
            path: '/component/install',
            component: () => import('@/views/TyhUi/install.vue')
          },
          {
            path: '/component/button',
            component: () => import('@/views/TyhUi/button.vue')
          },
          {
            path: '/component/list',
            component: () => import('@/views/TyhUi/list.vue')
          },
          {
            path: '/component/card',
            component: () => import('@/views/TyhUi/card.vue')
          },
          {
            path: '/component/tag',
            component: () => import('@/views/TyhUi/tag.vue')
          },
          {
            path: '/component/link',
            component: () => import('@/views/TyhUi/link.vue')
          },
          {
            path: '/component/input',
            component: () => import('@/views/TyhUi/input.vue')
          },
          {
            path: '/component/menu',
            component: () => import('@/views/TyhUi/menu.vue')
          },
          {
            path: '/component/division',
            component: () => import('@/views/TyhUi/division.vue')
          },
          {
            path: '/component/icon',
            component: () => import('@/views/TyhUi/icon.vue')
          },
          {
            path: '/component/crumbs',
            component: () => import('@/views/TyhUi/crumbs.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
