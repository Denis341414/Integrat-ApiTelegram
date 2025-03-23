<script setup lang="ts">
import { Form } from "@primevue/forms";
import { Button, InputText } from "primevue";
</script>
<template>
  <div class="cont flex gap-10">
    <Form @submit="">
      <div class="p-field flex flex-col justify-center">
        <label for="email">Email</label>
        <InputText type="email" class="email" />
      </div>
      <div class="p-field flex flex-col">
        <label for="email">Пароль</label>
        <InputText type="password" class="password" />
      </div>
    </Form>
    <div class="buttons flex gap-3">
      <Button class="p-button w-25" label="Submit" />
      <Button class="p-button w-25" label="Submit" />
    </div>
  </div>
</template>

<style scoped>
.cont {
  width: 30vw;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(187, 187, 187);
  border-radius: 2em;
  box-shadow: 1px 1px 10px rgb(204, 204, 204);
}
</style>
