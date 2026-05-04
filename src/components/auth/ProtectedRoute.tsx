import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('userToken');

  if (!token) {
    // Se non c'è il token, rispediscilo al login
    return <Navigate to="/home/accedi" replace />;
  }

  return children;
};