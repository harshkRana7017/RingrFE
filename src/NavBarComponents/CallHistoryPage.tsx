import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callsSelector } from 'store/Selectors/CallSelector';
import CallHistoryCard from './CallHistoryCard';
import { getHostedCallsAction } from 'store/actions/call.action';

type CallHistoryPageProps = {};

const CallHistoryPage: FC<CallHistoryPageProps> = (props) => {
  const dispatch = useDispatch();
  const calls = useSelector(callsSelector);

  useEffect(() => {
    dispatch(getHostedCallsAction());
  }, []);

  return (
    <>
      {calls.map((call) =>
        call.ended_at ? (
          <CallHistoryCard
            callId={call.call_id}
            hostName={call.host_id}
            isPrivate={call.is_call_private}
            startTime={call.started_at}
            endTime={call.ended_at}
          />
        ) : (
          <></>
        )
      )}
    </>
  );
};
export default memo(CallHistoryPage);
