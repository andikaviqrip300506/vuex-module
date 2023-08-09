import { createWebHistory, createRouter, } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Baru from "../views/Baru.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";


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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;