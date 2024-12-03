import React from 'react';
import ScheduleForm from '../components/ScheduleForm';
import ScheduleList from '../components/ScheduleList';

const HomePage = () => {
  return (
    <div>
      <h1>日程列表</h1>
      <ScheduleForm />
      <ScheduleList />
    </div>
  );
};

export default HomePage;
