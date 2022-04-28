import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Country } from '../pages/Country';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="country" element={<Country />} />
    </Routes>
  );
};

export default MyRoutes;
