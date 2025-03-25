import { createUserWithEmailAndPassword } from "firebase/auth";
import type { Auth } from "firebase/auth/web-extension";
import { useRegistrStore } from "../store/registrStore";
import { useRouter } from "vue-router";

export const registrWEandP = (
  auth: Auth,
  email: string,
  password: string,
  retPassword: string,
  store: ReturnType<typeof useRegistrStore>,
  router: ReturnType<typeof useRouter>
) => {
  console.log(1);
  if (password === retPassword) {
    if (localStorage.getItem("refreshToken")) {
      localStorage.removeItem("refreshToken");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        store.user = user;
        console.log(user);
        localStorage.setItem("refreshToken", user.refreshToken);
        setTimeout(() => {
          router.push("/home");
        }, 2000);
        store.userToken = user.refreshToken;
      })
      .catch((error) => {
        console.log(error.message);
        store.error = error.code;
      });
  }
};
