import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { authService } from 'services/api-services/AuthService';
import { localStorageService } from 'services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { authLoginAction } from 'store/actions/auth.action';

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

// Initial values for the form
const initialValues = {
  email: '',
  password: '',
};

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col items-center justify-center w-96'>
      {/* Login Section */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(authLoginAction(values));
          // Handle form submission
          console.log('Form values:', values);
        }}
      >
        {() => (
          <Form className='bg-neutral1 p-6 rounded-md shadow-medium w-full max-w-md'>
            <h2 className='text-3xl font-bold text-primary1 mb-4'>Login</h2>
            <div className='mb-4'>
              <label className='block text-gray-text mb-2' htmlFor='email'>
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-2 border border-dark-gray rounded-md'
                placeholder='Enter your email'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-text mb-2' htmlFor='password'>
                Password
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full px-3 py-2 border border-dark-gray rounded-md'
                placeholder='Enter your password'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <button
              type='submit'
              className='bg-teal text-dark-bg py-2 px-6 rounded-md shadow-medium hover:bg-teal/80 transition duration-300'
            >
              Login
            </button>
            <div className='mt-4 text-center'>
              <Link
                to='/signup'
                className='text-teal hover:text-teal/80 transition duration-300'
              >
                Don't have an account?{' '}
                <strong className='underline'>Sign Up</strong>
              </Link>
              <div className='mt-2'>
                <Link
                  to='/forgot-password'
                  className='text-gray-text hover:text-primary1 transition duration-300 underline'
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
