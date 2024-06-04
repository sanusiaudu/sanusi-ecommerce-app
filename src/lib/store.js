
import { configureStore } from "@reduxjs/toolkit";
import slideReducer from './ApiSlice';
import usersReducer from './UserSlice';
import productsReducer from './ProductSlice';
import cartReducer from './CartSlice';
import wishlistReducer from "./WishListSlice";

const store = configureStore({
    reducer: {
        slider: slideReducer,
        users: usersReducer,
        products: productsReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    }
});

export default store;

