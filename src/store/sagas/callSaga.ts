import { createCallPayload } from 'models/apiPayloads/createCall';
import { endCallPayload } from 'models/apiPayloads/endCall';
import { put, call, all, takeLatest } from 'redux-saga/effects';
import { callService } from 'services/api-services/CallService';
import { CallActionType } from 'store/actions/actions.constants';
import {
  createCallCompletedAction,
  endCallCompletedAction,
  endCallErrorAction,
  getHostedCallsCompletedAction,
  getHostedCallsErrorAction,
} from 'store/actions/call.action';
import { SagaPayloadType } from 'types/SagaPayload.type';

interface CreateCallSagaPayloadType extends SagaPayloadType {
  payload: createCallPayload;
}
interface EndCallSagaPayloadType extends SagaPayloadType {
  payload: endCallPayload;
}

function* createCallSaga(data: CreateCallSagaPayloadType): any {
  try {
    const response = yield call(callService.createCall, data.payload);
    yield put(createCallCompletedAction(response));
  } catch (e: any) {
    console.error(e?.message);
  }
}

function* endCallSaga(data: EndCallSagaPayloadType): any {
  try {
    const response = yield call(callService.endCall, data.payload);
    yield put(endCallCompletedAction(response));
  } catch (e: any) {
    console.error(e?.message);
    yield put(endCallErrorAction(e));
  }
}
function* getHostedCallSaga(): any {
  try {
    const response = yield call(callService.getHostedCalls);
    yield put(getHostedCallsCompletedAction(response));
  } catch (e: any) {
    console.error(e?.message);
    yield put(getHostedCallsErrorAction(e));
  }
}

function* callSaga() {
  yield all([
    takeLatest(CallActionType.CREATE_CALL, createCallSaga),
    takeLatest(CallActionType.END_CALL, endCallSaga),
    takeLatest(CallActionType.GET_HOSTED_CALLS, getHostedCallSaga),
  ]);
}

export default callSaga;
