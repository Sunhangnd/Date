import React, { createContext, useReducer } from 'react';
//共享
const ScheduleContext = createContext();

//ADD_SCHEDULE 添加新日程，REMOVE_SCHEDULE 删除指定日程
const scheduleReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SCHEDULE':
      return [...state, action.payload];
    case 'REMOVE_SCHEDULE':
      return state.filter(schedule => schedule.id !== action.payload);
    default:
      return state;
  }
};
//  使用 useReducer 管理日程的增删操作
const ScheduleProvider = ({ children }) => {
  const [schedules, dispatch] = useReducer(scheduleReducer, []);

  return (
    <ScheduleContext.Provider value={{ schedules, dispatch }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export { ScheduleContext, ScheduleProvider };
