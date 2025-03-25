import { createWebHistory, createRouter } from "vue-router";
import { routes } from "./routes";
import { getAuth } from "firebase/auth";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = getAuth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/signIn/auth"); // Перенаправляем на страницу входа
  }
  // Если пользователь авторизован и пытается попасть на /auth, перенаправляем на /home
  else if (to.path === "/auth" && isAuthenticated) {
    next("/home");
  }
  // Во всех остальных случаях разрешаем переход (next() без аргументов)
  else {
    next();
  }
});
