import Vue from "vue"
import VueRouter from "vue-router"


const Home = () => import("@/views/home/Home")
const Category = () => import("@/views/category/Category")
const Profile = () => import("@/views/profile/Profile")
const Cart = () => import("@/views/cart/Cart")


// 安装插件
Vue.use(VueRouter)


const routes = [{
    path: '',
    redirct: "/home"
}, {
    path: '/home',
    component: Home
}, {
    path: '/cart',
    component: Cart
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/category',
    component: Category
}

]

//创建路由对象
const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router