import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './views/index.vue'
import Blog from './views/Blog.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/blog',
        component: Blog
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
