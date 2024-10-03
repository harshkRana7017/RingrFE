export interface Call {
  call_id: number;
  host_id: number;
  scheduled_at: Date;
  started_at: Date;
  ended_at: Date;
  is_call_private: boolean;
}
