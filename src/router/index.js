import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Index.vue')
      },
      {
        name: 'spotSearch',
        path: 'spotSearch/:queryString',
        component: () => import('../views/SpotSearch.vue')
      },
      {
        name: 'foodSearch',
        path: 'foodSearch/:queryString',
        component: () => import('../views/FoodSearch.vue')
      },
      {
        name: 'eventSearch',
        path: 'eventSearch/:queryString',
        component: () => import('../views/EventSearch.vue')
      },
      {
        name: 'spotDetail',
        path: 'spot/:Id',
        component: () => import('../views/SpotDetail.vue')
      },
      {
        name: 'foodDetail',
        path: 'food/:Id',
        component: () => import('../views/FoodDetail.vue')
      },
      {
        name: 'eventDetail',
        path: 'event/:Id',
        component: () => import('../views/EventDetail.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from, next) => {
  // console.log(to, from, next)
  window.scrollTo(0, 0)
})

export default router
