import { Call } from 'models/entities/Call';

export type getHostedCallsCompletedPayload = Call[];

export type getHostedCallsErrorPayload = {
  message: string;
};
