import type { Auth } from "firebase/auth/cordova";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { validateEmailAndPassword } from "../../../shared/model/validate-error";
import { LocalStorageEnum } from "../../../shared/consts";
export const signWEandP = (
  auth: Auth,
  email: string,
  password: string,
  store: ReturnType<typeof useAuthStore>,
  router: ReturnType<typeof useRouter>
) => {
  if (localStorage.getItem(LocalStorageEnum.REFRESH_TOKEN)) {
    localStorage.removeItem(LocalStorageEnum.REFRESH_TOKEN);
  }

  store.error = "";
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log(user.refreshToken);
      store.user = user;
      localStorage.setItem(LocalStorageEnum.REFRESH_TOKEN, user.refreshToken);
      setTimeout(() => {
        router.push("/home");
      }, 2000);
      store.userToken = user.refreshToken;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      store.error = validateEmailAndPassword(errorCode);
    });
};
