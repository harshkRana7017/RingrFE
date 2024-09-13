import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { getTime } from 'date-fns';
import React, { FC, memo, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { useDispatch } from 'react-redux';
import { createCallAction } from 'store/actions/call.action';
type ScheduleCallModalProps = {
  open: boolean;
  handleClose: (closE: boolean) => void;
};

const ScheduleCallModal: FC<ScheduleCallModalProps> = ({
  handleClose,
  open,
}) => {
  const dispatch = useDispatch();
  const [topic, setTopic] = useState('');
  const [scheduledDate, setScheduledDate] = useState(new Date());
  const [scheduledTime, setScheduledTime] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);

  const handleTopicChange = (e: any) => setTopic(e.target.value);
  const handleScheduledDateChange = (date: any) => {
    setScheduledDate(new Date(date));
  };
  const handleScheduledTimeChange = (time: any) => {
    setScheduledTime(new Date(time));
  };

  const combineDateAndTime = () => {
    if (scheduledDate && scheduledTime) {
      const combinedDateTime = new Date(
        scheduledDate.getFullYear(),
        scheduledDate.getMonth(),
        scheduledDate.getDate(),
        scheduledTime.getHours(),
        scheduledTime.getMinutes(),
        scheduledTime.getSeconds()
      );

      const combinedTimestamp = getTime(combinedDateTime);
      return combinedTimestamp;
    }
    return null;
  };

  const onClick = () => {
    const timeStamp = combineDateAndTime();
    if (timeStamp) {
      dispatch(
        createCallAction({ is_call_private: true, scheduled_at: timeStamp })
      );
    }
    handleClose(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
      <DialogTitle>Schedule Meetings</DialogTitle>
      <DialogContent>
        <div className='h-[400px] w-[600px]'>
          <TextField
            label='Topic'
            value={topic}
            onChange={handleTopicChange}
            fullWidth
            margin='dense'
          />
          <div style={{ marginTop: '20px', display: 'flex', gap: '100px' }}>
            <div>
              {' '}
              <label>Date</label>
              <Datetime
                inputProps={{
                  style: {
                    border: isFocused
                      ? '2px solid blue'
                      : '2px solid #0000003B',
                    borderRadius: '4px',
                    padding: '16.5px',
                    outline: 'none',
                  },
                  onFocus: () => {
                    setIsFocused(true);
                  },

                  onBlur: () => {
                    setIsFocused(false);
                  },
                }}
                // input={false}
                onChange={handleScheduledDateChange}
                value={scheduledDate}
                dateFormat='DD/MM/YYYY'
                // updateOnView='time'
                timeFormat={false}
                closeOnSelect={true}
              />
            </div>
            <div>
              <label>Time</label>
              <Datetime
                inputProps={{
                  style: {
                    border: isFocused
                      ? '2px solid blue'
                      : '2px solid #0000003B',
                    borderRadius: '4px',
                    padding: '16.5px',
                    outline: 'none',
                  },
                  onFocus: () => {
                    setIsFocused(true);
                  },

                  onBlur: () => {
                    setIsFocused(false);
                  },
                }}
                // input={false}
                onChange={handleScheduledTimeChange}
                value={scheduledTime}
                dateFormat={false}
                closeOnSelect={true}
              />
            </div>
          </div>
        </div>
        <Button variant='contained' onClick={onClick}>
          Schedule Meet
        </Button>
      </DialogContent>
    </Dialog>
  );
};
export default memo(ScheduleCallModal);
