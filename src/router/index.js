import {createRouter, createWebHistory} from 'vue-router';

import Home from '../components/Home.vue'; 
import About from '../components/About.vue'; 
import Data from '../components/Data.vue';

const routes = [
    {path: "/", name: 'Home', component: Home},
    {path: "/about", name: 'About', component: About},
    {path: "/data", name: 'Data', component: Data},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router