import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: FC = () => (
  <div className='min-h-screen flex flex-col bg-light-bg text-gray-text'>
    {/* Header Section */}
    <header className='w-full bg-neutral2 text-white py-4 shadow-medium bg-dark-gray'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <h1 className='text-3xl font-bold '>Ringr</h1>
        <nav>
          <Link to='/' className=' mx-4'>
            Home
          </Link>
          <Link to='/login' className='  mx-4'>
            Login
          </Link>
          <Link to='/signup' className='  mx-4'>
            Signup
          </Link>
        </nav>
      </div>
    </header>

    {/* Main Content */}
    <main className='flex-1 flex items-center justify-center px-4 py-8'>
      <Outlet />
    </main>

    {/* Footer Section */}
    <footer className='w-full bg-neutral1 text-white bg-dark-gray py-4'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Ringr. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
