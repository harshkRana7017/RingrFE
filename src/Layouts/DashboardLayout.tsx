import React, { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout: FC = () => (
  <div className='min-h-screen flex flex-col  bg-light-bg'>
    <header className='w-full bg-neutral2 text-white py-4 shadow-medium bg-dark-gray'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <h1 className='text-3xl font-bold '>Ringr</h1>
        <nav>
          <Link to='/login' className='  mx-4'>
            Logout
          </Link>
        </nav>
      </div>
    </header>
    {/* Sidebar */}
    <div className='flex flex-1  h-full'>
      {' '}
      <aside className='w-64 bg-neutral2 text-white shadow-lg'>
        <div className='h-full flex flex-col'>
          {/* Sidebar Links */}
          <nav className='flex-1 px-4 py-8'>
            <ul className='space-y-6'>
              <li>
                <Link
                  to='/dashboard'
                  className=' bg-teal  block text-lg hover:bg-neutral1 hover:text-primary1 py-2 px-4 rounded-md transition duration-200'
                >
                  View Schedules
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/friends'
                  className=' bg-teal block text-lg hover:bg-neutral1 hover:text-primary1 py-2 px-4 rounded-md transition duration-200'
                >
                  Friend List
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/history'
                  className=' bg-teal block text-lg hover:bg-neutral1 hover:text-primary1 py-2 px-4 rounded-md transition duration-200'
                >
                  Call History
                </Link>
              </li>
              <li>
                <Link
                  to='/dashboard/settings'
                  className=' bg-teal block text-lg hover:bg-neutral1 hover:text-primary1 py-2 px-4 rounded-md transition duration-200'
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer in Sidebar */}
          <div className='bg-dark-gray px-4 py-4 text-sm text-center'>
            <p>&copy; {new Date().getFullYear()} Ringr</p>
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className='flex-1 p-8 bg-white'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </div>
  </div>
);

export default DashboardLayout;
