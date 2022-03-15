import React from 'react';
import { AuthPage } from '../pages/AuthPage';
import { MainPage } from '../pages/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth"   element={<AuthPage />} />
        <Route path="/messenger"   element={<MainPage />} />
  
        <Route path="*" element={<Navigate to="/messenger" />} />
  
      </Routes>
    </BrowserRouter>
  );
};