import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { callsSelector } from 'store/Selectors/CallSelector';
import ScheduledCallCard from './ScheduledCallCard';

type ScheduledCallsPageProps = {};

const ScheduledCallsPage: FC<ScheduledCallsPageProps> = (props) => {
  const calls = useSelector(callsSelector);

  return (
    <>
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
