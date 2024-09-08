import { createSelector } from 'reselect';
import { AppState } from 'store/reducers';

const callStore = (store: AppState) => store.call;

export const callsSelector = createSelector(callStore, (callState) =>
  Object.values(callState.calls)
);
