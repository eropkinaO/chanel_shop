
import { configureStore } from "@reduxjs/toolkit";
import chanels from "../Components/ChanelComponents/Chanels";
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
    chanels,
    cart
    }
})