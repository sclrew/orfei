import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

   // #region RU
    {
      path: '/',
      name: 'Index',
      component: () =>  import("@/views/Index.vue")

    },
    {
      path: '/naive_art',
      name: 'NaiveArt',
      component: () =>  import("@/views/NaiveArt.vue")

    },

    
    {
      path: '/error',
      name: 'Error',
      component: () =>  import("@/views/Error.vue")

    },
    { path: "/:catchAll(.*)", redirect: "/error" },
  ]
})

export default router
