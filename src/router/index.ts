import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  // hash mode: createWebHashHistory()
  // history mode: createWebHistory()
  // SEO 需要抓取HTML, SPA 不会抓取VueJS运行后的结果, SEO 需要SSR
  history: createWebHistory(import.meta.env.BASE_URL),

  // You don't need to pass the routes anymore,
  // 'unplugin-vue-router' writes it for you 🤖

  //补充 Layouts
  extendRoutes: (routes) => setupLayouts(routes)
})

export default router
