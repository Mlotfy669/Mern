import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("get/products", async (thunkAPI) => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})



const initialState = {
    products: [],
    loading: false,
    error: null,
    value: {
        cart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        wishlist: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
        compare: localStorage.getItem('compareItems') ? JSON.parse(localStorage.getItem('compareItems')) : []
    }
}




export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.value.cart.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.value.cart))
        },
        addItemToWishlist: (state, action) => {
            state.value.wishlist.push(action.payload)
            localStorage.setItem("wishlistItems", JSON.stringify(state.value.wishlist))
        },
        addItemToCompare: (state, action) => {
            state.value.compare.push(action.payload)
            localStorage.setItem("compareItems", JSON.stringify(state.value.compare))
        },
        deleteItemCart: (state, action) => {
            state.value.cart = state.value.cart.filter((user) => user.id !== action.payload.id)
            localStorage.setItem("cartItems", JSON.stringify(state.value.cart))
        },
        deleteItemWishlist: (state, action) => {
            state.value.wishlist = state.value.wishlist.filter((user) => user.id !== action.payload.id)
            localStorage.setItem("wishlistItems", JSON.stringify(state.value.wishlist))
        },
        deleteItemCompare: (state, action) => {
            state.value.compare = state.value.compare.filter((user) => user.id !== action.payload.id)
            localStorage.setItem("compareItems", JSON.stringify(state.value.compare))
        },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
export const { addItemToCart, addItemToWishlist, addItemToCompare, deleteItemCart, deleteItemWishlist, deleteItemCompare } = productsSlice.actions
export default productsSlice.reducer