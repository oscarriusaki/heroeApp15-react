import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../auth/context/UserProvider';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';
import { HeroRoute } from '../heroes/routes/HeroRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoute = () => {
  return (
    <UserProvider>
        <Routes>
            {/* <Route path='/login' element={<LoginPage /> } /> */}
            {/* <Route path='/register' element={<RegisterPage /> } /> */}

            <Route path='/login' element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } />

            <Route path='/*' element={
              <PrivateRoute>
                <HeroRoute />
              </PrivateRoute>
            } />

            {/* <Route path='/*' element={<HeroRoute /> } /> */}
        </Routes>
    </UserProvider>
  )
}
