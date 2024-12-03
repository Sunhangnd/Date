import React, { useContext } from 'react';
import CalendarView from '../components/CalendarView';
import { ScheduleContext } from '../context/ScheduleContext';

const CalendarPage = () => {
  //共享全局的日程数据
  const { schedules } = useContext(ScheduleContext);

  const handleDateClick = (day) => {
    alert(`点击的日期: ${day}`);
  };

  return (
    <div>
      <h1>日历视图</h1>
      <CalendarView schedules={schedules} onDateClick={handleDateClick} />
    </div>
  );
};

export default CalendarPage;
