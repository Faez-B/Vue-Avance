import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router"; // router => Fichier js => pas besoin d'écrire @/router.js => juste @/router

createApp(App).use(router).mount("#app");
