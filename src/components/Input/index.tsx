import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { BodyInput, BoxInput } from './style';

const Input = () => {
  return (
    <BoxInput>
      <BodyInput type="text" placeholder="Search for a country..." />
      <AiOutlineSearch
        style={{
          position: 'absolute',
          top: '50%',
          left: '2.3rem',
          fontSize: '25px',
          transform: 'translateY(-150%)',
        }}
      />
    </BoxInput>
  );
};

export default Input;
