import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';
import AboutPage from '../views/AboutPage.vue';
import LeaderboardPage from '../views/LeaderboardPage.vue';
import ContactPage from '../views/ContactPage.vue';
import UserPage from '../views/UserPage.vue';

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage    
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: LeaderboardPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/user/:id',
        name: 'UserDetail',
        component: UserPage
    }
]


export const router = createRouter({
    history: createWebHistory(),
    routes
})