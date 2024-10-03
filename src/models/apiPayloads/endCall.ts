import { Call } from 'models/entities/Call';

export type endCallPayload = {
  call_id: string | number;
};

export type endCallCompletePayload = {
  message: string;
  call: Call;
};

export type endCallErrorPayload = {
  message: string;
  call: Call;
};
