import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: 'products',  
    initialState: {    
        value: [
            {
                id: 1,
                name: "Product 1",
                description: "This is a Test 1",
                picture_url: "https://m.media-amazon.com/images/I/41SW2DUTS2L._AC_SX450_.jpg",
                prize_euro: 12
            },
            {
                id: 2,
                name: "Product 2",
                description: "This is a Test 2",
                picture_url: "https://m.media-amazon.com/images/I/41SW2DUTS2L._AC_SX450_.jpg",
                prize_euro: 45
            },
            {
                id: 3,
                name: "Product 3",
                description: "This is a Test 3",
                picture_url: "https://m.media-amazon.com/images/I/41SW2DUTS2L._AC_SX450_.jpg",
                prize_euro: 23
            },
            {
                id: 4,
                name: "Product 4",
                description: "This is a Test 4",
                picture_url: "https://m.media-amazon.com/images/I/41SW2DUTS2L._AC_SX450_.jpg",
                prize_euro: 56
            }
        ] 
    },

    reducers: {}
})

export default productsSlice.reducer