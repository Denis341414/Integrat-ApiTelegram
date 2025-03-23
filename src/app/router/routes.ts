import Auth from "../../entitles/auth/auth.vue";
import Registr from "../../entitles/registr/registr.vue";
import Home from "../../pages/home/home.vue";
import Settings from "../../pages/settings/settings.vue";
import SignIn from "../../pages/signIn/signIn.vue";

export const routes = [
  {
    path: "/signIn",
    component: SignIn,
    children: [
      { path: "auth", component: Auth },
      { path: "registr", component: Registr },
      { path: "", redirect: "/signIn/auth" },
    ],
  },
  { path: "/home", component: Home },
  { path: "/", redirect: "/signIn" },
  { path: "/settings", component: Settings },
];
