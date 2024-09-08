import produce from 'immer';
import { Call } from 'models/entities/Call';
import { Reducer } from 'redux';
import { CallActionType } from 'store/actions/actions.constants';

export interface CallState {
  calls: {
    [key: string]: Call;
  };
  loading: boolean;
}

const initialState: CallState = { calls: {}, loading: false };

export const callReducer: Reducer<CallState> = (
  state: CallState = initialState,
  action
) =>
  produce(state, (draft: CallState) => {
    switch (action.type) {
      case CallActionType.CREATE_CALL: {
        draft.loading = true;
        break;
      }
      case CallActionType.CREATE_CALL_COMPLETED: {
        const { call } = action.payload;
        draft.calls[call.call_id] = call;
        draft.loading = false;
        break;
      }
      case CallActionType.CREATE_CALL_ERROR: {
        draft.loading = false;
        break;
      }
    }
  });
