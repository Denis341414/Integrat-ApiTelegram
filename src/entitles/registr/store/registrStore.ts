import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrStore = defineStore("registrStore", () => {
  const email = ref("");
  const password = ref("");
  const retPassword = ref("");
  const user = ref();
  const isLoggedIn = ref(false);
  const userToken = ref("");
  const error = ref("");

  return {
    email,
    password,
    isLoggedIn,
    user,
    retPassword,
    userToken,
    error,
  };
});
