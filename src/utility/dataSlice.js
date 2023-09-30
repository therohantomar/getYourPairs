import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    Products: {
      AllProducts: [],
      filteredProducts: [],
    },
  },
  reducers: {
    dataLoad: (state, action) => {
      state.Products.AllProducts = action.payload;
      state.Products.filteredProducts = action.payload;
    },
    categoryChanged: (state, action) => {

      if (action.payload === "all") {
        state.Products.filteredProducts = state.Products.AllProducts;
      } else {
        const filterBycategory = state.Products.filteredProducts.filter((product) => product.category === action.payload);
        state.Products.filteredProducts = filterBycategory;
      }
    },
    companyChanged: (state, action) => {
      let filterCopy = state.Products.filteredProducts.filter((product) => product.company === action.payload);
      state.Products.filteredProducts = filterCopy;
    },
    priceChanged:(state,action)=>{

        if(action.payload===">10000"){
            let filterCopy=state.Products.filteredProducts.filter(product=>product.newPrice>10000)
            state.Products.filteredProducts=filterCopy

        }
        else if(action.payload==="<10000"){
            let filterCopy=state.Products.filteredProducts.filter(product=>product.newPrice<10000)
            state.Products.filteredProducts=filterCopy

        }
        else if(action.payload==="<5000"){
            let filterCopy=state.Products.filteredProducts.filter(product=>product.newPrice<5000)
            state.Products.filteredProducts=filterCopy

        }
        else if(action.payload===">5000"){
            let filterCopy=state.Products.filteredProducts.filter(product=>product.newPrice>5000)
            state.Products.filteredProducts=filterCopy
        }
        else{
            state.Products.AllProductsProducts=state.Products.AllProducts
        }

    },
    triggerSearch:(state,action)=>{
        if(action.payload!==""){
            const searchResult=state.Products.AllProducts.filter(product=>product.title.toLowerCase()===action.payload.toLowerCase())
            state.Products.filteredProducts=searchResult

        }
       
    }
  },
});

export const { dataLoad, categoryChanged, companyChanged, priceChanged, triggerSearch } = dataSlice.actions;
export default dataSlice.reducer;
