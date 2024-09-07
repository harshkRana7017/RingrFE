import {
  createCallCompletePayload,
  createCallPayload,
} from 'models/apiPayloads/createCall';
import { baseApiService } from './BaseApiService';

class CallService {
  static getInstance(): CallService {
    return new CallService();
  }

  async createCall(
    data: createCallPayload
  ): Promise<createCallCompletePayload> {
    return baseApiService.post('/call', data);
  }
}

export const callService = CallService.getInstance();
