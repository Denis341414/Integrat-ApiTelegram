<script setup lang="ts">
import { Form } from "@primevue/forms";
import { Button, InputText } from "primevue";
import { useAuthStore } from "./store/authStore";
import { signWEandP } from "./model/signWithEmailAndPassword";
import { getAuth } from "firebase/auth/web-extension";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const auth = getAuth();
</script>
<template>
  <div class="cont flex gap-10">
    <Form @submit="">
      <div class="p-field flex flex-col justify-center">
        <label for="email">Email</label>
        <InputText v-model="authStore.email" type="email" class="email" />
      </div>
      <div class="p-field flex flex-col">
        <label for="email">Пароль</label>
        <InputText
          v-model="authStore.password"
          type="password"
          class="password"
        />
      </div>
    </Form>
    <div class="buttons flex flex-col justify-center items-center gap-3">
      <Button
        class="p-button w-auto"
        label="Войти"
        @click="
          signWEandP(
            auth,
            authStore.email,
            authStore.password,
            authStore,
            router
          )
        "
      />
      <router-link to="registr">
        <Button class="p-button w-auto" label="Зарегистрироваться" />
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
