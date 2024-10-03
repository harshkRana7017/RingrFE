import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { callReducer } from './call.reducer';

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  call: callReducer,
});

export const rootReducer = (state: any, action: any) =>
  appReducer(state, action);

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
