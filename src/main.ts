import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './pages/SearchPage.vue';
import { router } from './router';
import './style.css';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
