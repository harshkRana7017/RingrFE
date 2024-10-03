import { User } from 'models/entities/User';
import { AuthActionType } from './actions.constants';
import { forgotPassPayload } from 'models/apiPayloads/Auth/forgotPass';

// TODO: MOVE TO SPECIFIC TYPE FILE
export interface AuthLoginActionPayloadType {
  email: string;
  password: string;
}
export interface AuthSignupActionPayload {
  username: string;
  email: string;
  password: string;
}

export const authSignupAction = (payload: AuthSignupActionPayload) => ({
  type: AuthActionType.SIGNUP,
  payload,
});
export const authSignupCompletedAction = (message: string) => ({
  type: AuthActionType.SIGNUP_COMPLETED,
  payload: message,
});
export const authSignupErrorAction = (message: string) => ({
  type: AuthActionType.SIGNUP_ERROR,
  payload: message,
});

export const authLoginAction = (payload: AuthLoginActionPayloadType) => ({
  type: AuthActionType.LOGIN,
  payload,
});

export const authLoginCompletedAction = (user: User) => ({
  type: AuthActionType.LOGIN_COMPLETED,
  payload: user,
});

export const authLoginErrorAction = (message: string) => ({
  type: AuthActionType.LOGIN_ERROR,
  payload: message,
});
export const authLoginViaGoogleAction = (payload: { token: string }) => ({
  type: AuthActionType.LOGIN_VIA_GOOGLE,
  payload,
});

export const authLoginViaGoogleCompletedAction = (user: User) => ({
  type: AuthActionType.LOGIN_VIA_GOOGLE_COMPLETED,
  payload: user,
});

export const authLoginViaGoogleErrorAction = (message: string) => ({
  type: AuthActionType.LOGIN_VIA_GOOGLE_ERROR,
  payload: message,
});

export const authFetchMeAction = () => ({ type: AuthActionType.FETCH_ME });

export const authFetchMeCompletedAction = (user: User) => ({
  type: AuthActionType.FETCH_ME_COMPLETED,
  payload: user,
});

export const authFetchMeErrorAction = (message: string) => ({
  type: AuthActionType.FETCH_ME_ERROR,
  payload: message,
});

// Forgot Password Actions
export const forgotPasswordAction = (email: forgotPassPayload) => ({
  type: AuthActionType.FORGOT_PASSWORD,
  payload: email,
});

export const forgotPasswordCompletedAction = () => ({
  type: AuthActionType.FORGOT_PASSWORD_COMPLETED,
});

export const forgotPasswordErrorAction = (message: string) => ({
  type: AuthActionType.FORGOT_PASSWORD_ERROR,
  payload: message,
});

//Reset Password Actions 
export const resetPasswordAction = (newPassword: string, token: string) => ({
  type: AuthActionType.RESET_PASSWORD,
  payload: { newPassword, token },
});

export const resetPasswordCompletedAction = () => ({
  type: AuthActionType.RESET_PASSWORD_COMPLETED,
});

export const resetPasswordErrorAction = (message: string) => ({
  type: AuthActionType.RESET_PASSWORD_ERROR,
  payload: message,
});
