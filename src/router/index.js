import { createWebHistory, createRouter, } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Baru from "../views/Baru.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue"
import store from "../store";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        name: "User",
        component: User
    },
    {
        path: "/quran",
        name: "Quran",
        component: Baru
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct
    },
    {
        path: "/category",
        name: "Category",
        component: Category
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});
export default router;