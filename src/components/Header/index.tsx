/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { BsMoonFill, BsMoon } from 'react-icons/bs';
import { useMyContext } from '../../context';

import { HeaderBody, HeaderTitle, HeaderToggle, Toggle } from './style';

const Header = () => {
  const { toggle, handleToggle } = useMyContext();
  return (
    <HeaderBody>
      <HeaderTitle>Where in the world?</HeaderTitle>
      <HeaderToggle>
        <Toggle onClick={handleToggle}>
          {toggle ? <BsMoonFill style={{ color: 'white' }} /> : <BsMoon />}
        </Toggle>
        <p style={{ fontSize: '15px' }}>Dark Mode</p>
      </HeaderToggle>
    </HeaderBody>
  );
};

export default Header;
