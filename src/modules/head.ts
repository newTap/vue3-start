import type { App } from 'vue'
import type { UserModule } from './types'
import { createHead } from '@vueuse/head'

// Setup vueuse/head
// https://github.com/vueuse/head#readme

export const install: UserModule = (app: App<Element>) => {
  const head = createHead()
  app.use(head)
}
