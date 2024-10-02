import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { forgotPasswordAction } from 'store/actions/auth.action';

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  newPassword: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Passwords must match')
    .required('Required'),
});

// Initial values for the form
const initialValues = {
  email: '',
  newPassword: '',
  confirmPassword: '',
};

const ForgotPasswordPage: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Forgot Password Section */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(
            forgotPasswordAction({
              email: values.email,
              new_pass: values.confirmPassword,
            })
          );
          // Handle form submission
          console.log('Form values:', values);
          // Implement the password reset logic here
        }}
      >
        {() => (
          <Form className='bg-neutral1 p-6 rounded-md shadow-medium w-full max-w-md'>
            <h2 className='text-3xl font-bold text-primary1 mb-4'>
              Forgot Password
            </h2>

            {/* Email Field */}
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

            {/* New Password Field */}
            <div className='mb-4'>
              <label
                className='block text-gray-text mb-2'
                htmlFor='newPassword'
              >
                New Password
              </label>
              <Field
                type='password'
                id='newPassword'
                name='newPassword'
                className='w-full px-3 py-2 border border-dark-gray rounded-md'
                placeholder='Enter new password'
              />
              <ErrorMessage
                name='newPassword'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>

            {/* Confirm Password Field */}
            <div className='mb-4'>
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
                placeholder='Confirm new password'
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
              Reset Password
            </button>

            <div className='mt-4 text-center'>
              <Link
                to='/login'
                className='text-teal hover:text-teal/80 transition duration-300'
              >
                Remembered your password?{' '}
                <strong className='underline'>Login</strong>
              </Link>
              <div className='mt-2'>
                <Link
                  to='/signup'
                  className='text-gray-text hover:text-primary1 transition duration-300 '
                >
                  Don't have an account?{' '}
                  <strong className='underline'>Sign Up</strong>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordPage;
