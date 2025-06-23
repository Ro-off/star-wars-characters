import { createApp } from "vue";
import "./style.css";
import App from "./pages/App.vue";
import { router } from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
