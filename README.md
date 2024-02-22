# Vue 通用模板项目

## 介绍

## 初始化前端项目

- 插件开启
  - Vue Language Features (Volar)
  - TypeScript Vue Plugin (Volar)
  - Vue VSCode Snippets

- 初始化项目
- [我的 github repo](https://github.com/BarryCoding/pk-front-vue3)
  - 提交记录 匹配笔记
- [我的 配置参考](https://github.com/BarryCoding/pk-front-vue3/blob/main/vite.config.ts)
- [vitesse 配置参考](https://github.com/antfu/vitesse/blob/main/vite.config.ts)

```bash
npm create vite@latest

# customize
Need to install the following packages:
create-vite@5.2.0
Ok to proceed? (y) y
✔ Project name: … pk-front-vue3
✔ Select a framework: › Vue
✔ Select a variant: › Customize with create-vue ↗
Need to install the following packages:
create-vue@3.9.2
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Add TypeScript? … Yes
✔ Add JSX Support? … Yes
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit Testing? … Yes
✔ Add an End-to-End Testing Solution? › Cypress
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

# install dep
cd pk-front-vue3
pnpm i

# git manage repo
git init
git add .
git commit -m "init"
# link with my github remote repo
git remote add origin https://github.com/BarryCoding/pk-front-vue3.git
git branch -M main
git push -u origin main
```

- 清理资源文件

```bash
git add .
git commit -m "clear assets"
```

- 安装 开发依赖 [sass](https://sass-lang.com/)
- 安装 依赖 reset-css 
  - 会重置所有浏览器默认样式

```bash
pnpm i -D sass
# vite 会自动处理 sass, sfc 中测试

pnpm i reset-css
# main.js 引入

git add .
git commit -m "add scss & reset-css"
```

## 更新npm依赖的3种策略

1. 自定义 手动更新 `npm i -D package@version`
2. 借助 npm 工具 [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)
3. git平台bot Dependabot

## 页面路由方案

### 自动路由 or 手写路由

[Vue-Router](https://router.vuejs.org/)

### 自动路由 vite-plugin-pages

- recommend unplugin-vue-router

### 自动路由 unplugin-vue-router

- follow [instruction](https://github.com/posva/unplugin-vue-router)
- `pnpm i -D unplugin-vue-router`
- M vite.config.ts
- M router/index.ts
  - 运行项目 会产出 type-router.d.ts 自动处理路由类型
  - M tsconfig 补充 type-router.d.ts 
- M .vscode/settings.json
- U pages/index.vue
  - M .eslintrc.cjs 处理 组件命名

#### 类型问题 4种解决思路

- unplugin-vue-router 导致 TS 错误
  - first: reload or rerun

0. 重载或重启项目
1. 官方 issue
2. 研究官方 example
3. 使用 fit仓库的 CodeSpaces
   1. 2 core 60 hrs free
4. StackOverflow

## CSS框架方案 Tailwind or UnoCSS

官方文档 [UnoCSS](https://unocss.dev/)

- [UnoCSS 集成 VSCode](https://unocss.dev/integrations/vscode)
- [UnoCSS 集成 Vite](https://unocss.dev/integrations/vite)
- [UnoCSS 样式重置](https://unocss.dev/guide/style-reset)
  - 推荐使用 tailwind 重置样式
  - 去除 `reset-css` 包
- [UnoCSS 使用 tailwind preset](https://unocss.dev/presets/wind)

## 自动导入 [AutoImport]((https://github.com/unplugin/unplugin-auto-import)) + VueUse

- 专业处理函数 自动导入

- 安装 `pnpm i -D unplugin-auto-import`
- 配置 vite.config.ts
  - `dts: 'src/auto-imports.d.ts'`
  - `dts: 'src/typed-router.d.ts'`
  - 项目核心类型定义 不放在根目录 而是都放在 src 中, 且不用改 `tsconfig.app.json`
  - 集成 unplugin-vue-router 替换原生 vue-router
  - 集成 VueUse 三方库
    - `pnpm i @vueuse/core`
    - 自定义导入需要的 USE

## 自动组件注册 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)

- 专业处理组件 自动导入

- 安装 `pnpm i -D unplugin-vue-components`
- 配置 vite.config.ts
  - `dts: 'src/components.d.ts'`

## 图标插件 unplugin-icons

- 略过
- tailwind 集成图标

## 图标方案 iconify sets

- UnoCSS [集成图标](https://unocss.dev/presets/icons#icons-preset)
- 安装 `pnpm add -D @iconify/json`
  - 所有图标集 包比较大
- 配置 uno.config.ts
- [iconify图标集](https://icon-sets.iconify.design/)
  - 点图标 选UnoCSS 复制粘贴

## 全局布局 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

- 安装 `pnpm install -D vite-plugin-vue-layouts`
- 配置 vite.config.ts
- 补充 Client Types 到 env.d.ts
  - 等同 tsconfig compilerOptions.types 配置
- 集成 unplugin-vue-router
- 常见问题 layout 未生效 ->> 重启项目 pnpm dev
- 添加 全局路由 渐变效果

## VueMacros shamefully-hoist

- 略过
- VueMacros 部分已经被 Vue3.3官方支持

- 安装集成 [VueMacros](https://vue-macros.sxzz.moe/guide/bundler-integration.html)
- defineProps defineEmits
- [.npmrc](https://github.com/antfu/vitesse/blob/main/.npmrc) 
  - 调整顶层依赖顺序 公共依赖拍得更高 `pnpm i`

## PWA技术 Service Worker介绍

- [学习](https://web.dev/learn/pwa)
- XMind...
- 调试模式 application

### PWA集成 [vite-plugin-pwa](https://github.com/vite-pwa/vite-plugin-pwa)

- Install `pnpm add -D vite-plugin-pwa`
- Usage vite.config.ts
- [文档](https://vite-pwa-org.netlify.app/frameworks/vue.html)
  - 补充 Type declaration 
  -  略 registerType为'prompt' 需 ReloadPrompt 组件
  -  registerType为'autoUpdate' 自动更新 无需 ReloadPrompt 组件
- 查看PWA效果 脚本 build
  - 脚本 preview 运行 dist项目
  - 生产模式中 dist中具备pwa
  - 开发模式中 未具备pwa

## 接口模拟 [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)

- 略过
- 学全栈 就用真实数据库
- Why Not [msw](https://mswjs.io/docs/)

## 发布 github template 项目

- 清理文件和目录
  - 自动生成的类型文件 集中存放 且 git忽略
- pages 404 页面
- layout `[...path].vue` 布局
  - 新布局文件 重启项目后生效

## Vue版本更新 依赖更新策略

- 查看 [Vue更新日志](https://github.com/vuejs/core/blob/main/CHANGELOG.md)
- git 版本控制 新的分支处理 版本升级
  - `git tag` v1.0.0
  - `git checkout -b vue3.4 v1.0.0`
    - 从 tag v.1.0.0 创建 vue3.4 分支
    - 工具 npm-check-updates
      - 先处理 patch 更新
      - 再处理 minor 慎重更新 + 打包测试
      - 最后处理 major 慎重更新 + 打包测试
  - 处理好更新后 合并到 main 分支

## Vue3.3更新了什么

- defineModel 
  - 3.3 experimental
  - 3.4 已经官方支持
- TS泛型组件
- defineSlots
- defineProps
  - vite vue [配置参考](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)
  - 需 解构配置