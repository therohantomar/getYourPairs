import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";

const store=configureStore({
    reducer:{
        sidebar:sidebarSlice,
        data:dataSlice,
        cart:cartSlice
    }
})


export default store