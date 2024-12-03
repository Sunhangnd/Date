import React, { useContext } from 'react';
import { ScheduleContext } from '../context/ScheduleContext';


//使用 useContext 获取日程数据和操作函数
const ScheduleList = () => {
  const { schedules, dispatch } = useContext(ScheduleContext);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_SCHEDULE', payload: id });
  };

  return (
    <ul>
      {schedules.map((schedule) => (
        <li key={schedule.id}>
          <strong>{schedule.title}</strong> - {schedule.dateTime}
          <button onClick={() => handleRemove(schedule.id)}>删除</button>
        </li>
      ))}
    </ul>
  );
};

export default ScheduleList;
