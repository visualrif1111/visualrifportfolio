import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/fonts.css';
import { CustomCursor } from './components/CustomCursor';
import { PerformanceProvider } from './context/PerformanceContext';

export default function App() {
  return (
    <PerformanceProvider>
      <CustomCursor />
      <RouterProvider router={router} />
    </PerformanceProvider>
  );
}
