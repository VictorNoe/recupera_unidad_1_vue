import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: {
            render(h) {
                return h('router-view')
            },
        },
        children: [
            {
                path: '/home',
                name: 'home',
                props: true,
                component: () => import('../components/Home.vue')
            },
            {
                path: '/register',
                name: 'register',
                props: true,
                component: () => import('../components/Register.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: "history", routes
})

export default router;