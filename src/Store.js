import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Redux/CartReducer";

const Store = configureStore({
    reducer: {
        cart: CartReducer
    }
});

export default Store;