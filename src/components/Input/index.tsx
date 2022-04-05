import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import BodyInput, { BoxInput } from './style';

const Input = () => {
  return (
    <BoxInput>
      <BodyInput placeholder="Search for a country..." />
      <AiOutlineSearch style={{ position: 'absolute', top: '1.25rem', left: '3.75rem' }} />
    </BoxInput>
  );
};

export default Input;
