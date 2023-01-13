import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import slices
import ProductSlices from './slices/products'
import loginSlice from "./slices/loginSlice";

const reducers = combineReducers({
  products : ProductSlices,
  loginInfo : loginSlice
})

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["loginInfo"],
}
const persistedReducer = persistReducer(presistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production'
})

const persistor = persistStore(store)

export { store, persistor }

