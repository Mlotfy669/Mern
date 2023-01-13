import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: {
            cart: [],
            wishlist: [],
            compare:[]
        }
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.value.cart.push(action.payload)
            localStorage.setItem("cartItems",JSON.stringify(state.value.cart))
        },
        addItemToWishlist: (state, action) => {
            state.value.wishlist.push(action.payload)
            localStorage.setItem("wishlistItems",JSON.stringify(state.value.wishlist))
        },
        addItemToCompare: (state, action) => {
            state.value.compare.push(action.payload)
            localStorage.setItem("compareItems",JSON.stringify(state.value.compare))
        },
        deleteItemCart: (state, action) => {
            state.value.cart = state.value.cart.filter((user) => user.id !== action.payload.id)
        },
        deleteItemWishlist: (state, action) => {
            state.value.wishlist = state.value.wishlist.filter((user) => user.id !== action.payload.id)
        },
        deleteItemCompare: (state, action) => {
            state.value.compare = state.value.compare.filter((user) => user.id !== action.payload.id)
        },
    }
})
export const { addItemToCart ,addItemToWishlist ,addItemToCompare ,deleteItemCart,deleteItemWishlist,deleteItemCompare} = productsSlice.actions
export default productsSlice.reducer