import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: FC = () => (
  <div className='flex flex-col items-center justify-center'>
    {/* Hero Section */}
    <div className='text-center'>
      <h2 className='text-4xl font-extrabold text-primary1 mb-4'>
        Welcome to Ringr
      </h2>
      <p className='text-lg text-gray-text mb-8'>
        Experience seamless video calls with high-quality audio and innovative
        features. Connect with friends, family, and colleagues effortlessly.
      </p>
      <Link
        to='/login'
        className='bg-teal text-dark-bg py-2 px-6 rounded-md shadow-medium hover:bg-teal/80 transition duration-300'
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default LandingPage;
