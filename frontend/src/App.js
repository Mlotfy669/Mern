import React, { Suspense } from 'react';
// react router dom
import { Route, Routes } from 'react-router-dom';
// local component 
import Loader from './components/compound/Loader';
import PrivateRoutes from './Routes';
// local styles
import './App.scss';
// lazy loading pages
const LazyNotFound404 = React.lazy(() => import('./Pages/404'));
const LazyLogin = React.lazy(() => import('./Pages/Login'));
const LazyRegister = React.lazy(() => import('./Pages/Register'));

const App = () => {



  return (
    <div className="App">
      <Routes>
        {/* login page */}
        <Route path='/login' element={
          <Suspense fallback={<Loader />}>
            <LazyLogin />
          </Suspense>
        }></Route>
        {/* register page */}
        <Route path='/register' element={
          <Suspense fallback={<Loader />}>
            <LazyRegister />
          </Suspense>
        }></Route>
        {/* all pages */}
        <Route path="/*" element={<PrivateRoutes />} />
        {/* 404 page */}
        <Route path="/404" element={
          <Suspense fallback={<Loader />}>
            <LazyNotFound404 />
          </Suspense>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
