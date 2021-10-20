import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import shoppingbasket from './shoppingbasketSlice'

export default configureStore({  
    reducer: {    
        products: productsReducer,
        shoppingbasket: shoppingbasket,
    },
})