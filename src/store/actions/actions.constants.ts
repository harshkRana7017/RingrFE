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

  // Forgot Password Actions
  FORGOT_PASSWORD = 'auth/forgot-password',
  FORGOT_PASSWORD_COMPLETED = 'auth/forgot-password/completed',
  FORGOT_PASSWORD_ERROR = 'auth/forgot-password/error',

  // Reset Password Actions (optional if you have a reset password flow)
  RESET_PASSWORD = 'auth/reset-password',
  RESET_PASSWORD_COMPLETED = 'auth/reset-password/completed',
  RESET_PASSWORD_ERROR = 'auth/reset-password/error',
}

// Call
export enum CallActionType {
  CREATE_CALL = 'call/create',
  CREATE_CALL_COMPLETED = 'call/create/completed',
  CREATE_CALL_ERROR = 'cakk/create/error',

  END_CALL = 'call/end',
  END_CALL_COMPLETED = 'call/end/completed',
  END_CALL_ERROR = 'call/end/error',

  GET_HOSTED_CALLS = 'get/hosted/calls',
  GET_HOSTED_CALLS_COMPLETED = 'get/hosted/calls/completed',
  GET_HOSTED_CALLS_ERROR = 'get/hosted/calls/error',

  GET_SCHEDULED_CALLS = 'get/scheduled/calls',
  GET_SCHEDULED_CALLS_COMPLETED = 'get/scheduled/calls/completed',
  GET_SCHEDULED_CALLS_ERROR = 'get/scheduled/calls/error',
}
