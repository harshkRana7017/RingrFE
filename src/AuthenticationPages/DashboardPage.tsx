import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardPage: React.FC = () => {
  const user = { username: 'harsh', email: '123' };
  return (
    <div className='flex flex-col items-center justify-center w-full  bg-neutral1'>
      <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md w-full'>
        <h2 className='text-3xl font-bold text-primary1 mb-4'>
          Welcome, {user?.username}!
        </h2>
        <div className='mb-6'>
          <h3 className='text-xl font-semibold mb-2'>Profile Information</h3>
          <p className='text-gray-text'>Email: {user?.email}</p>
        </div>
        <div className='flex space-x-4'>
          <Link
            to='/settings'
            className='bg-teal text-dark-bg py-2 px-6 rounded-md shadow-medium hover:bg-teal/80 transition duration-300'
          >
            Settings
          </Link>
          <Link
            to='/logout'
            className='bg-red-500 text-white py-2 px-6 rounded-md shadow-medium hover:bg-red-600 transition duration-300'
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
