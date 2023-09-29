import { createSlice } from "@reduxjs/toolkit";


const dataSlice=createSlice({
    name:"data",
    initialState:{
        AllProducts:[],
        filteredProducts:[]
    },
    reducers:{
        dataLoad:(state,action)=>{
            state.AllProducts=action.payload
            state.filteredProducts=action.payload
        }
    }

})


export const {dataLoad} =dataSlice.actions
export default dataSlice.reducer