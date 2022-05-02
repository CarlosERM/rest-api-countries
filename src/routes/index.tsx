import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Country } from '../pages/Country';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="rest-api-countries" element={<Home />} />
      <Route path="country/:countryname" element={<Country />} />
    </Routes>
  );
};

export default MyRoutes;
