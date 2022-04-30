/* eslint-disable operator-linebreak */
import React, { useCallback, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useMyContext } from '../../../context';
import handleOutsideClick from '../../../util';
import { FilterBody, Options, OptionsItem, WrapperFilter } from './style';

const Filter = () => {
  const { getCountryByFilter, getCountries, option, setOption, country } = useMyContext();
  const { ref, show, setShow } = handleOutsideClick(false);

  useEffect(() => {
    setOption(undefined);
  }, [country]);

  useEffect(() => {
    if (option != null && option !== 'All') getCountryByFilter(option.toLowerCase());
    else getCountries();
  }, [option]);

  const handleClickOption = useCallback(
    (e: EventTarget & HTMLLIElement) => {
      setOption(e.dataset.filter);
      setShow(false);
    },
    [show],
  );
  const handleClick = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <WrapperFilter ref={ref}>
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
            key="all"
          >
            All
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Africa"
            key="africa"
          >
            Africa
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="America"
            key="america"
          >
            America
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Asia"
            key="asia"
          >
            Asia
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Europe"
            key="europe"
          >
            Europe
          </OptionsItem>
          <OptionsItem
            onClick={(e) => {
              handleClickOption(e.currentTarget);
            }}
            data-filter="Oceania"
            key="oceania"
          >
            Oceania
          </OptionsItem>
        </Options>
      )}
    </WrapperFilter>
  );
};

export default Filter;
