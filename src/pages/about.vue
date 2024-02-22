<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline">This is an about page</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<script setup lang="ts"></script>

<style></style>
