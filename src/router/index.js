import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage')
      },
      {
        path: '/tank',
        name: 'tank',
        component: () => import('@/views/TankManage/TankManage')
      },
      {
        path: '/other1',
        name: 'other1',
        component: () => import('@/views/Other/Other1')
      },
      {
        path: '/other2',
        name: 'other2',
        component: () => import('@/views/Other/Other2')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
