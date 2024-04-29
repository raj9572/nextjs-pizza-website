import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './Features/cart/cartSlice'
import productReducer from './Features/product/productSlice'
// donot do this in next js

export const makeStore = () =>{
    return configureStore({
        reducer: {
          cart:cartReducer,
          product:productReducer
        },
      })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']