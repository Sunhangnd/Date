import React, { useState, useContext } from 'react';
import { ScheduleContext } from '../context/ScheduleContext';
import dayjs from 'dayjs';

const ScheduleForm = () => {
  const { dispatch } = useContext(ScheduleContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = {
      id: Date.now(),
      title,
      dateTime: dayjs(`${date} ${time}`).toISOString(),
    };
    dispatch({ type: 'ADD_SCHEDULE', payload: newSchedule });
    setTitle('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="标题"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">添加日程</button>
    </form>
  );
};

export default ScheduleForm;
