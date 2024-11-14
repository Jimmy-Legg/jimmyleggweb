import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DreamsDonutsPage from '../pages/DreamsDonutsPage';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boulier" element={<BoulierPage />} />
      <Route path="/dreams-donuts" element={<DreamsDonutsPage />} />
    </Routes>
  );
};

export default AppRoutes;
