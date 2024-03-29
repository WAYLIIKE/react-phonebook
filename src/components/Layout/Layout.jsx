import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
// import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
