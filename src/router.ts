import { createMemoryHistory, createRouter } from 'vue-router';

import DetailsPage from './pages/DetailsPage.vue';
import SearchPage from './pages/SearchPage.vue';

export const paths = {
  search: '/',
  details: 'details',
};

const routes = [
  {
    path: paths.search,
    component: SearchPage,
    children: [{ path: paths.details + ':id', component: DetailsPage }],
    meta: { transition: 'slide-right' },
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
