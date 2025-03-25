<script setup lang="ts">
import { Form } from "@primevue/forms";
import { Button, InputText } from "primevue";
import { useRegistrStore } from "./store/registrStore";

const registrStore = useRegistrStore();
</script>
<template>
  <div class="cont flex gap-10">
    <Form @submit="">
      <div class="p-field flex flex-col justify-center">
        <label for="email">Email</label>
        <InputText v-model="registrStore.email" type="email" class="email" />
      </div>
      <div class="p-field flex flex-col">
        <label for="email">Пароль</label>
        <InputText
          v-model="registrStore.password"
          type="password"
          class="password"
        />
      </div>
      <div class="p-field flex flex-col">
        <label for="email">Повторите пароль</label>
        <InputText
          v-model="registrStore.retPassword"
          type="password"
          class="password"
        />
      </div>
    </Form>
    <div class="buttons flex flex-col justify-center items-center gap-3">
      <Button class="p-button w-auto" label="Зарегистрироваться" />
      <router-link to="auth">
        <Button class="p-button w-auto" label="Войти" />
      </router-link>
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
