import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Tester from './pages/tester';
import Host from './pages/host';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Tester />} />
      <Route path="/Host" element={<Host />} />
    </Routes>
  );
};

export default App;
