/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useMyContext } from '../../context';

import { BodyInput, BoxInput, SearchButton } from './style';

const Input = () => {
  const { getCountryByName, getCountries, country, setCountry } = useMyContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
    const name = e.currentTarget.value.split(' ')[0];
    if (name === '') {
      getCountries();
      console.log('oi');
    } else getCountryByName(name);
  };

  return (
    <BoxInput onSubmit={handleSubmit}>
      <div style={{ position: 'relative' }}>
        <BodyInput
          type="text"
          placeholder="Search for a country..."
          value={country}
          onChange={handleChange}
        />
        <SearchButton aria-label="search">
          <AiOutlineSearch className="search" />
        </SearchButton>
      </div>
    </BoxInput>
  );
};

export default Input;
