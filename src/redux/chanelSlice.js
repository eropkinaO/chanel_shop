import { createSlice } from "@reduxjs/toolkit";


export const chanelSlice = createSlice({
    name: "chanels",
    initialState: {
        selectedCategory: "Fragnance"
    },
    reducers: {
           filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
           }
    }
})

export const getSelectedCategory = state => state.chanels.selectedCategory;
export const {filterCategory} = chanelSlice.actions;
export default chanelSlice.reducer;