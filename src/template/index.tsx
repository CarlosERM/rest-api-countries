import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Template = () => {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </BrowserRouter>
  );
};
export default Template;
