import type { App } from 'vue'
import type { UserModule } from './types'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

// Setup route
// https://router.vuejs.org/zh/guide/
export const install: UserModule = (app: App<Element>) => {
  const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
  })

  app.use(router)
}
