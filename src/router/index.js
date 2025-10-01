import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/search",
      name: "search",
      component: () => import("../components/SearchFilm.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/LoginForm.vue"),
    },
    {
      path: "/",
      redirect: "/search",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/search",
    },
  ]
})

export default router
