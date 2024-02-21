import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({ dts: 'src/typed-router.d.ts' }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueJsx(),
    UnoCSS(),

    // 函数自动导入
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // 自动导入核心库
        'vue',
        VueRouterAutoImports,

        // 配置自动导入 三方库函数
        {
          'vue-router/auto': ['useLink'],
          // 常用的 vueuse
          '@vueuse/core': ['useMouseInElement']
        }
      ],
      dts: 'src/auto-imports.d.ts'
    }),

    // 组件自动导入 默认放在 src/components 文件名需具备唯一性
    Components({
      // 配置自动导入 三方库组件
      types: [
        {
          from: 'vue-router/auto',
          names: ['RouterLink', 'RouterView']
        }
      ],
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
