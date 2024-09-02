import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
});

// Initial values for the form
const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpPage: FC = () => (
  <div className='flex flex-col items-center justify-center w-96'>
    {/* Signup Section */}
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission
        console.log('Form values:', values);
      }}
    >
      {() => (
        <Form className='bg-neutral1 p-6 rounded-md shadow-medium w-full max-w-md'>
          <h2 className='text-3xl font-bold text-primary1 mb-4'>Sign Up</h2>
          <div className='mb-4'>
            <label className='block text-gray-text mb-2' htmlFor='username'>
              Username
            </label>
            <Field
              type='text'
              id='username'
              name='username'
              className='w-full px-3 py-2 border border-dark-gray rounded-md'
              placeholder='Enter your username'
            />
            <ErrorMessage
              name='username'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>
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
          <div className='mb-4'>
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
          <div className='mb-6'>
            <label
              className='block text-gray-text mb-2'
              htmlFor='confirmPassword'
            >
              Confirm Password
            </label>
            <Field
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              className='w-full px-3 py-2 border border-dark-gray rounded-md'
              placeholder='Confirm your password'
            />
            <ErrorMessage
              name='confirmPassword'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>
          <button
            type='submit'
            className='bg-teal text-dark-bg py-2 px-6 rounded-md shadow-medium hover:bg-teal/80 transition duration-300'
          >
            Sign Up
          </button>
          <div className='mt-4 text-center'>
            <Link
              to='/login'
              className='text-teal hover:text-teal/80 transition duration-300'
            >
              Already have an account?{' '}
              <strong className='underline'>Login</strong>
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

export default SignUpPage;
