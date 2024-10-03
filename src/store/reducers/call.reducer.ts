import produce from 'immer';
import { Call } from 'models/entities/Call';
import { Reducer } from 'redux';
import { CallActionType } from 'store/actions/actions.constants';

export interface CallState {
  calls: {
    [key: number]: Call;
  };
  currentId?: number;
  loading: boolean;
}

const initialState: CallState = { calls: {}, loading: false };

export const callReducer: Reducer<CallState> = (
  state: CallState = initialState,
  action
) =>
  produce(state, (draft: CallState) => {
    switch (action.type) {
      case CallActionType.END_CALL:
      case CallActionType.CREATE_CALL: {
        draft.loading = true;
        break;
      }
      case CallActionType.END_CALL_COMPLETED:
      case CallActionType.CREATE_CALL_COMPLETED: {
        const { call } = action.payload;
        draft.calls[call.call_id] = call;
        draft.currentId = call.call_id;
        draft.loading = false;
        break;
      }
      case CallActionType.GET_SCHEDULED_CALLS:
      case CallActionType.GET_HOSTED_CALLS_COMPLETED: {
        const calls = action.payload as Call[];
        calls?.forEach((call: Call) => {
          draft.calls[call.call_id] = call;
        });
        break;
      }
      case CallActionType.GET_SCHEDULED_CALLS_COMPLETED:
      case CallActionType.GET_SCHEDULED_CALLS_ERROR:
      case CallActionType.END_CALL_ERROR:
      case CallActionType.CREATE_CALL_ERROR: {
        draft.loading = false;
        break;
      }
    }
  });
