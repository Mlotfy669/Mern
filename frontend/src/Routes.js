import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/compound/Loader';

// lazy routes 
const LazyHome = React.lazy(() => import('./Pages/Home'));
const LazyLogin = React.lazy(() => import('./Pages/Login'));
const LazyRegister = React.lazy(() => import('./Pages/Register'));
const LazyShop = React.lazy(() => import('./Pages/Shop'));
const LazyContact = React.lazy(() => import('./Pages/Contact'));
const LazyAbout = React.lazy(() => import('./Pages/About'));
const LazyShoppingCart = React.lazy(() => import('./Pages/ShopCart'));
const LazyWishList = React.lazy(() => import('./Pages/Wishlist'));
const LazyCompare = React.lazy(() => import('./Pages/Compare'));


const RoutesContainer = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Suspense fallback={<Loader />}>
              <LazyHome />
            </Suspense>
          }></Route>
        <Route path='login' element={
            <Suspense fallback={<Loader />}>
              <LazyLogin />
            </Suspense>
          }></Route>
        <Route path='register' element={
            <Suspense fallback={<Loader />}>
              <LazyRegister />
            </Suspense>
          }></Route>
        <Route path='shop' element={
            <Suspense fallback={<Loader />}>
              <LazyShop />
            </Suspense>
          }></Route>
        <Route path='contact' element={
            <Suspense fallback={<Loader />}>
              <LazyContact />
            </Suspense>
          }></Route>
        <Route path='about' element={
            <Suspense fallback={<Loader />}>
              <LazyAbout />
            </Suspense>
          }></Route>
        <Route path='shopping-cart' element={
            <Suspense fallback={<Loader />}>
              <LazyShoppingCart />
            </Suspense>
          }></Route>
        <Route path='wishlist' element={
            <Suspense fallback={<Loader />}>
              <LazyWishList />
            </Suspense>
          }></Route>
        <Route path='compare' element={
            <Suspense fallback={<Loader />}>
              <LazyCompare />
            </Suspense>
          }></Route>
      </Routes>
  )
}

export default RoutesContainer