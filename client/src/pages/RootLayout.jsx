import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
  return (
    <>
      <Navigation />
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
