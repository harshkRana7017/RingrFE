import React from 'react';
import { calculateCallDuration } from 'utils/CallUtils';

interface CallHistoryCardProps {
  callId: number;
  hostName: string | number;
  startTime: Date;
  endTime: Date;
  isPrivate: boolean;
}

const CallHistoryCard: React.FC<CallHistoryCardProps> = ({
  callId,
  hostName,
  startTime,
  endTime,
  isPrivate,
}) => {
  return (
    <div className='bg-white p-6 rounded-md shadow-md mb-4 w-full max-w-4xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>
          Call with {hostName} (CALL_ID: {callId})
        </h3>
        <span
          className={`px-2 py-1 rounded-md text-sm ${
            isPrivate ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
        >
          {isPrivate ? 'Private' : 'Public'}
        </span>
      </div>
      <div className='mt-4'>
        <p className='text-gray-text'>
          <strong>Start Time:</strong> {new Date(startTime).toLocaleString()}
        </p>
        {endTime ? (
          <p className='text-gray-text'>
            <strong>End Time:</strong> {new Date(endTime).toLocaleString()}
          </p>
        ) : (
          <></>
        )}
        <p className='text-gray-text'>
          <strong>Duration:</strong> {calculateCallDuration(startTime, endTime)}
        </p>
      </div>
    </div>
  );
};

export default CallHistoryCard;
