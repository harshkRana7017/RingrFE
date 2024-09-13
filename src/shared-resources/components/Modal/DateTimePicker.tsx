import React, { useEffect, useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
interface DateTimePickerProps {}

const DateTimePicker: React.FC<DateTimePickerProps> = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<any>();
  useEffect(() => {
    console.log(selectedDateTime, 'slected');
  }, [selectedDateTime]);

  return (
    <div>
      <Datetime
        value={selectedDateTime}
        onChange={(date) => setSelectedDateTime(date)}
        dateFormat='YYYY-MM-DD'
        timeFormat='HH:mm'
      />
    </div>
  );
};

export default DateTimePicker;
