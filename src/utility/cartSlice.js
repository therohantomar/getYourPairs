import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        Products:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            const index=state.Products.findIndex(product=>product.id===action.payload.id)
            console.log(index)
            if(index===0){
               state.Products[index].quantity+=1
            }
            else{
                let newProduct={...action.payload, quantity:1}
                const filteredProducts=[...state.Products,newProduct]
                state.Products=filteredProducts

            }
        },
        removeFromcart:(state,action)=>{
            console.log(action.payload.id)
            let filterCopy=state.Products.filter(product=>product.id!==action.payload.id)
             state.Products=filterCopy
        },
        increment:(state,action)=>{
            const index=state.Products.findIndex(product=>product.id===action.payload)
            state.Products[index].quantity+=1
        },
        decrement:(state,action)=>{
            const index=state.Products.findIndex(product=>product.id===action.payload)
            state.Products[index].quantity=state.Products[index].quantity<=1?1:state.Products[index].quantity-1
        }
    }
})

export const {addToCart, removeFromcart, increment, decrement}=cartSlice.actions
export default cartSlice.reducer