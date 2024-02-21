<template>
  <div>Home Page unplugin</div>
  <p ref="target" class="w-100 h-100 bg-slate-100">{{ msg }}</p>
  <p>useMouseInElement {{ x }} {{ y }} {{ isOutside }}</p>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <HelloWorld />
  <UserProfile />
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <div class="i-svg-spinners:12-dots-scale-rotate w-1em h-1em" style="color: red" />
</template>

<script setup lang="ts">
const msg = ref('Hello unplugin-auto-import')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
