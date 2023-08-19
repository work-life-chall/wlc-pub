// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Guide',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "guide" */ '@/views/Guide.vue'),
      },
      {
        path: 'main',
        name: 'Main',
        component: () => import(/* webpackChunkName: "main" */ '@/views/main/USER_MAIN_01.vue'),
      },
      {
        path: 'chal/list',
        name: 'ChallengeList',
        component: () => import(/* webpackChunkName: "challenge-list" */ '@/views/challenge/USER_CHAL_01.vue'),
      },
      {
        //path: 'chal/list/:chalId',
        path: 'chal/detail',
        name: 'ChallengeDetail',
        component: () => import(/* webpackChunkName: "challenge-detail" */ '@/views/challenge/USER_CHAL_02.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
