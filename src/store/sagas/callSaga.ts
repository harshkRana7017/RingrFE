import { createCallPayload } from 'models/apiPayloads/createCall';
import { put, call, all, takeLatest } from 'redux-saga/effects';
import { callService } from 'services/api-services/CallService';
import { CallActionType } from 'store/actions/actions.constants';
import { createCallCompletedAction } from 'store/actions/call.action';
import { SagaPayloadType } from 'types/SagaPayload.type';

interface CreateCallSagaPayloadType extends SagaPayloadType {
  payload: createCallPayload;
}

function* createCallSaga(data: CreateCallSagaPayloadType): any {
  try {
    const response = yield call(callService.createCall, data.payload);
    yield put(createCallCompletedAction(response));
  } catch (e: any) {
    console.error(e?.message);
  }
}

function* callSaga() {
  yield all([takeLatest(CallActionType.CREATE_CALL, createCallSaga)]);
}

export default callSaga
