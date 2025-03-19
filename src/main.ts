import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { PrimeVue } from "@primevue/core";
import { themes } from "./app/primeVue/primeVue.config";
import { router } from "./app/router";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, themes);
app.mount("#app");
