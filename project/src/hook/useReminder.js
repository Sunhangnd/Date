import { useEffect } from 'react';
import dayjs from 'dayjs';

const useReminder = (schedules) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      schedules.forEach(schedule => {
        if (dayjs(schedule.dateTime).isSame(now, 'minute')) {
          alert(`提醒: ${schedule.title}`);
        }
      });
    }, 60000); // 每分钟检查一次

    return () => clearInterval(interval);
  }, [schedules]);
};

export default useReminder;
