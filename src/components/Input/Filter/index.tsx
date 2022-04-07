import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';
import { BodyFilter, BodyFilterWrapper } from './style';

const Filter = () => {
  return (
    <BodyFilterWrapper>
      <BodyFilter>
        <option>Bruno Fagner</option>
        <option>Bruno Batista</option>
        <option>Alexandre</option>
        <option>Carlos Eduardo</option>
      </BodyFilter>
      <IoIosArrowDown
        style={{
          position: 'absolute',
          top: '50%',
          right: '.9375rem',
          transform: 'translateY(-50%)',
        }}
      />
    </BodyFilterWrapper>
  );
};

export default Filter;
