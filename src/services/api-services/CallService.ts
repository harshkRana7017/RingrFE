import {
  createCallCompletePayload,
  createCallPayload,
} from 'models/apiPayloads/createCall';
import { baseApiService } from './BaseApiService';
import { endCallPayload } from 'models/apiPayloads/endCall';
import { getHostedCallsCompletedPayload } from 'models/apiPayloads/getHostedCalls';

class CallService {
  static getInstance(): CallService {
    return new CallService();
  }

  async getHostedCalls(): Promise<getHostedCallsCompletedPayload> {
    return baseApiService.get('/hosted/calls');
  }

  async createCall(
    data: createCallPayload
  ): Promise<createCallCompletePayload> {
    return baseApiService.post('/call', data);
  }

  async endCall(data: endCallPayload) {
    return baseApiService.post(`/end/call/${data.call_id}`);
  }
}

export const callService = CallService.getInstance();
