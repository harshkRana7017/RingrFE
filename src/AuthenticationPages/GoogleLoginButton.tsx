import { GoogleLogin } from '@react-oauth/google';

import React, { FC, memo } from 'react';

type GoogleLoginButtonProps = {};

const GoogleLoginButton: FC<GoogleLoginButtonProps> = (props) => {
  const handleSuccess = (response: any) => {
    console.log('Google login successful:', response);
  };
  const handleError = () => {
    console.log('error');
  };
  return (
    <>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </>
  );
};
export default memo(GoogleLoginButton);
