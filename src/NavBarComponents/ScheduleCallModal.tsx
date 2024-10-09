import React, { FC, memo, useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { getTime } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { isUserEmailAction } from 'store/actions/auth.action';
import { createCallAction } from 'store/actions/call.action';
import {
  isUserEmailSelector,
  isUserloadingSelector,
} from 'store/Selectors/UserSelector';
import AttendeesList from './AttendeeList';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

type ScheduleCallModalProps = {
  open: boolean;
  handleClose: (closE: boolean) => void;
};

const ScheduleCallModal: FC<ScheduleCallModalProps> = ({
  handleClose,
  open,
}) => {
  const dispatch = useDispatch();
  const isEmail = useSelector(isUserEmailSelector);
  const isLoading = useSelector(isUserloadingSelector);

  const [callMembers, setCallMembers] = useState<string[]>([]); // State to store the added call members

  const initialValues = {
    topic: '',
    callMember: '',
    scheduledDate: new Date(),
    scheduledTime: new Date(),
  };

  const validationSchema = Yup.object().shape({
    topic: Yup.string().required('Topic is required'),
    callMember: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    scheduledDate: Yup.date().required('Date is required'),
    scheduledTime: Yup.date().required('Time is required'),
  });

  const combineDateAndTime = (scheduledDate: Date, scheduledTime: Date) => {
    const combinedDateTime = new Date(
      scheduledDate.getFullYear(),
      scheduledDate.getMonth(),
      scheduledDate.getDate(),
      scheduledTime.getHours(),
      scheduledTime.getMinutes(),
      scheduledTime.getSeconds()
    );
    return getTime(combinedDateTime);
  };

  const onSubmit = (values: any, { resetForm }: any) => {
    const timeStamp = combineDateAndTime(
      values.scheduledDate,
      values.scheduledTime
    );
    if (timeStamp) {
      dispatch(
        createCallAction({
          is_call_private: true,
          scheduled_at: timeStamp,
          member_emails: callMembers, // Pass the array of call members
        })
      );
    }
    handleClose(false);
    resetForm();
    setCallMembers([]); // Clear the members after scheduling the meeting
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth={'xl'}>
      <DialogTitle>Schedule Meetings</DialogTitle>
      <DialogContent>
        <div className='h-[400px] w-[600px]'>
          {/* Formik wrapper for the entire form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              setFieldValue,
              setFieldTouched,
              validateField,
              values, // Access `values` from Formik here
              errors,
              touched,
            }) => {
              // useEffect to handle adding validated call members
              useEffect(() => {
                // If loading is false and the email is valid, add the callMember to the list
                if (!isLoading && isEmail && values.callMember) {
                  setCallMembers((prevMembers) => [
                    ...prevMembers,
                    values.callMember,
                  ]);
                }
              }, [isLoading, isEmail,]); // Add callMember to dependency

              return (
                <Form>
                  {/* Topic Field */}
                  <Field
                    as={TextField}
                    name='topic'
                    label='Topic'
                    fullWidth
                    margin='dense'
                    error={touched.topic && !!errors.topic}
                    helperText={<ErrorMessage name='topic' />}
                  />

                  {/* Date and Time Pickers */}
                  <div
                    style={{
                      marginTop: '20px',
                      display: 'flex',
                      gap: '100px',
                    }}
                  >
                    <div>
                      <label>Date</label>
                      <Datetime
                        inputProps={{
                          style: {
                            border: '2px solid #0000003B',
                            borderRadius: '4px',
                            padding: '16.5px',
                            outline: 'none',
                          },
                        }}
                        value={values.scheduledDate}
                        dateFormat='DD/MM/YYYY'
                        timeFormat={false}
                        closeOnSelect={true}
                        onChange={(date) => {
                          if (date instanceof Date) {
                            setFieldValue('scheduledDate', date);
                          } else if (
                            typeof date === 'object' &&
                            'toDate' in date
                          ) {
                            setFieldValue('scheduledDate', date.toDate());
                          }
                        }}
                      />
                      <ErrorMessage
                        name='scheduledDate'
                        component='div'
                        className='error'
                      />
                    </div>
                    <div>
                      <label>Time</label>
                      <Datetime
                        inputProps={{
                          style: {
                            border: '2px solid #0000003B',
                            borderRadius: '4px',
                            padding: '16.5px',
                            outline: 'none',
                          },
                        }}
                        value={values.scheduledTime}
                        dateFormat={false}
                        timeFormat='HH:mm'
                        closeOnSelect={true}
                        onChange={(time) => {
                          if (time instanceof Date) {
                            setFieldValue('scheduledTime', time);
                          } else if (
                            typeof time === 'object' &&
                            'toDate' in time
                          ) {
                            setFieldValue('scheduledTime', time.toDate());
                          }
                        }}
                      />
                      <ErrorMessage
                        name='scheduledTime'
                        component='div'
                        className='error'
                      />
                    </div>
                  </div>

                  {/* Call Member Field */}
                  <div
                    style={{
                      marginTop: '30px',
                      display: 'flex',
                      alignItems: 'start',
                      gap: '10px',
                    }}
                  >
                    <Field
                      as={TextField}
                      name='callMember'
                      label='Add Call Member'
                      fullWidth
                      margin='dense'
                      error={touched.callMember && !!errors.callMember}
                      helperText={<ErrorMessage name='callMember' />}
                    />
                    <Button
                      style={{ marginTop: '10px' }}
                      variant='contained'
                      onClick={async () => {
                        // Mark the field as touched and trigger validation
                        setFieldTouched('callMember', true);
                        const isValid = await validateField('callMember');

                        if (!errors.callMember) {
                          dispatch(isUserEmailAction(values.callMember)); // Validate email in the system
                        }
                      }}
                    >
                      Add
                    </Button>
                  </div>

                  {/* Attendees List */}
                  <AttendeesList attendees={callMembers} />

                  <Button
                    variant='contained'
                    type='submit'
                    style={{ marginTop: '20px' }}
                  >
                    Schedule Meet
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default memo(ScheduleCallModal);
