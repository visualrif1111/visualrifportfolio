import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/fonts.css';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}