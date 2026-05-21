import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/fonts.css';
import { CustomCursor } from './components/CustomCursor';
import { PerformanceProvider } from './context/PerformanceContext';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';

export default function App() {
  return (
    <PerformanceProvider>
      <SmoothScrollProvider>
        <CustomCursor />
        <RouterProvider router={router} />
      </SmoothScrollProvider>
    </PerformanceProvider>
  );
}
