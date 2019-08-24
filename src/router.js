import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import CResume from './components/resume';
import CContacts from './components/contacts';
import CAbout from './components/about';
import CAccordion from './components/acccordion';

const routes = [
    {
        name: 'home',
        path: '',
        component: CAccordion
    },
    {
        name: 'resume',
        path: '/resume',
        component: CResume
    },
    {
        name: 'contacts',
        path: '/contacts',
        component: CContacts
    },
    // {
    //     name: 'about',
    //     path: '/about',
    //     component: CAbout
    // },


    // {
    //     name: 'listFromCategory',
    //     path: '/category/:slug',
    //     component: AppListFromCategory,
    //     beforeEnter(from, to, next){
    //         store.commit('data/loadStationsFromCategory', null);
    //         next();
    //     },
    // },
    // {
    //     name: 'search',
    //     path: '/search/:query',
    //     component: AppSearch,
    //     beforeEnter(from, to, next){
    //         store.dispatch('data/loadQuery', {
    //             query: from.params.query
    //         });
    //         next();
    //     },
    // },
    // {
    //     path: '*',
    //     component: AppError
    // }
    // {
    //     name: 'list',
    //     path: '/list',
    //     component: AppStationList,
    //     beforeEnter(from, to, next){
    //         store.dispatch('products/loadItems');
    //         next();
    //     }
    // },
    // {
    //     name: 'products',
    //     path: '/products/:id',
    //     component: Product
    // },

    // {
    //     path: '/checkout',
    //     component: Checkout
    // },

];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
