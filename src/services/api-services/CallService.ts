
import { createCallPayload, createCallCompletePayload } from 'models/apiPayloads/Calls/createCall';
import { getHostedCallsCompletedPayload } from 'models/apiPayloads/Calls/getHostedCalls';
import { baseApiService } from './BaseApiService';
import { endCallPayload } from 'models/apiPayloads/Calls/endCall';


class CallService {
  static getInstance(): CallService {
    return new CallService();
  }

  async getHostedCalls(): Promise<getHostedCallsCompletedPayload> {
    return baseApiService.get('/calls/hosted');
  }

  async getScheduledCalls(): Promise<getHostedCallsCompletedPayload>{
    return baseApiService.get('/calls/scheduled');
  };

  async createCall(
    data: createCallPayload
  ): Promise<createCallCompletePayload> {
    return baseApiService.post('/call', data);
  }

  async endCall(data: endCallPayload) {
    return baseApiService.post(`/call/end/${data.call_id}`);
  }
}

export const callService = CallService.getInstance();
