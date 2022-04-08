import React from 'react';
import { FilterBody, Options, OptionsItem } from './style';

const Filter = () => {
  return (
    <>
      <FilterBody>Filter by region</FilterBody>
      <Options>
        <OptionsItem>Africa</OptionsItem>
        <OptionsItem>America</OptionsItem>
        <OptionsItem>Asia</OptionsItem>
        <OptionsItem>Europe</OptionsItem>
        <OptionsItem>Oceania</OptionsItem>
      </Options>
    </>
  );
};

export default Filter;
