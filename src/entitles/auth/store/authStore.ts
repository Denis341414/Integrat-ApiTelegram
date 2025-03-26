import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);
  const user = ref();
  const userToken = ref("");
  const password = ref("");
  const email = ref("");
  const error = ref("");

  return { isLoggedIn, user, userToken, password, email, error };
});
