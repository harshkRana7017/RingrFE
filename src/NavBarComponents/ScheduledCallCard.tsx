import React from 'react';
import { calculateCallDuration } from 'utils/CallUtils';

interface ScheduledCallCardProps {
  callId: number;
  hostName: string | number;
  isPrivate: boolean;
  scheduledAt: Date;
}

const ScheduledCallCard: React.FC<ScheduledCallCardProps> = ({
  callId,
  hostName,
  isPrivate,
  scheduledAt,
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
          <strong>Scheduled For:</strong>{' '}
          {new Date(scheduledAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ScheduledCallCard;
