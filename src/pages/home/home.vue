<script setup lang="ts">
import CardComponent from "../../widgets/card/cardComponent.vue";
import MenuBarComponent from "../../widgets/menuBarComponent/menuBarComponent.vue";
</script>

<template>
  <div class="cont w-full h-full flex flex-col gap-5">
    <MenuBarComponent class="w-full" />
    <div class="title">Interestings posts</div>
    <div class="cont-card flex items-start w-full h-13/14">
      <CardComponent />
    </div>
  </div>
</template>

<style scoped>
.cont-card {
  padding: 1em;
}
.title {
  margin-left: 1em;
  font-size: 3em;
}
</style>
