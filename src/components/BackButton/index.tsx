import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { CustomBackButton } from './style';

export const BackButton = () => {
  return (
    <NavLink to="/" style={{ textDecoration: 'none', display: 'inline' }}>
      <CustomBackButton>
        <BsArrowLeft style={{ fontSize: '1.4375rem' }} />
        Back
      </CustomBackButton>
    </NavLink>
  );
};
