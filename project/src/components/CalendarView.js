import React from 'react';
import dayjs from 'dayjs';


//模拟一个简单的 30 天日历
const CalendarView = ({ schedules, onDateClick }) => {
  const startOfMonth = dayjs().startOf('month');
  const daysInMonth = dayjs().daysInMonth();
  const startDay = startOfMonth.day();

  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const day = i - startDay + 1;
    return day > 0 && day <= daysInMonth ? day : null;
  });

  return (
    <div className="calendar-grid">
      {calendarDays.map((day, index) => (
        <div
          key={index}
          className={`calendar-cell ${day ? 'active' : ''}`}
          onClick={() => day && onDateClick(day)}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarView;
