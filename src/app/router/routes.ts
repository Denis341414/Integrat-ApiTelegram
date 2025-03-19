import Home from "../../pages/home/home.vue";
import Settings from "../../pages/settings/settings.vue";
import SignIn from "../../pages/signIn/signIn.vue";

export const routes = [
  { path: "/signIn", component: SignIn },
  { path: "*", redirect: "/signIn" },
  { path: "/home", component: Home },
  { path: "/", redirect: "/signIn" },
  { path: "/settings", component: Settings },
];
