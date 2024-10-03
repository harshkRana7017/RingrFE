import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callsSelector } from 'store/Selectors/CallSelector';
import ScheduledCallCard from './ScheduledCallCard';
import { getScheduledCallsAction } from 'store/actions/call.action';

type ScheduledCallsPageProps = {};

const ScheduledCallsPage: FC<ScheduledCallsPageProps> = (props) => {
  const dispatch = useDispatch();
  const calls = useSelector(callsSelector);
    useEffect(() => {
      dispatch(getScheduledCallsAction());
    }, []);

  return (
    <>
      <h1 style={{ fontSize: '30px' }}>Scheduled Calls</h1>
      {calls.map((call) =>
        call.scheduled_at ? (
          <ScheduledCallCard
            callId={call.call_id}
            hostName={call.host_id}
            isPrivate={call.is_call_private}
            scheduledAt={call.scheduled_at}
          />
        ) : (
          <></>
        )
      )}
    </>
  );
};
export default memo(ScheduledCallsPage);
