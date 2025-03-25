import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import { themes } from "./app/primeVue/primeVue.config";
import { router } from "./app/router";
import { createPinia } from "pinia";
import { firebaseConfig } from "./app/firebase/firebase.config";
import { initializeApp } from "firebase/app";
const pinia = createPinia();
const app = createApp(App);

initializeApp(firebaseConfig);
app.use(pinia);
app.use(router);
app.use(PrimeVue, themes);
app.mount("#app");
