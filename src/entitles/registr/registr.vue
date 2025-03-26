<script setup lang="ts">
import { Form } from "@primevue/forms";
import { Button, InputText, Message } from "primevue";
import { useRegistrStore } from "./store/registrStore";
import { registrWEandP } from "./model/registWithEmailAndPassword";
import { getAuth } from "firebase/auth";
import { useRouter } from "vue-router";

const registrStore = useRegistrStore();
const auth = getAuth();
const router = useRouter();

auth.onAuthStateChanged((firebaseUser) => {
  registrStore.user = firebaseUser;
});

const test = () =>
  registrWEandP(
    auth,
    registrStore.email,
    registrStore.password,
    registrStore.retPassword,
    registrStore,
    router
  );
</script>

<template>
  <div class="cont flex gap-10 h-[30em] max-h-max min-h-max">
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
    <Message v-if="registrStore.error" severity="error">{{
      registrStore.error
    }}</Message>
    <div class="buttons flex flex-col justify-center items-center gap-3">
      <Button
        class="p-button w-auto"
        label="Зарегистрироваться"
        @click="test"
      />
      <router-link to="/auth">
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
