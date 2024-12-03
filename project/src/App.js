import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScheduleProvider } from './context/ScheduleContext';
import HomePage from './pages/HomePage';
import CalendarPage from './pages/CalendarPage';

const App = () => {
  return (
    <ScheduleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </ScheduleProvider>
  );
};

export default App;
