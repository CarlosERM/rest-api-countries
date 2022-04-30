import React, { useCallback, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useMyContext } from '../../../context';
import { FilterBody, Options, OptionsItem, WrapperFilter } from './style';

const Filter = () => {
  const [show, setShow] = useState(false);
  const { getCountryByFilter, getCountries, option, setOption, country } = useMyContext();

  useEffect(() => {
    setOption(undefined);
  }, [country]);

  useEffect(() => {
    if (option != null && option !== 'All') getCountryByFilter(option.toLowerCase());
    else getCountries();
  }, [option]);

  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleClickOption = useCallback(
    (e: EventTarget & HTMLLIElement) => {
      setOption(e.dataset.filter);
      setShow(!show);
    },
    [show],
  );

  return (
    <WrapperFilter>
      <FilterBody onClick={handleClick}>
        {option || 'Filter by Region'}
        <IoIosArrowDown />
      </FilterBody>
      {show && (
        <Options>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="All"
          >
            All
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Africa"
          >
            Africa
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="America"
          >
            America
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Asia"
          >
            Asia
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Europe"
          >
            Europe
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Oceania"
          >
            Oceania
          </OptionsItem>
        </Options>
      )}
    </WrapperFilter>
  );
};

export default Filter;
