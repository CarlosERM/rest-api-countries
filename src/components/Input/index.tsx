import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useMyContext } from '../../context';

import { BodyInput, BoxInput } from './style';

const Input = () => {
  const { getCountryByName, getCountries } = useMyContext();

  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
    const name = e.currentTarget.value.split(' ')[0];
    if (name === '') getCountries();
    else getCountryByName(name);
  };

  return (
    <BoxInput onSubmit={handleSubmit}>
      <BodyInput
        type="text"
        placeholder="Search for a country..."
        value={country}
        onChange={handleChange}
      />
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
