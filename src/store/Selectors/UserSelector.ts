import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const userStore = (store: AppState) => store.auth;

export const userSelector = createSelector(
  userStore,
  (authState) => authState.user
);

export const isUserEmailSelector = createSelector(
  userStore,
  (authState) => authState.isUserEmail
);

export const isUserloadingSelector = createSelector(
  userStore,
  (authState) => authState.loading
);
