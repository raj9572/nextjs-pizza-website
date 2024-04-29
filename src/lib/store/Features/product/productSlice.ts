import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface productState {
  items: string[]
}

const initialState: productState = {
  items: [],
}

export const productSlice = createSlice({
  name: 'product',
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
export const { add } = productSlice.actions

export default productSlice.reducer