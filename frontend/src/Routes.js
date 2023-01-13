import React, { Suspense ,useEffect } from 'react';
import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom';
// mui 
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// local component
import Annouencement from './components/compound/Annouence';
import Loader from './components/compound/Loader';
import NewsLetter from './components/compound/NewsLetters';
import Footer from './components/compound/Footer';
import Navbar from './components/compound/Navbar';
import MuiDrawer from './components/compound/Drawer';
// lazy routes 
const LazyHome = React.lazy(() => import('./Pages/Home'));
const LazyShop = React.lazy(() => import('./Pages/Shop'));
const LazyContact = React.lazy(() => import('./Pages/Contact'));
const LazyAbout = React.lazy(() => import('./Pages/About'));
const LazyShoppingCart = React.lazy(() => import('./Pages/ShopCart'));
const LazyWishList = React.lazy(() => import('./Pages/Wishlist'));
const LazyCompare = React.lazy(() => import('./Pages/Compare'));


const PrivateRoutes = () => {

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate()
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    if(!userInfo) {
      navigate('/login')
    }
  }, [])
  
  return (

    <>
      {
        userInfo &&
        <>
          <Annouencement />
          {isTablet ? (
            <MuiDrawer />
          ) : (
            <Navbar />
          )}
          <div style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path='/' element={
                <Suspense fallback={<Loader />}>
                  <LazyHome />
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
          </div>
          <NewsLetter />
          <Footer />
        </>
      }
    </>
  )
}

export default PrivateRoutes