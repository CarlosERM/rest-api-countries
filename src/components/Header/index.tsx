import React from 'react';
import { HeaderBody, HeaderTitle, HeaderToggle } from './style';

const Header = () => {
  return (
    <HeaderBody>
      <HeaderTitle>Where in thes world?</HeaderTitle>
      <HeaderToggle type="checkbox" />
    </HeaderBody>
  );
};

export default Header;
