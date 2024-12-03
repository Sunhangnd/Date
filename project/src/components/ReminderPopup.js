import React from 'react';

const ReminderPopup = ({ message }) => {
  return (
    <div className="reminder-popup">
      <p>{message}</p>
    </div>
  );
};

export default ReminderPopup;
