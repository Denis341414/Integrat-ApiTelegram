<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container max-w-full">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(143, 143, 143);
}
</style>
