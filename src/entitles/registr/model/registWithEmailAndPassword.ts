import { createUserWithEmailAndPassword } from "firebase/auth";
import type { Auth } from "firebase/auth/web-extension";
import { useRegistrStore } from "../store/registrStore";

export const registrWEandP = (
  auth: Auth,
  email: string,
  password: string,
  retPassword: string,
  store: ReturnType<typeof useRegistrStore>
) => {
  if (password !== retPassword) {
    if (localStorage.getItem("refreshToken")) {
      localStorage.removeItem("refreshToken");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        store.user = user;
        localStorage.setItem("refreshToken", JSON.stringify(user.refreshToken));
      })
      .catch((error) => {
        console.log(error.message);
        store.error = error.code;
      });
  }
};
