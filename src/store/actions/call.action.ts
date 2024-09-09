import {
  createCallCompletePayload,
  createCallErrorPayload,
  createCallPayload,
} from 'models/apiPayloads/createCall';
import { CallActionType } from './actions.constants';
import {
  endCallCompletePayload,
  endCallErrorPayload,
  endCallPayload,
} from 'models/apiPayloads/endCall';
import {
  getHostedCallsCompletedPayload,
  getHostedCallsErrorPayload,
} from 'models/apiPayloads/getHostedCalls';

export const createCallAction = (payload: createCallPayload) => ({
  type: CallActionType.CREATE_CALL,
  payload,
});

export const createCallCompletedAction = (
  payload: createCallCompletePayload
) => ({
  type: CallActionType.CREATE_CALL_COMPLETED,
  payload,
});
export const createCallErrorAction = (payload: createCallErrorPayload) => ({
  type: CallActionType.CREATE_CALL_ERROR,
  payload,
});

export const endCallAction = (payload: endCallPayload) => ({
  type: CallActionType.END_CALL,
  payload,
});

export const endCallCompletedAction = (payload: endCallCompletePayload) => ({
  type: CallActionType.END_CALL_COMPLETED,
  payload,
});
export const endCallErrorAction = (payload: endCallErrorPayload) => ({
  type: CallActionType.END_CALL_ERROR,
  payload,
});

export const getHostedCallsAction = () => ({
  type: CallActionType.GET_HOSTED_CALLS,
});
export const getHostedCallsCompletedAction = (
  payload: getHostedCallsCompletedPayload
) => ({
  type: CallActionType.GET_HOSTED_CALLS_COMPLETED,
  payload,
});
export const getHostedCallsErrorAction = (
  payload: getHostedCallsErrorPayload
) => ({
  type: CallActionType.GET_HOSTED_CALLS_ERROR,
});
