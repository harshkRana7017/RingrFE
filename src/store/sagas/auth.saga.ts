import { SagaPayloadType } from 'types/SagaPayload.type';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthActionType } from 'store/actions/actions.constants';
import {
  authFetchMeCompletedAction,
  authFetchMeErrorAction,
  AuthLoginActionPayloadType,
  authLoginCompletedAction,
  authLoginErrorAction,
  authLoginViaGoogleCompletedAction,
  authLoginViaGoogleErrorAction,
  AuthSignupActionPayload,
  authSignupCompletedAction,
  authSignupErrorAction,
  forgotPasswordCompletedAction,
  isUserEmailCompletedAction,
  isUserEmailErrorAction,
} from 'store/actions/auth.action';
import { authService } from 'services/api-services/AuthService';
import { localStorageService } from 'services/LocalStorageService';
import { forgotPassPayload } from 'models/apiPayloads/Auth/forgotPass';

interface LoginSagaPayloadType extends SagaPayloadType {
  payload: AuthLoginActionPayloadType;
}

interface SignupSagaPayloadType extends SagaPayloadType {
  payload: AuthSignupActionPayload;
}
interface LoginViaGoogleSagaPayloadType extends SagaPayloadType {
  payload: { token: string };
}
interface ForgotPassSagaPayloadType extends SagaPayloadType {
  payload: forgotPassPayload;
}

interface IsUserEmailSagaPayloadType extends SagaPayloadType {
  payload: string;
}

function* loginSaga(data: LoginSagaPayloadType): any {
  try {
    const response = yield call(authService.login, data.payload);
    yield put(authLoginCompletedAction(response));
    localStorageService.setAuthToken(response?.token);
  } catch (e: any) {
    yield put(
      authLoginErrorAction((e?.errors && e.errors[0]?.message) || e?.message)
    );
  }
}

function* loginViaGoogleSaga(data: LoginViaGoogleSagaPayloadType): any {
  try {
    const response = yield call(authService.loginViaGoogle, data.payload);
    yield put(authLoginViaGoogleCompletedAction(response));
    localStorageService.setAuthToken(response?.token);
  } catch (e: any) {
    yield put(
      authLoginViaGoogleErrorAction(
        (e?.errors && e.errors[0]?.message) || e?.message
      )
    );
  }
}
function* signupSaga(data: SignupSagaPayloadType): any {
  try {
    const response = yield call(authService.signup, data.payload);
    yield put(authSignupCompletedAction(response.user));
  } catch (e: any) {
    authSignupErrorAction((e?.errors && e.errors[0]?.message) || e?.message);
  }
}
function* fetchLoggedInUserSaga(): any {
  try {
    const response = yield call(authService.fetchMe);
    yield put(authFetchMeCompletedAction(response.user));
  } catch (e: any) {
    localStorageService.removeAuthToken();
    yield put(authFetchMeErrorAction(e?.message));
  }
}

function* forgotPassWordSaga(data: ForgotPassSagaPayloadType): any {
  try {
    const response = authService.forgotPass(data.payload);
  } catch (e: any) {
    yield put(forgotPasswordCompletedAction());
  }
}

//Is User Email

function* isUserEmailSaga(data: IsUserEmailSagaPayloadType): any {
  try {
    const response = yield call(authService.isEmailUser, data.payload);
    yield put(isUserEmailCompletedAction(response));
  } catch (e: any) {
    yield put(isUserEmailErrorAction(e?.message));
  }
}

function* authSaga() {
  yield all([
    takeLatest(AuthActionType.LOGIN, loginSaga),
    takeLatest(AuthActionType.FETCH_ME, fetchLoggedInUserSaga),
    takeLatest(AuthActionType.SIGNUP, signupSaga),
    takeLatest(AuthActionType.LOGIN_VIA_GOOGLE, loginViaGoogleSaga),
    takeLatest(AuthActionType.FORGOT_PASSWORD, forgotPassWordSaga),
    takeLatest(AuthActionType.IS_USER_EMAIL, isUserEmailSaga),
  ]);
}

export default authSaga;
