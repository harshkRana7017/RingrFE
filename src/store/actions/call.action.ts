import { createCallCompletePayload, createCallErrorPayload, createCallPayload } from 'models/apiPayloads/createCall';
import { CallActionType } from './actions.constants';

export const createCallAction = (payload: createCallPayload) => ({
  type: CallActionType.CREATE_CALL,
  payload,
});

export const createCallCompletedAction = (payload: createCallCompletePayload) => ({
  type: CallActionType.CREATE_CALL_COMPLETED,
  payload,
});
export const createCallErrorAction = (payload: createCallErrorPayload) => ({
  type: CallActionType.CREATE_CALL_ERROR,
  payload,
});
