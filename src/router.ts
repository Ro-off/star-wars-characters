import { createMemoryHistory, createRouter } from 'vue-router';

import AppView from './pages/SearchPage.vue';

const routes = [
  {
    path: '/',
    component: AppView,
  },
  //   { path: '/about', component: AboutView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
