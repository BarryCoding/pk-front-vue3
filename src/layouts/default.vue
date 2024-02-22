<template>
  <div>
    <div class="flex gap-4 c-green-500">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
