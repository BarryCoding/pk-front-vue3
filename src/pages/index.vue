<template>
  <div>Home Page unplugin</div>
  <p ref="target" class="w-100 h-100 bg-slate-100">{{ msg }}</p>
  <p>useMouseInElement {{ x }} {{ y }} {{ isOutside }}</p>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <HelloWorld />
  <UserProfile />
</template>

<script setup lang="ts">
const msg = ref('Hello unplugin-auto-import')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
