import { Call } from 'models/entities/Call';

export type createCallPayload = {
  is_private_call: boolean;
};

export type createCallCompletePayload = {
  message: string;
  call: Call;
};

export type createCallErrorPayload = {
  message: string;
};
