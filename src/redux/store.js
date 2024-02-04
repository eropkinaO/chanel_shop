
import { configureStore } from "@reduxjs/toolkit";
import chanels from "./chanelSlice";
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
    chanels,
    cart
    }
})