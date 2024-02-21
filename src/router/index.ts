import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  // hash mode: createWebHashHistory()
  // history mode: createWebHistory()

  // SEO 需要抓取HTML
  // SPA 不会抓取VueJS运行后的结果
  // SEO 需要SSR
  history: createWebHistory(import.meta.env.BASE_URL)

  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
})

export default router
