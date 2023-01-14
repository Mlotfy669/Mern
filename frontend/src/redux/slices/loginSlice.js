import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../API/api";

export const loginAction = createAsyncThunk("login", async (user, { rejectWithValue }) => {
  try {
    const { data } = await api.post(`login`, {
      email: user.email,
      password: user.password
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
    return data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }
})

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
}


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetLoginUser: (state) => {
      state.userInfo = null;
      state.error = null;
      localStorage.removeItem("userInfo")
      localStorage.removeItem("cartItems")
      localStorage.removeItem("wishlistItems")
      localStorage.removeItem("compareItems")
      document.location.href = '/login'
    }
  },
  extraReducers: {
    [loginAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [loginAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
})

export const { resetLoginUser } = loginSlice.actions
export default loginSlice.reducer