import { createSlice } from '@reduxjs/toolkit'

export const shoppingBasketSlice = createSlice({
    name: 'shoppingBasket',
    initialState: {    
        value: [],
    },

    reducers: {
        addItem: (state, action) => { 
            state.value.push(action.payload);
        },
    }
})

export const { addItem } = shoppingBasketSlice.actions
export default shoppingBasketSlice.reducer