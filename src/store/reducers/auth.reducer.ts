import produce from 'immer';
import { User } from 'models/entities/User';
import { Reducer } from 'redux';
import { AuthActionType } from 'store/actions/actions.constants';

export interface AuthState {
  user?: User;
  userID?: number;
  loading?: boolean;
  error?: string;
}

const initialState: AuthState = {};

export const authReducer: Reducer<AuthState> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: AuthState = initialState,
  action: any
) =>
  produce(state, (draft: AuthState) => {
    switch (action.type) {
      case AuthActionType.SIGNUP:
      case AuthActionType.LOGIN:
      case AuthActionType.FETCH_ME: {
        draft.loading = true;
        break;
      }
      case AuthActionType.SIGNUP_COMPLETED: {
        draft.loading = false;
        break;
      }
      case AuthActionType.LOGIN_COMPLETED: {
        draft.loading = true;
        draft.user = action.payload;
      }
      case AuthActionType.FETCH_ME_COMPLETED: {
        draft.userID = action.payload.id;
        draft.loading = false;
        draft.error = undefined;
        break;
      }
      case AuthActionType.SIGNUP_ERROR:
      case AuthActionType.LOGIN_ERROR:
      case AuthActionType.FETCH_ME_ERROR: {
        draft.loading = false;
        draft.error = action.payload;
        break;
      }
      default:
        break;
    }
  });
