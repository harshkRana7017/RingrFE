import { GoogleLogin } from '@react-oauth/google';
import React, { FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { authLoginViaGoogleAction } from 'store/actions/auth.action';

type GoogleLoginButtonProps = {};

const GoogleLoginButton: FC<GoogleLoginButtonProps> = (props) => {
  const dispatch = useDispatch();
  const handleSuccess = (response: any) => {
    console.log('Login Success:', response);
    const idToken = response.credential;
    //sending the token to the BE for verification adn auth_token genration
    dispatch(authLoginViaGoogleAction({ token: idToken }));
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
