import { RouteRecordRaw } from 'vue-router'
import MainLayout from 'src/layouts/mainLayout/MainLayout.vue'

const Apartments = () => import('pages/Apartments/Apartments.vue')
const Index = () => import('pages/index/Index.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [{ path: '', component: Index }]
  },
  {
    path: '/apartments',
    component: MainLayout,
    children: [{ path: '', component: Apartments }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
