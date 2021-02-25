import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('../pages/main/Index.vue')
    },
    {
        path:'/adminLogin',
        name:'AdminLogin',
        component:() => import('../pages/admin/AdminLogin.vue')
    },
    {
        path:'/adminIndex',
        name:'AdminIndex',
        component:() => import('../pages/admin/AdminIndex.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router