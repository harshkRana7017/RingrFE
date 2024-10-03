import { Call } from 'models/entities/Call';
import { User } from 'models/entities/User';

export type createCallPayload = {
  is_call_private: boolean;
  scheduled_at?: number;
  member_emails?: String[];
};

export type createCallCompletePayload = {
  message: string;
  call: Call;
};

export type createCallErrorPayload = {
  message: string;
};
