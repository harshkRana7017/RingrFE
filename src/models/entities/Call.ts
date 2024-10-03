export interface Call {
  call_id: string | number;
  host_id: string | number;
  scheduled_at: Date;
  started_at: Date;
  ended_at: Date;
  is_call_private: boolean;
}
