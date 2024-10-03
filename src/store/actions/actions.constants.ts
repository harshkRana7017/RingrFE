// Auth
export enum AuthActionType {
  LOGIN = 'auth/login',
  LOGIN_COMPLETED = 'auth/login/completed',
  LOGIN_ERROR = 'auth/login/error',

  LOGIN_VIA_GOOGLE = 'auth/google',
  LOGIN_VIA_GOOGLE_COMPLETED = 'auth/google/completed',
  LOGIN_VIA_GOOGLE_ERROR = 'auth/google/error',

  FETCH_ME = 'auth/fetch/me',
  FETCH_ME_COMPLETED = 'auth/fetch/me/completed',
  FETCH_ME_ERROR = 'auth/fetch/me/error',

  SIGNUP = 'auth/signup',
  SIGNUP_COMPLETED = 'auth/signup/completed',
  SIGNUP_ERROR = 'auth/signup/error',
}

export enum CallActionType {
  CREATE_CALL = 'call/create',
  CREATE_CALL_COMPLETED = 'call/create/completed',
  CREATE_CALL_ERROR = 'cakk/create/error',

  END_CALL = 'call/end',
  END_CALL_COMPLETED = 'call/end/completed',
  END_CALL_ERROR = 'call/end/error',
}
