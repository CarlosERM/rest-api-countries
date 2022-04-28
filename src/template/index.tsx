import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import MyRoutes from '../routes';

const Template = () => {
  return (
    <BrowserRouter>
      <Header />
      <MyRoutes />
    </BrowserRouter>
  );
};
export default Template;
