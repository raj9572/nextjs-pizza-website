import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: string[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
         state.items.push(action.payload)
    },
    decrement: (state) => {
     
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer