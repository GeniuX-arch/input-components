import { createRouter, createWebHistory } from 'vue-router';

import SobreGeniux from '@/views/SobreGeniux.vue';
import MasProyectos from '@/views/MasProyectos.vue';
import Donaciones from '@/views/Donaciones.vue';
import Main from '@/views/Main.vue';

const routes = [
  { path: '/sobre-geniux', component: SobreGeniux },
  { path: '/mas-proyectos', component: MasProyectos },
  { path: '/donaciones', component: Donaciones },
  { path: '/', component: Main },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
