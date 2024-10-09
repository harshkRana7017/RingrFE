import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { createCallAction, endCallAction } from 'store/actions/call.action';
import {
  callsSelector,
  currentCallIdSelector,
} from 'store/Selectors/CallSelector';
import { userSelector } from 'store/Selectors/UserSelector';
//services
import { localStorageService } from 'services/LocalStorageService';
//components
import Button from 'shared-resources/components/Button/Button';
//helpers
import { logout } from 'utils/AuthUtils';
//icons
import { BsCalendar2DateFill } from 'react-icons/bs';
import ScheduleCallModal from './ScheduleCallModal';

// import ScheduleCallModal from './ScheduleCallModal';

const DashboardPage: React.FC = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const calls = useSelector(callsSelector);
  const currentCallId = useSelector(currentCallIdSelector);
  const authToken = localStorageService.getAuthToken();

  // State to manage the call progress and the timer
  const [callInProgress, setCallInProgress] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  async function connectWebSocket() {
    const auth_token = localStorageService.getAuthToken();
    const wsUrl = `ws://localhost:8000/ws?token=${auth_token}`;
    const socket = new WebSocket(wsUrl);
    setWebSocket(socket);

    socket.onopen = () => {
      console.log('Connected to the signaling server');
      startCall();
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      // Handle signaling messages
    };

    socket.onclose = () => {
      console.log('Disconnected from the signaling server');
    };
  }

  async function endWebSocketConnection() {
    endCall();
    if (webSocket) {
      webSocket.close();
    }
  }

  const startCall = () => {
    dispatch(
      createCallAction({
        is_call_private: false,
      })
    );
    if (authToken) {
      setCallInProgress(true); // Set call as in progress
      setTimer(0); // Reset timer when the call starts
    }
  };

  const endCall = () => {
    if (currentCallId) {
      dispatch(
        endCallAction({
          call_id: currentCallId,
        })
      );
      setCallInProgress(false);
    } // End the call
  };

  // UseEffect to start the timer when the call is in progress
  useEffect(() => {
    let interval = null;
    if (callInProgress) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1); // Increment the timer every second
      }, 1000);
    } else if (!callInProgress && interval) {
      clearInterval(interval); // Clear the timer when the call ends
    }
    return () => {
      if (interval) clearInterval(interval); // Clean up the interval
    };
  }, [callInProgress]);

  // Function to format the timer in HH:MM:SS
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className='flex flex-col items-start justify-center w-full bg-neutral1 gap-20'>
      <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md w-full'>
        <h2 className='text-3xl font-bold text-primary1 mb-4'>
          Welcome, {user?.username}!
        </h2>
        <div className='mb-6'>
          <h3 className='text-xl font-semibold mb-2'>Profile Information</h3>
          <p className='text-gray-text'>Email: {user?.email}</p>
        </div>

        {/* Show the timer and call message when call is in progress */}
        {callInProgress && (
          <div className='mb-4'>
            <p className='text-lg text-primary1'>Call is in progress...</p>
            <p className='text-xl font-bold'>Duration: {formatTime(timer)}</p>
          </div>
        )}

        <div className='flex space-x-4'>
          {!callInProgress ? (
            <Button
              onClick={connectWebSocket}
              className='bg-teal text-dark-bg py-2 px-6 rounded-md shadow-medium hover:bg-teal/80 transition duration-300'
            >
              Start Ring
            </Button>
          ) : (
            <Button
              onClick={endWebSocketConnection}
              className='bg-red-500 text-white py-2 px-6 rounded-md shadow-medium hover:bg-red-600 transition duration-300'
            >
              End Ring
            </Button>
          )}
          <Button
            onClick={() => {
              logout();
            }}
            className='!bg-red-600 '
          >
            <Link
              to='/logout'
              className=' text-white py-2 px-6 rounded-md shadow-medium transition duration-300'
            >
              Logout
            </Link>
          </Button>
        </div>
      </div>

      <div className='border-2 p-12 shadow-md rounded-md mx-auto flex flex-col items-center'>
        <h1 className='ext-3xl font-bold text-primary1 mb-4 '>Schedule Call</h1>
        <Button
          className='hover:bg-teal/80 '
          onClick={() => {
            setShowDateSelector(true);
          }}
        >
          {' '}
          <BsCalendar2DateFill fontSize={52} color='white' />
        </Button>
        {showDateSelector && (
          <ScheduleCallModal
            open={showDateSelector}
            handleClose={() => {
              setShowDateSelector(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
