import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const userStore = (store: AppState) => store.auth;

export const userSelector = createSelector(
  userStore,
  (authState) => authState.user
);
