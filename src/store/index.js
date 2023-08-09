import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import baru from "./modules/baru";
import product from "./modules/product";
import category from "./modules/category";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        baru,
        product,
        category,
    }
});

export default store;