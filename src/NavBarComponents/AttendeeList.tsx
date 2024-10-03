import React, { FC, useState } from 'react';
type AttendeesListType = {
  attendees: string[];
};
const AttendeesList: FC<AttendeesListType> = ({ attendees }) => {
  // State to toggle visibility of attendees list
  const [showAttendees, setShowAttendees] = useState(false);

  // Function to toggle visibility
  const toggleAttendees = () => {
    setShowAttendees((prevShow) => !prevShow);
  };

  return (
    <div>
      {/* Div that shows the length of the attendees array */}
      <div onClick={toggleAttendees} style={styles.attendeesHeader}>
        Attendees ({attendees.length})
      </div>

      {/* Conditionally render the attendees list */}
      {showAttendees && (
        <div style={styles.attendeesList}>
          <ul>
            {attendees.map((attendee, index) => (
              <li key={index}>{attendee}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Inline styles for simple styling (optional)
const styles = {
  attendeesHeader: {
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    width: '200px',
  },
  attendeesList: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#fafafa',
    border: '1px solid #eee',
  },
};

export default AttendeesList;
