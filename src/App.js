import React from 'react';
import { NavComp } from './components/authentication/NavComp';
import { AuthProvider } from './context/AuthContext';

export const App = () => {
  return (
    <AuthProvider>
      <NavComp />
    </AuthProvider>
  );
};
