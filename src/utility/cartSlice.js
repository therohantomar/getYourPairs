import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        Products:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const index=state.Products.findIndex(product=>product.id===action.payload.id)
            if(index===0){
               state.Products[index].quantity+=1
            }
            else{
                let newProduct={...action.payload, quantity:1}
                const filteredProducts=[...state.Products,newProduct]
                state.Products=filteredProducts

            }
        }
    }
})

export const {addToCart}=cartSlice.actions
export default cartSlice.reducer