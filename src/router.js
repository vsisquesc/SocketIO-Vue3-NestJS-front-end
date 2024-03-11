
import AddPage from './pages/Add.vue'
import RemovePage from './pages/Remove.vue' 
import UpdatePage from './pages/Update.vue'

import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: { path: "/AddPage" },
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/AddPage'
    },
    {
        name: 'RemovePage',
        component: RemovePage,
        path: '/RemovePage'
    },
    {
 
        name: 'UpdatePage',
        component: UpdatePage,
        path: '/UpdatePage'
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router