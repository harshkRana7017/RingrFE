// Auth
export enum AuthActionType {
  LOGIN = 'auth/login',
  LOGIN_COMPLETED = 'auth/login/completed',
  LOGIN_ERROR = 'auth/login/error',

  FETCH_ME = 'auth/fetch/me',
  FETCH_ME_COMPLETED = 'auth/fetch/me/completed',
  FETCH_ME_ERROR = 'auth/fetch/me/error',

  SIGNUP = 'auth/signup',
  SIGNUP_COMPLETED = 'auth/signup/completed',
  SIGNUP_ERROR = 'auth/signup/error',
}
