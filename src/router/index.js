import {createRouter, createWebHistory} from 'vue-router';

import Home from '../components/Home.vue'; 
import About from '../components/About.vue'; 
import Data from '../components/Data.vue';
import Error_Page from '../components/404.vue';
import Auth from '../Auth/auth';

const { getToken } = Auth();

// console.log(getToken());

const routes = [
    {
        path: "/", 
        name: 'Home', 
        component: Home, 
        // meta: {auth: false}, 
    },
    {
        path: "/about", 
        name: 'About', 
        component: About,
        beforeEnter: (to, from, next) => {
            // console.log(to);
            // console.log(from);
            // console.log(getToken());
            if(getToken()) {
                next()
            } else {
                next("/")
            }
      }
    },
    {
        path: "/data", 
        name: 'Data', 
        component: Data,
        beforeEnter: (to, from, next) => {
            // console.log(to);
            // console.log(from);
            if(getToken()) {
                next()
            } else {
                next("/")
            }
      }
    },
    {
        path: "/:pathMatch(.*)*", 
        name: 'NotFound', 
        component: Error_Page
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from, next) => {
//     // console.log(to);
//     // console.log(from);
//     // console.log(to.path === '/');
//     if(getToken()) {
//         next(
//             { name: 'Data' }
//         );
//     }
//     // next()
// });

export default router